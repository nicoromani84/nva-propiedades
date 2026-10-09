import { getStore } from "@netlify/blobs";

const MAX_BYTES = 5 * 1024 * 1024;

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export default async (req) => {
  const password = process.env.ADMIN_PASSWORD;
  if (req.method !== "POST" || !password || req.headers.get("x-admin-password") !== password) {
    return json(401, { error: "No autorizado" });
  }

  const contentType = req.headers.get("content-type") || "";
  if (!contentType.startsWith("image/")) return json(400, { error: "El archivo debe ser una imagen" });

  const bytes = await req.arrayBuffer();
  if (bytes.byteLength === 0 || bytes.byteLength > MAX_BYTES) {
    return json(413, { error: "La imagen debe pesar menos de 5 MB" });
  }

  const key = `${Date.now()}-${crypto.randomUUID()}`;
  await getStore("imagenes").set(key, bytes, { metadata: { contentType } });
  return json(200, { url: `/.netlify/functions/imagen?key=${key}` });
};
