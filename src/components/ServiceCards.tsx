import Link from "next/link";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .94h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
      />
    </svg>
  );
}

function IconInvoice({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

/** Giấy tờ + bút — gợi đăng ký / hồ sơ lắp đặt. */
function IconRegisterOnline({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

const cardShell = `flex flex-col items-center rounded-3xl border border-rose-200/80 bg-[#fdf4f5] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9b111e]/35 hover:shadow-md sm:p-8 ${CARD_HOVER_CLASS}`;

/**
 * Trang dịch vụ: Hotline, tra cứu hóa đơn, đăng ký lắp đặt — dùng tại `/servicecard`.
 * Đồng bộ tông màu Đỏ Ruby (Ruby Red) của Tập đoàn Hải Châu Việt Nam.
 */
export default function ServiceCards() {
  return (
    <section
      className="relative overflow-hidden bg-white border-t border-rose-100/80"
      aria-labelledby="service-cards-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-rose-100/40 blur-3xl" />
        <div className="absolute -right-10 bottom-20 h-72 w-72 rounded-full bg-amber-100/35 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-5 pb-8 sm:px-6 sm:pt-10 sm:pb-20">
        {/* Mobile View (< md): 3 thẻ hàng ngang nhỏ gọn, tiết kiệm không gian màn hình */}
        <div className="grid grid-cols-1 gap-2.5 md:hidden">
          {/* Card 1: Hotline */}
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-rose-200/80 bg-[#fdf4f5] p-3 shadow-2xs transition active:scale-[0.99]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#9b111e] shadow-xs ring-1 ring-rose-200/70">
                <IconPhone className="h-5 w-5 text-[#9b111e]" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Hotline CSKH</span>
                  <span className="h-1 w-1 rounded-full bg-[#9b111e]" />
                  <span className="text-[11px] font-bold tabular-nums text-[#9b111e]">0254.3859380</span>
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wide text-[#580811] truncate">
                  Hỗ trợ trực tuyến
                </h2>
                <p className="text-[11px] text-slate-600 truncate">Tư vấn, sửa chữa & tiếp nhận hệ thống nước</p>
              </div>
            </div>
            <a
              href="tel:02543859380"
              className="inline-flex h-8 shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-[#9b111e] to-[#7c0d18] px-3.5 text-xs font-bold text-white shadow-xs transition hover:from-[#7c0d18] hover:to-[#580811] active:scale-95"
            >
              <span>Gọi</span>
              <span className="text-xs text-amber-300">→</span>
            </a>
          </div>

          {/* Card 2: Tra cứu hóa đơn */}
          <Link
            href="/category/tra-cuu-hoa-don"
            className="flex items-center justify-between gap-3 rounded-2xl border border-rose-200/80 bg-[#fdf4f5] p-3 shadow-2xs transition active:scale-[0.99]"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#9b111e] shadow-xs ring-1 ring-rose-200/70">
                <IconInvoice className="h-5 w-5 text-[#9b111e]" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Tiện ích tra cứu</span>
                <h2 className="text-sm font-bold uppercase tracking-wide text-[#580811] truncate">
                  Tra cứu hóa đơn
                </h2>
                <p className="text-[11px] text-slate-600 truncate">Kiểm tra tiền nước nhanh theo mã KH</p>
              </div>
            </div>
            <span className="inline-flex h-8 shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-[#9b111e] to-[#7c0d18] px-3 text-xs font-bold text-white shadow-xs transition hover:from-[#7c0d18] hover:to-[#580811]">
              <span>Tra cứu</span>
              <span className="text-xs text-amber-300">→</span>
            </span>
          </Link>

          {/* Card 3: Đăng ký lắp đặt */}
          <Link
            href="/category/dang-ky-lap-dat-truc-tuyen"
            className="flex items-center justify-between gap-3 rounded-2xl border border-rose-200/80 bg-[#fdf4f5] p-3 shadow-2xs transition active:scale-[0.99]"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#9b111e] shadow-xs ring-1 ring-rose-200/70">
                <IconRegisterOnline className="h-5 w-5 text-[#9b111e]" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Dịch vụ online</span>
                <h2 className="text-sm font-bold uppercase tracking-wide text-[#580811] truncate">
                  Đăng ký lắp đặt
                </h2>
                <p className="text-[11px] text-slate-600 truncate">Gửi hồ sơ lắp đồng hồ nước trực tuyến</p>
              </div>
            </div>
            <span className="inline-flex h-8 shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-[#9b111e] to-[#7c0d18] px-3 text-xs font-bold text-white shadow-xs transition hover:from-[#7c0d18] hover:to-[#580811]">
              <span>Đăng ký</span>
              <span className="text-xs text-amber-300">→</span>
            </span>
          </Link>
        </div>

        {/* Desktop View (md+): 3 cột đầy đủ ban đầu */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          <div className={cardShell}>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#9b111e] shadow-sm ring-1 ring-rose-200/70">
              <IconPhone className="h-7 w-7 text-[#9b111e]" />
            </div>
            <p className="text-sm font-medium text-slate-500">
              Hotline{" "}
              <a
                href="tel:02543859380"
                className="font-bold tabular-nums text-[#7c0d18] underline-offset-2 hover:underline"
              >
                0254.3859380
              </a>
            </p>
            <h2 className="mt-2 text-lg font-extrabold uppercase tracking-wide text-[#580811]">
              Hỗ trợ trực tuyến
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Tư vấn, tiếp nhận đăng ký lắp mới, sửa chữa, thay thế và di dời hệ
              thống nước.
            </p>
            <a
              href="tel:02543859380"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#9b111e] to-[#7c0d18] px-6 py-2 text-xs font-bold text-white shadow-sm transition hover:from-[#7c0d18] hover:to-[#580811]"
            >
              <span>Gọi ngay</span>
              <span className="text-amber-300">→</span>
            </a>
          </div>

          <Link
            href="/category/tra-cuu-hoa-don"
            className={cardShell}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#9b111e] shadow-sm ring-1 ring-rose-200/70">
              <IconInvoice className="h-7 w-7 text-[#9b111e]" />
            </div>
            <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#580811]">
              Tra cứu hóa đơn
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Tra cứu hóa đơn tiền nước nhanh chóng theo mã khách hàng.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#9b111e] to-[#7c0d18] px-6 py-2 text-xs font-bold text-white shadow-sm transition hover:from-[#7c0d18] hover:to-[#580811]">
              <span>Mở tra cứu</span>
              <span className="text-amber-300">→</span>
            </span>
          </Link>

          <Link
            href="/category/dang-ky-lap-dat-truc-tuyen"
            className={cardShell}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#9b111e] shadow-sm ring-1 ring-rose-200/70">
              <IconRegisterOnline className="h-7 w-7 text-[#9b111e]" />
            </div>
            <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#580811]">
              Đăng ký lắp đặt trực tuyến
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Gửi yêu cầu lắp mới trực tuyến qua website — Sau đó bộ phận CSKH
              hướng dẫn hồ sơ và lịch khảo sát.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#9b111e] to-[#7c0d18] px-6 py-2 text-xs font-bold text-white shadow-sm transition hover:from-[#7c0d18] hover:to-[#580811]">
              <span>Mở đăng ký online</span>
              <span className="text-amber-300">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
