const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export default async (req) => {
  const password = process.env.ADMIN_PASSWORD;
  if (req.method !== "POST" || !password) return json(401, { error: "No autorizado" });
  return req.headers.get("x-admin-password") === password
    ? json(200, { ok: true })
    : json(401, { error: "Contraseña incorrecta" });
};
