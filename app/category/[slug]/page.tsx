import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleListView from "@/components/article/ArticleListView";
import ArticleListPagination from "@/components/article/ArticleListPagination";
import CategorySubmenuTabsHeader from "@/components/category/CategorySubmenuTabsHeader";
import { categoryService } from "@/services/category";
import {
  getEnhancedCategoryTree,
  resolveCategoryContext,
} from "@/lib/categoryTree";
import type { Article, PaginatedMeta } from "@/types";
import TraCuuHoaDonClient from "@/components/qlkh/TraCuuHoaDonClient";
import GiaNuocSinhHoatSection from "@/components/qlkh/GiaNuocSinhHoatSection";
import LienHeSection from "@/components/gioi-thieu/LienHeSection";
import QuaTrinhHinhThanhSection from "@/components/gioi-thieu/QuaTrinhHinhThanhSection";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params;
  return {};
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

  // Lấy cây danh mục để xác định Menu Cha và danh sách các Menu Con (tabs)
  const tree = await getEnhancedCategoryTree();
  const ctx = resolveCategoryContext(tree, slug);

  // Nếu bấm vào Menu Cha có các Menu Con -> mặc định kích hoạt Tab Menu Con đầu tiên
  const effectiveSlug = ctx?.activeSlug ?? slug;
  const parentTitle = ctx?.parentNode.name ?? slug;
  const tabs = ctx?.tabs ?? [];

  // Render phần thân tương ứng với Tab Menu Con đang được chọn
  async function renderTabBody() {
    if (effectiveSlug === "tra-cuu-hoa-don") {
      return <TraCuuHoaDonClient />;
    }

    if (effectiveSlug === "dang-ky-lap-dat-truc-tuyen") {
      const RegistrationForm = (
        await import("@/components/registration/RegistrationForm")
      ).default;
      return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <RegistrationForm />
        </div>
      );
    }

    if (effectiveSlug === "gia-nuoc-sinh-hoat") {
      return <GiaNuocSinhHoatSection />;
    }

    if (
      effectiveSlug === "lien-he" ||
      effectiveSlug === "lien-he-cong-ty"
    ) {
      return <LienHeSection />;
    }

    if (
      effectiveSlug === "qua-trinh-hinh-thanh-phat-trien" ||
      effectiveSlug === "hinh-thanh-phat-trien"
    ) {
      return <QuaTrinhHinhThanhSection />;
    }

    if (effectiveSlug === "thong-bao-hop-quy") {
      return (
        <div className="mx-auto w-full max-w-3xl px-4 py-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/van-ban/thong-bao-hop-quy.jpg"
            alt="Bản công bố hợp quy"
            className="block h-auto w-full rounded-xl border border-slate-200 shadow-sm"
          />
        </div>
      );
    }

    // Các danh mục bài viết thông thường
    let articles: Article[] = [];
    let meta: PaginatedMeta = { page: 1, pageSize: 9, total: 0, pages: 1 };
    let categoryName = ctx?.activeName ?? slug;

    try {
      const articlesResult = await categoryService.getArticlesBySlug(
        effectiveSlug,
        { page, size: 9 },
      );
      articles = articlesResult.result;
      meta = articlesResult.meta;

      // Nếu người dùng bấm vào Menu Cha mà Tab con đầu tiên chưa có bài, thử lấy bài gắn trực tiếp vào Menu Cha
      if (articles.length === 0 && ctx?.isRootClick && effectiveSlug !== slug) {
        try {
          const rootArticles = await categoryService.getArticlesBySlug(slug, {
            page,
            size: 9,
          });
          if (rootArticles.result.length > 0) {
            articles = rootArticles.result;
            meta = rootArticles.meta;
          }
        } catch {
          // ignore
        }
      }

      if (articles.length > 0 && articles[0].category?.name) {
        categoryName = articles[0].category.name;
      } else if (!ctx) {
        notFound();
      }
    } catch (err: unknown) {
      if ((err as { digest?: string })?.digest?.includes("NEXT_NOT_FOUND")) {
        throw err;
      }
      if (!ctx) notFound();
    }

    const categories = tree.map((n) => ({
      id: n.id,
      name: n.name,
      slug: n.slug,
    }));

    function buildUrl(newPage: number) {
      return `/category/${effectiveSlug}${newPage > 1 ? `?page=${newPage}` : ""}`;
    }

    return (
      <ArticleListView
        heroTitle={categoryName}
        heroDescription="Danh sách bài viết theo chuyên mục — cập nhật liên tục."
        articles={articles}
        totalCount={meta.total}
        categories={categories}
        activeCategorySlug={effectiveSlug}
        showCategoryTabs={false}
        hideHeroHeader={true}
      >
        <ArticleListPagination
          current={meta.page}
          lastPage={meta.pages}
          buildUrl={buildUrl}
        />
      </ArticleListView>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfdfe]">
      <CategorySubmenuTabsHeader
        parentTitle={parentTitle}
        tabs={tabs}
        activeSlug={effectiveSlug}
      />
      {await renderTabBody()}
    </div>
  );
}
