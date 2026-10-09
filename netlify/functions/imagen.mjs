import { getStore } from "@netlify/blobs";

export default async (req) => {
  const key = new URL(req.url).searchParams.get("key");
  if (!key || !/^[\w-]+$/.test(key)) return new Response("No encontrada", { status: 404 });

  const entry = await getStore("imagenes").getWithMetadata(key, { type: "arrayBuffer" });
  if (!entry) return new Response("No encontrada", { status: 404 });

  return new Response(entry.data, {
    headers: {
      "content-type": entry.metadata?.contentType || "image/jpeg",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
};
