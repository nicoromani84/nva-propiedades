import { isAdmin } from "../lib/auth.mjs";

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "Método no permitido" });
  return isAdmin(req) ? json(200, { ok: true }) : json(401, { error: "Contraseña incorrecta" });
};
