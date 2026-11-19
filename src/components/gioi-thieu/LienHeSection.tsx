export default function LienHeSection() {
  const mapSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=155+L%C3%AA+H%E1%BB%93ng+Phong%2C+Ph%C6%B0%E1%BB%9Dng+Tam+Th%E1%BA%AFng%2C+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh";

  return (
    <div className="bg-[#fcfdfe] py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Khung thông tin liên hệ chính theo đúng mẫu hình ảnh */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-10">
          <h2 className="border-b border-slate-200 pb-4 text-xl font-extrabold tracking-tight text-[#0c2340] uppercase sm:text-2xl md:text-3xl">
            CÔNG TY TNHH - TẬP ĐOÀN HẢI CHÂU VIỆT NAM
          </h2>

          <div className="mt-6 space-y-3.5 text-sm leading-relaxed text-slate-700 sm:text-base">
            <p>
              <strong className="font-bold text-[#0c2340]">Địa chỉ:</strong>{" "}
              <span>
                Số 155 Lê Hồng Phong, Phường Tam Thắng, Thành phố Hồ Chí Minh.
              </span>
            </p>

            <p>
              <strong className="font-bold text-[#0c2340]">Giám đốc:</strong>{" "}
              <span>Phan Thanh Hải</span>
            </p>

            <p>
              <strong className="font-bold text-[#0c2340]">Mã số thuế:</strong>{" "}
              <span className="tabular-nums">3500122361</span>
            </p>

            <p>
              <strong className="font-bold text-[#0c2340]">
                Số tài khoản:
              </strong>
              <span>.</span>
            </p>

            <p>
              <strong className="font-bold text-[#0c2340]">Điện thoại:</strong>
              <a
                href="tel:02543859380"
                className="ml-1 tabular-nums font-medium text-slate-700 transition-colors hover:text-[#0284c7]"
              >
                0254.3859380
              </a>
            </p>

            <p>
              <strong className="font-bold text-[#0c2340]">Fax:</strong>{" "}
              <span className="tabular-nums">0254.3857106</span>
            </p>

            <p>
              <strong className="font-bold text-[#0c2340]">Email:</strong>{" "}
              <a
                href="mailto:Eoffice@haichaugroup.vn"
                className="font-medium text-[#0284c7] transition-colors hover:text-teal-700 hover:underline"
              >
                Eoffice@haichaugroup.vn
              </a>
            </p>

            <p>
              <strong className="font-bold text-[#0284c7]">Website:</strong>{" "}
              <a
                href="https://haichaugroup.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#0284c7] transition-colors hover:text-teal-700 hover:underline"
              >
                haichaugroup.vn
              </a>
            </p>
          </div>

          {/* Nút thao tác nhanh */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
            <a
              href="tel:02543859380"
              className="inline-flex items-center gap-2 rounded-full bg-[#1cd0b4] px-5 py-2.5 text-xs font-bold text-[#0c2340] shadow-xs transition hover:bg-[#18bda4] sm:text-sm"
            >
              <span>Gọi Hotline: 0254.3859380</span>
            </a>

            <a
              href="mailto:Eoffice@haichaugroup.vn"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-[#0c2340] transition hover:border-[#0284c7] hover:text-[#0284c7] sm:text-sm"
            >
              <span>Gửi Email liên hệ</span>
            </a>

            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-[#0c2340] transition hover:border-[#0284c7] hover:text-[#0284c7] sm:text-sm"
            >
              <span>Xem vị trí trên Google Maps →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

