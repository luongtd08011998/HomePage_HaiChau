/**
 * URL ảnh/file media hiển thị trên trình duyệt.
 *
 * Tránh trỏ thẳng tới `http://127.0.0.1:8080` / `localhost` từ origin HTTPS public
 * (bị chặn bởi Private Network Access / loopback address space), đồng thời tự động
 * chuyển domain beta cũ sang `haichaugroup.vn` (hoặc đường dẫn tương đối).
 *
 * Quy ước: dùng path `/uploads/...` để Next/Nginx rewrite về backend (xem `next.config.ts`).
 */
export function publicMediaUrl(srcOrPath: string): string {
  if (!srcOrPath) return srcOrPath;
  if (srcOrPath.startsWith("data:")) return srcOrPath;

  // already same-origin relative
  if (srcOrPath.startsWith("/")) {
    return normalizeUploadsPath(srcOrPath);
  }

  if (/^https?:\/\//i.test(srcOrPath)) {
    try {
      const u = new URL(srcOrPath);
      const host = u.hostname.toLowerCase();
      const isLoopback =
        host === "localhost" ||
        host === "127.0.0.1" ||
        host === "::1" ||
        host.endsWith(".localhost");

      if (isLoopback) {
        return normalizeUploadsPath(`${u.pathname}${u.search}`);
      }

      // Chuyển đổi các URL cũ từ beta sang domain chính thức
      if (host === "beta.haichaugroup.vn" || host === "beta.toctienltd.vn") {
        if (
          u.pathname.startsWith("/uploads/") ||
          u.pathname.startsWith("/api/v1/uploads/")
        ) {
          return normalizeUploadsPath(`${u.pathname}${u.search}`);
        }
        u.hostname = "haichaugroup.vn";
        u.protocol = "https:";
        return u.toString();
      }

      return srcOrPath;
    } catch {
      return srcOrPath;
    }
  }

  return srcOrPath;
}

export function resolveThumb(thumbnail?: string | null): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return publicMediaUrl(thumbnail);
  const mediaBase = (process.env.NEXT_PUBLIC_MEDIA_URL || "").replace(
    /^https?:\/\/beta\.(haichaugroup|toctienltd)\.vn/i,
    "https://haichaugroup.vn",
  );
  return publicMediaUrl(mediaBase ? `${mediaBase}${thumbnail}` : thumbnail);
}

function normalizeUploadsPath(pathWithQuery: string): string {
  // Một số backend trả path kiểu `/api/v1/uploads/...` — chuẩn hoá về `/uploads/...`
  const withoutApi = pathWithQuery.replace(/^\/api\/v1(?=\/)/, "");
  return withoutApi;
}
