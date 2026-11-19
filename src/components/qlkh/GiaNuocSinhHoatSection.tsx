interface PriceRow {
  stt?: string;
  title: string;
  isGroupHeader?: boolean;
  oldPrice?: string;
  newPrice?: string;
}

const PRICE_ROWS: PriceRow[] = [
  {
    stt: "I",
    title: "Nước sinh hoạt đồng bào dân tộc",
    isGroupHeader: true,
  },
  {
    title: "- Từ 0 – 10m3/ đồng hồ/tháng",
    oldPrice: "4.500",
    newPrice: "5.500",
  },
  {
    title: "- Từ trên 10 -20 m3/ đồng hồ/tháng",
    oldPrice: "",
    newPrice: "11.000",
  },
  {
    title: "- Từ trên 20 m3/ đồng hồ/tháng",
    oldPrice: "",
    newPrice: "12.000",
  },
  {
    stt: "II",
    title: "Nước sinh hoạt nông thôn",
    isGroupHeader: true,
  },
  {
    title: "- Từ 0 – 10m3/ đồng hồ/tháng",
    oldPrice: "8.400",
    newPrice: "9.300",
  },
  {
    title: "- Từ trên 10 -20 m3/ đồng hồ/tháng",
    oldPrice: "11.000",
    newPrice: "11.000",
  },
  {
    title: "- Từ trên 20 m3/ đồng hồ/tháng",
    oldPrice: "",
    newPrice: "12.500",
  },
  {
    stt: "III",
    title: "Nước sinh hoạt đô thị",
    isGroupHeader: true,
  },
  {
    title: "- Từ 0 – 10m3/ đồng hồ/tháng",
    oldPrice: "8.500",
    newPrice: "9.400",
  },
  {
    title: "- Từ trên 10 -20 m3/ đồng hồ/tháng",
    oldPrice: "12.500",
    newPrice: "12.600",
  },
  {
    title: "- Từ trên 20 m3/ đồng hồ/tháng",
    oldPrice: "",
    newPrice: "13.500",
  },
  {
    stt: "IV",
    title: "Hành chính sự nghiệp",
    isGroupHeader: true,
    oldPrice: "12.500",
    newPrice: "13.100",
  },
  {
    stt: "V",
    title: "Sản xuất vật chất",
    isGroupHeader: true,
  },
  {
    title: "- Bán trực tiếp cho khách hàng",
    oldPrice: "12.500",
    newPrice: "13.400",
  },
  {
    title: "- Bán qua đồng hồ tổng KCN",
    oldPrice: "11.500",
    newPrice: "12.400",
  },
  {
    stt: "VI",
    title: "Kinh doanh dịch vụ",
    isGroupHeader: true,
    oldPrice: "19.000",
    newPrice: "20.200",
  },
];

export default function GiaNuocSinhHoatSection() {
  return (
    <div className="bg-[#fcfdfe] py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Khối bài viết bảng giá nước */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-8">
          <h1 className="mb-6 text-center text-lg font-extrabold tracking-tight text-[#0c2340] uppercase sm:text-2xl">
            BẢNG GIÁ NƯỚC ÁP DỤNG TỪ 01/01/2024
          </h1>

          <div className="overflow-x-auto">
            <table className="mx-auto w-full max-w-3xl border-collapse border border-slate-400 text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-100 text-[#0c2340]">
                  <th className="w-14 border border-slate-400 px-2 py-3 text-center font-bold">
                    STT
                  </th>
                  <th className="border border-slate-400 px-3 py-3 text-center font-bold">
                    ĐỐI TƯỢNG MỨC SỬ DỤNG
                  </th>
                  <th className="w-32 border border-slate-400 px-2 py-3 text-center font-bold sm:w-36">
                    <div>Giá cũ</div>
                    <div className="text-xs font-semibold text-slate-700 sm:text-sm">
                      ( VNĐ/m3 )
                    </div>
                  </th>
                  <th className="w-32 border border-slate-400 px-2 py-3 text-center font-bold sm:w-36">
                    <div>Giá mới</div>
                    <div className="text-xs font-semibold text-slate-700 sm:text-sm">
                      ( VNĐ/m3 )
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      row.isGroupHeader
                        ? "bg-slate-50/80 font-bold text-slate-900"
                        : "text-slate-700 hover:bg-slate-50/50"
                    }
                  >
                    <td className="border border-slate-400 px-2 py-2 text-center font-bold text-slate-900">
                      {row.stt ?? ""}
                    </td>
                    <td
                      className={`border border-slate-400 px-3 py-2 ${
                        row.isGroupHeader
                          ? "text-center font-bold text-slate-900"
                          : "text-left text-slate-600"
                      }`}
                    >
                      {row.title}
                    </td>
                    <td className="border border-slate-400 px-2 py-2 text-center font-bold tabular-nums text-slate-900">
                      {row.oldPrice ?? ""}
                    </td>
                    <td className="border border-slate-400 px-2 py-2 text-center font-bold tabular-nums text-slate-900">
                      {row.newPrice ?? ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ghi chú văn bản dưới bảng */}
          <div className="mt-6 space-y-2 border-t border-slate-200 pt-4 text-xs text-slate-600 sm:text-sm">
            <p>
              (*) <span className="font-medium text-[#0c2340]">Quyết định số 1486/QĐ-UBND</span>{" "}
              của UBND Tỉnh Bà Rịa - Vũng Tàu.
            </p>
            <p>
              (**) <span className="font-medium text-[#0c2340]">Thông báo số 61/TB_CNTT</span>{" "}
              của Công ty TNHH - Tập đoàn Hải Châu Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

