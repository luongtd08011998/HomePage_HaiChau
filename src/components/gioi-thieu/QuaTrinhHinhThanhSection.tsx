import Link from "next/link";

const HIGHLIGHTS = [
  {
    value: "25+",
    unit: "Năm kinh nghiệm",
    label: "Phát triển bền vững",
    desc: "Đơn vị tiên phong trong lĩnh vực đầu tư hạ tầng và cung cấp nước sạch tiêu chuẩn cao",
  },
  {
    value: "80.500",
    unit: "m³/ngày",
    label: "Công suất vận hành",
    desc: "Đáp ứng ổn định nhu cầu nước sinh hoạt và sản xuất công nghiệp toàn khu vực",
  },
  {
    value: "140.000",
    unit: "m³/ngày",
    label: "Quy hoạch mở rộng",
    desc: "Định hướng nâng công suất phục vụ chiến lược phát triển đô thị & công nghiệp tương lai",
  },
  {
    value: "24/7",
    unit: "SCADA & ISO",
    label: "Giám sát chất lượng",
    desc: "Kiểm soát chất lượng nước liên tục theo quy chuẩn QCVN của Bộ Y Tế & ISO 9001:2015",
  },
];

const MILESTONES = [
  {
    step: "Giai đoạn 01",
    title: "Khởi đầu & Đặt nền móng phát triển",
    desc: "Thành lập doanh nghiệp và xây dựng nền tảng hạ tầng kỹ thuật đầu tiên. Ngay từ những ngày đầu, đơn vị đã xác định sứ mệnh gắn liền với việc cung cấp nguồn nước sạch an toàn, ổn định phục vụ đời sống dân sinh và phát triển kinh tế địa phương.",
  },
  {
    step: "Giai đoạn 02",
    title: "Đầu tư mở rộng hạ tầng & Mạng lưới truyền tải",
    desc: "Tập trung nguồn lực đầu tư nâng cấp hệ thống trạm bơm, cụm xử lý nước và mở rộng hàng trăm kilomet đường ống truyền tải, phân phối nước sạch đến các khu dân cư đô thị và các khu công nghiệp trọng điểm.",
  },
  {
    step: "Giai đoạn 03",
    title: "Hiện đại hóa công nghệ xử lý nước chuẩn quốc tế",
    desc: "Chuyển giao và ứng dụng đồng bộ các công nghệ tiên tiến từ các quốc gia phát triển: Công nghệ lắng tải trọng cao (>20m/h), hệ thống đan lọc 2 tầng HDPE của Leopold (Hoa Kỳ), hệ thống khử trùng Clorine tự động từ Đức và trung tâm điều khiển tự động hóa SCADA.",
  },
  {
    step: "Giai đoạn 04",
    title: "Chuyển đổi số toàn diện — Tập đoàn Hải Châu Việt Nam",
    desc: "Công ty TNHH - Tập đoàn Hải Châu Việt Nam đẩy mạnh chuyển đổi số trong công tác quản lý vận hành và chăm sóc khách hàng: Triển khai hệ thống tra cứu hóa đơn điện tử, đăng ký lắp đặt đồng hồ nước trực tuyến và đa dạng hóa các kênh dịch vụ tiện ích hiện đại.",
  },
];

const CORE_VALUES = [
  {
    title: "Chất lượng đạt chuẩn Bộ Y Tế",
    desc: "Nước sạch sau xử lý luôn được phòng thí nghiệm kiểm nghiệm nghiêm ngặt định kỳ, đảm bảo đạt quy chuẩn kỹ thuật quốc gia về chất lượng nước sạch sinh hoạt.",
  },
  {
    title: "Công nghệ tiên tiến & Tự động hóa",
    desc: "Vận hành hệ thống giám sát SCADA 24/7 giúp kiểm soát lưu lượng, áp lực và các chỉ số hóa lý theo thời gian thực trên toàn mạng lưới.",
  },
  {
    title: "Lấy khách hàng làm trung tâm",
    desc: "Không ngừng cải tiến quy trình thủ tục, minh bạch thông tin hóa đơn, giá nước và hỗ trợ kỹ thuật nhanh chóng qua tổng đài 0254.3859380.",
  },
];

export default function QuaTrinhHinhThanhSection() {
  return (
    <div className="bg-[#fcfdfe] py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 1. KHỐI GIỚI THIỆU TỔNG QUAN */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c2340] via-[#0e2d52] to-[#081a30] p-6 text-white shadow-lg sm:p-10">
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#1cd0b4]/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl">
            <span className="inline-flex items-center rounded-full bg-[#1cd0b4]/20 px-4 py-1 text-xs font-bold tracking-wider text-[#1cd0b4] uppercase ring-1 ring-[#1cd0b4]/30">
              Tổng quan doanh nghiệp
            </span>
            <h2 className="mt-4 text-xl font-extrabold tracking-tight text-white uppercase sm:text-3xl">
              CÔNG TY TNHH - TẬP ĐOÀN HẢI CHÂU VIỆT NAM
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
              Trải qua quá trình xây dựng và trưởng thành,{" "}
              <strong className="text-white">
                Công ty TNHH - Tập đoàn Hải Châu Việt Nam
              </strong>{" "}
              đã khẳng định vị thế là một trong những đơn vị uy tín trong lĩnh
              vực đầu tư hạ tầng, sản xuất và cung cấp nước sạch phục vụ sinh
              hoạt, sản xuất công nghiệp và dịch vụ đô thị.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Với phương châm{" "}
              <em className="font-semibold text-[#1cd0b4]">
                &ldquo;An toàn chất lượng – Vận hành bền vững – Phục vụ tận
                tâm&rdquo;
              </em>
              , Tập đoàn không ngừng đầu tư đổi mới công nghệ, mở rộng quy mô
              công suất và ứng dụng chuyển đổi số nhằm nâng cao chất lượng cuộc
              sống cho cộng đồng và đồng hành cùng sự phát triển bền vững của
              các doanh nghiệp, khu công nghiệp.
            </p>
          </div>
        </div>

        {/* 2. 4 CHỈ SỐ NỔI BẬT */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition hover:-translate-y-1 hover:border-[#1cd0b4] hover:shadow-md"
            >
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-[#0c2340] sm:text-3xl">
                    {item.value}
                  </span>
                  <span className="text-xs font-bold text-teal-700 uppercase">
                    {item.unit}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-extrabold text-[#0c2340] uppercase">
                  {item.label}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 h-1 w-10 rounded-full bg-[#1cd0b4]" />
            </div>
          ))}
        </div>

        {/* 3. CHẶNG ĐƯỜNG HÌNH THÀNH & PHÁT TRIỂN (TIMELINE) */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">
              Chặng đường phát triển
            </span>
            <h2 className="mt-1.5 text-xl font-extrabold text-[#0c2340] uppercase sm:text-2xl">
              Các Cột Mốc Hình Thành & Phát Triển
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1cd0b4]" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {MILESTONES.map((m, idx) => (
              <div
                key={m.step}
                className="relative rounded-2xl border border-slate-200/80 bg-[#ebf4f6]/60 p-6 transition hover:border-[#1cd0b4] hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full bg-[#0c2340] px-3.5 py-1 text-xs font-bold text-[#1cd0b4]">
                    {m.step}
                  </span>
                  <span className="text-2xl font-black text-slate-300">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-3.5 text-base font-extrabold text-[#0c2340] sm:text-lg">
                  {m.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. GIÁ TRỊ CỐT LÕI & CAM KẾT */}
        <div className="rounded-3xl border border-slate-200/80 bg-[#ebf4f6] p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="rounded-2xl bg-white p-6 shadow-2xs ring-1 ring-slate-200/60"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0c2340] text-sm font-bold text-[#1cd0b4]">
                  ✓
                </div>
                <h3 className="text-base font-extrabold text-[#0c2340]">
                  {val.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0c2340] px-6 py-5 text-white sm:flex-row">
            <div>
              <h4 className="text-sm font-bold text-white sm:text-base">
                Thông tin liên hệ Công ty TNHH - Tập đoàn Hải Châu Việt Nam
              </h4>
              <p className="mt-0.5 text-xs text-slate-300">
                Địa chỉ: Số 155 Lê Hồng Phong, Phường Tam Thắng, TP. Hồ Chí Minh
                | ĐT: 0254.3859380
              </p>
            </div>
            <Link
              href="/category/lien-he"
              className="shrink-0 rounded-full bg-[#1cd0b4] px-5 py-2.5 text-xs font-bold text-[#0c2340] transition hover:bg-white"
            >
              Xem trang Liên hệ →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

