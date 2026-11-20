"use client";

import Image from "next/image";
import Link from "next/link";

function IconArrowUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

const ADDRESS = "Số 155 Lê Hồng Phong, Phường Tam Thắng, Thành phố Hồ Chí Minh";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=155+L%C3%AA+H%E1%BB%93ng+Phong%2C+Ph%C6%B0%E1%BB%9Dng+Tam+Th%E1%BA%AFng%2C+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh";

const menuLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Tin tức & Sự kiện", href: "/news" },
  { label: "Tra cứu hóa đơn", href: "/category/tra-cuu-hoa-don" },
  { label: "Đăng ký lắp đặt", href: "/category/dang-ky-lap-dat-truc-tuyen" },
] as const;

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="mt-auto border-t border-rose-300/20 bg-gradient-to-br from-[#9b111e] via-[#7c0d18] to-[#580811] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:pt-12 lg:px-8 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:pb-[max(2rem,env(safe-area-inset-bottom,0px))]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Cột 1: Thương hiệu & Giới thiệu đơn vị */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-3.5 text-left outline-none"
            >
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-amber-300/70 shadow-md transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logocty1.jpg"
                  alt="Logo Công ty TNHH - Tập đoàn Hải Châu Việt Nam"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300">
                  Công ty TNHH
                </span>
                <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">
                  TẬP ĐOÀN HẢI CHÂU VIỆT NAM
                </span>
              </div>
            </Link>

            <p className="mt-3.5 max-w-md text-xs leading-relaxed text-rose-50/85 sm:text-sm">
              Đơn vị cung cấp nước sạch an toàn, ổn định và dịch vụ chăm sóc khách hàng trực tuyến nhanh chóng, minh bạch.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-rose-50/90 sm:text-sm">
              <p className="flex items-center gap-1.5">
                <span className="font-semibold text-amber-200">MST:</span>
                <span className="tabular-nums font-medium text-white">3500122361</span>
              </p>
              <span className="text-rose-200/40">•</span>
              <p className="flex items-center gap-1.5">
                <span className="font-semibold text-amber-200">Website:</span>
                <a
                  href="https://haichaugroup.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-300 transition-colors hover:text-white underline-offset-2 hover:underline"
                >
                  haichaugroup.vn
                </a>
              </p>
            </div>
          </div>

          {/* Cột 2: Thông tin liên hệ */}
          <div className="md:col-span-7 lg:col-span-4">
            <h4 className="mb-3 border-b border-rose-200/20 pb-2 text-sm font-bold tracking-wide text-amber-200 uppercase sm:mb-5 sm:pb-2.5 sm:text-base">
              Thông tin liên hệ
            </h4>
            <div className="space-y-2.5 sm:space-y-3.5">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 text-xs text-rose-50/95 transition-all duration-300 ease-out hover:text-amber-300 sm:text-sm"
              >
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-300 transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5" />
                <span className="min-w-0 break-words text-pretty leading-relaxed">
                  {ADDRESS}
                </span>
              </a>
              <div className="flex items-start gap-2.5 text-xs text-rose-50/95 sm:text-sm">
                <IconPhone
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-300 sm:h-5 sm:w-5"
                  aria-hidden
                />
                <div className="min-w-0 flex-1 leading-relaxed">
                  <span className="text-rose-100/80">Điện thoại:</span>{" "}
                  <a
                    href="tel:02543859380"
                    className="tabular-nums font-semibold text-white transition-colors hover:text-amber-300"
                  >
                    0254.3859380
                  </a>
                  <span className="text-rose-200/50"> | </span>
                  <span className="text-rose-100/80">Fax:</span>{" "}
                  <span className="tabular-nums font-semibold text-white">
                    0254.3857106
                  </span>
                </div>
              </div>
              <a
                href="mailto:Eoffice@haichaugroup.vn"
                className="group flex items-center gap-2.5 text-xs text-rose-50/95 transition-all duration-300 ease-out hover:text-amber-300 sm:text-sm"
              >
                <IconMail className="h-4 w-4 shrink-0 text-amber-300 transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5" />
                <span className="min-w-0">Eoffice@haichaugroup.vn</span>
              </a>

              <div className="pt-1">
                <a
                  href="tel:02543859380"
                  className="inline-flex items-center gap-1.5 rounded-full bg-amber-300 px-4 py-1.5 text-xs font-extrabold text-[#580811] shadow-sm transition-all duration-300 ease-out hover:bg-white hover:text-[#7c0d18] hover:scale-105 active:scale-95 sm:px-5 sm:py-2"
                >
                  <svg
                    className="h-3.5 w-3.5 -rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                  Liên hệ ngay
                </a>
              </div>
            </div>
          </div>

          {/* Cột 3: Liên kết nhanh */}
          <div className="md:col-span-5 lg:col-span-3">
            <h4 className="mb-3 border-b border-rose-200/20 pb-2 text-sm font-bold tracking-wide text-amber-200 uppercase sm:mb-5 sm:pb-2.5 sm:text-base">
              Liên kết nhanh
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-1 sm:gap-y-2.5">
              {menuLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 py-0.5 text-left text-xs text-rose-50/95 transition-all duration-300 ease-out hover:text-amber-300 sm:py-1 sm:text-sm sm:hover:translate-x-1.5"
                >
                  <IconChevronRight className="h-3.5 w-3.5 shrink-0 text-amber-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110 sm:h-4 sm:w-4" />
                  <span className="leading-snug truncate">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Dòng bản quyền & nút cuộn lên đầu trang dưới chân trang */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-rose-200/20 pt-5 text-center text-[11px] text-rose-100/75 sm:mt-10 sm:flex-row sm:text-left sm:text-xs">
          <p>
            © {new Date().getFullYear()} CÔNG TY TNHH - TẬP ĐOÀN HẢI CHÂU VIỆT NAM. Tất cả quyền được bảo lưu.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            title="Cuộn lên đầu trang"
            className="group inline-flex items-center gap-2 rounded-full border border-rose-200/30 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white transition-all duration-300 hover:border-amber-300 hover:bg-white/15 hover:text-amber-200 active:scale-95 cursor-pointer"
          >
            <IconArrowUp className="h-3.5 w-3.5 text-amber-300 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Cuộn lên đầu trang</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
