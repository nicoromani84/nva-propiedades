import { createHash, timingSafeEqual } from "node:crypto";

const ADMIN_PASSWORD_SHA256 = "08b705f57b5c1503a9fb0d6dc9ab0ec20236e9af669ea1cdd14ee07dea52f3c7";

export const isAdmin = (req) => {
  const given = createHash("sha256").update(req.headers.get("x-admin-password") ?? "").digest();
  return timingSafeEqual(given, Buffer.from(ADMIN_PASSWORD_SHA256, "hex"));
};
