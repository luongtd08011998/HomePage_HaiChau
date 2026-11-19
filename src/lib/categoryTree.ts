import { categoryService } from "@/services/category";
import type { CategoryNode } from "@/types";

export const FALLBACK_CATEGORY_TREE = [
  {
    id: 15,
    name: "Giới thiệu",
    slug: "gioi-thieu",
    active: 1,
    children: [
      { id: 49, name: "Quá trình hình thành và phát triển", slug: "qua-trinh-hinh-thanh-phat-trien", active: 1, children: [] },
      { id: 50, name: "Liên hệ", slug: "lien-he", active: 1, children: [] },
    ],
  },
  {
    id: 19,
    name: "Tin tức",
    slug: "tin-tuc",
    active: 1,
    children: [],
  },
  {
    id: 21,
    name: "Quan hệ khách hàng",
    slug: "quan-he-khach-hang",
    active: 1,
    children: [
      { id: 22, name: "Giá nước sinh hoạt", slug: "gia-nuoc-sinh-hoat", active: 1, children: [] },
      { id: 43, name: "Tra cứu hóa đơn", slug: "tra-cuu-hoa-don", active: 1, children: [] },
      { id: 44, name: "Đăng ký lắp đặt trực tuyến", slug: "dang-ky-lap-dat-truc-tuyen", active: 1, children: [] },
    ],
  },
  {
    id: 46,
    name: "Văn bản",
    slug: "van-ban",
    active: 1,
    children: [
      { id: 20, name: "Xét nghiệm nước", slug: "xet-nghiem-nuoc", active: 1, children: [] },
      { id: 48, name: "Văn bản khác", slug: "van-ban-khac", active: 1, children: [] },
    ],
  },
  {
    id: 47,
    name: "Lịch cúp nước - bảo dưỡng",
    slug: "lich-cup-nuoc-bao-duong",
    active: 1,
    children: [],
  },
] as unknown as CategoryNode[];

export const STATIC_HOP_QUY_ITEM = {
  id: -1001,
  name: "Thông báo hợp quy",
  slug: "thong-bao-hop-quy",
  href: "/category/thong-bao-hop-quy",
  active: 1,
  children: [],
} as unknown as CategoryNode;

export async function getEnhancedCategoryTree(): Promise<CategoryNode[]> {
  let categoryTree: CategoryNode[] = [];
  try {
    categoryTree = await categoryService.getTree();
  } catch {
    // fallback if API fails
  }

  const baseTree =
    categoryTree && categoryTree.length > 0
      ? categoryTree
      : FALLBACK_CATEGORY_TREE;

  return baseTree.map((root) => {
    if (root.slug !== "van-ban") return root;
    const existing = root.children ?? [];
    if (existing.some((c) => c.slug === STATIC_HOP_QUY_ITEM.slug)) return root;
    return {
      ...root,
      children: [STATIC_HOP_QUY_ITEM, ...existing],
    };
  });
}

export interface ResolvedCategoryContext {
  /** Danh mục gốc (Menu Cha) */
  parentNode: CategoryNode;
  /** Các danh mục con (Menu Con) của Menu Cha để hiển thị thành thanh Tab ngang */
  tabs: CategoryNode[];
  /** Slug của tab đang được chọn (nếu bấm vào Menu Cha có con thì mặc định chọn tab con đầu tiên) */
  activeSlug: string;
  /** Tên của tab đang được chọn */
  activeName: string;
  /** Người dùng đang bấm trực tiếp vào Menu Cha hay Menu Con */
  isRootClick: boolean;
}

export function resolveCategoryContext(
  tree: CategoryNode[],
  slug: string,
): ResolvedCategoryContext | null {
  for (const root of tree) {
    const children = (root.children ?? []).filter((c) => c.active !== 0);

    // 1. Nếu bấm trực tiếp vào Menu Cha
    if (root.slug === slug) {
      if (children.length > 0) {
        return {
          parentNode: root,
          tabs: children,
          activeSlug: children[0].slug,
          activeName: children[0].name,
          isRootClick: true,
        };
      }
      return {
        parentNode: root,
        tabs: [],
        activeSlug: root.slug,
        activeName: root.name,
        isRootClick: true,
      };
    }

    // 2. Nếu bấm vào một Menu Con trực tiếp
    const matchedChild = children.find((c) => c.slug === slug);
    if (matchedChild) {
      return {
        parentNode: root,
        tabs: children,
        activeSlug: matchedChild.slug,
        activeName: matchedChild.name,
        isRootClick: false,
      };
    }

    // 3. Nếu bấm vào Menu Cháu (cấp 3)
    for (const child of children) {
      const grandChildren = (child.children ?? []).filter((g) => g.active !== 0);
      const matchedGrand = grandChildren.find((g) => g.slug === slug);
      if (matchedGrand) {
        return {
          parentNode: child,
          tabs: grandChildren,
          activeSlug: matchedGrand.slug,
          activeName: matchedGrand.name,
          isRootClick: false,
        };
      }
    }
  }

  return null;
}
