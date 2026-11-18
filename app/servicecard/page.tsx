import type { Metadata } from "next";
import ServiceCards from "@/components/ServiceCards";

export const metadata: Metadata = {
  description:
    "Hotline hỗ trợ, tra cứu hóa đơn tiền nước và hướng dẫn thanh toán — Công ty TNHH - Tập đoàn Hải Châu Việt Nam.",
};

export default function ServiceCardPage() {
  return <ServiceCards />;
}
