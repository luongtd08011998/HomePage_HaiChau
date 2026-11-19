import Link from "next/link";
import type { CategoryNode } from "@/types";

function ThreeWaterDrops() {
  return (
    <div
      className="mt-3 flex items-end justify-center gap-2.5"
      aria-hidden="true"
    >
      {/* Giọt nhỏ bên trái */}
      <svg className="h-5 w-4 text-[#0284c7]" viewBox="0 0 24 32" fill="none">
        <path
          d="M12 2C12 2 2 14.5 2 21.5C2 27.0228 6.47715 31.5 12 31.5C17.5228 31.5 22 27.0228 22 21.5C22 14.5 12 2 12 2Z"
          fill="currentColor"
        />
        <circle cx="12" cy="22" r="4.5" fill="#e0f2fe" />
      </svg>

      {/* Giọt lớn ở giữa */}
      <svg className="h-7 w-5 text-[#0c2340]" viewBox="0 0 24 32" fill="none">
        <path
          d="M12 1C12 1 1.5 14 1.5 21.5C1.5 27.299 6.20101 32 12 32C17.799 32 22.5 27.299 22.5 21.5C22.5 14 12 1 12 1Z"
          fill="url(#categoryDropGradient)"
        />
        <circle cx="12" cy="22" r="5" fill="#e0f2fe" />
        <defs>
          <linearGradient
            id="categoryDropGradient"
            x1="12"
            y1="1"
            x2="12"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0284c7" />
            <stop offset="1" stopColor="#0c2340" />
          </linearGradient>
        </defs>
      </svg>

      {/* Giọt nhỏ bên phải */}
      <svg className="h-5 w-4 text-[#0284c7]" viewBox="0 0 24 32" fill="none">
        <path
          d="M12 2C12 2 2 14.5 2 21.5C2 27.0228 6.47715 31.5 12 31.5C17.5228 31.5 22 27.0228 22 21.5C22 14.5 12 2 12 2Z"
          fill="currentColor"
        />
        <circle cx="12" cy="22" r="4.5" fill="#e0f2fe" />
      </svg>
    </div>
  );
}

interface CategorySubmenuTabsHeaderProps {
  parentTitle: string;
  tabs: CategoryNode[];
  activeSlug: string;
}

export default function CategorySubmenuTabsHeader({
  parentTitle,
  tabs,
  activeSlug,
}: CategorySubmenuTabsHeaderProps) {
  return (
    <div className="bg-white pt-8 sm:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TIÊU ĐỀ MENU CHA + BIỂU TƯỢNG 3 GIỌT NƯỚC */}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-wide text-[#0c2340] uppercase sm:text-3xl md:text-4xl">
            {parentTitle}
          </h1>
          <ThreeWaterDrops />
        </div>

        {/* THANH TAB NGANG LIỆT KÊ CÁC MENU CON (CÓ MŨI TÊN CHỈ XUỐNG DƯỚI TAB ĐANG CHỌN) */}
        {tabs.length > 0 ? (
          <div className="mt-7 border-b border-slate-200">
            <nav
              aria-label={`Danh mục con của ${parentTitle}`}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 md:gap-10"
            >
              {tabs.map((tab) => {
                const isActive = tab.slug === activeSlug;
                const href = tab.href ?? `/category/${tab.slug}`;
                return (
                  <Link
                    key={tab.id ?? tab.slug}
                    href={href}
                    className={`relative px-3 py-3.5 text-xs font-extrabold tracking-wider uppercase transition-colors sm:px-4 sm:py-4 sm:text-sm md:text-[15px] ${
                      isActive
                        ? "text-[#0ea5e9]"
                        : "text-[#0c2340] hover:text-[#1cd0b4]"
                    }`}
                  >
                    <span>{tab.name}</span>

                    {isActive && (
                      <>
                        <span
                          className="absolute right-0 bottom-0 left-0 h-[3px] rounded-t-full bg-[#0ea5e9]"
                          aria-hidden="true"
                        />
                        <span
                          className="absolute -bottom-[7px] left-1/2 h-0 w-0 -translate-x-1/2 border-t-[7px] border-r-[7px] border-l-[7px] border-t-[#0ea5e9] border-r-transparent border-l-transparent"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : (
          <div className="mt-6 border-b border-slate-200/80" />
        )}
      </div>
    </div>
  );
}

