// app/api/contact/route.ts
import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  hp?: string;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();

    // Honeypot anti-bot
    if (body.hp && body.hp.trim() !== "") {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios" },
        { status: 400 },
      );
    }

    const senderEnv = (process.env.SENDER_EMAIL || "").trim(); // esperar apenas o e-mail em env
    const dest = (process.env.DESTINATION_EMAIL || "").trim();
    const apiKey = (process.env.RESEND_API_KEY || "").trim();

    if (!apiKey || !senderEnv || !dest) {
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 },
      );
    }

    // Garantir formato "Nome <email@exemplo.com>" para o campo from
    const from =
      senderEnv.includes("<​") && senderEnv.includes(">")
        ? senderEnv // já veio no formato completo
        : `Yuri Loureiro <${senderEnv}>`;

    const subject = `Lead: ${body.name}`;
    const html = `
      <h2>Novo lead — Landing Yuri Loureiro</h2>
      <p><strong>Nome:</strong> ${escapeHtml(body.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(body.phone ?? "")}</p>
      <p><strong>Mensagem:</strong><br/>${escapeHtml(body.message ?? "")}</p>
      <hr/>
      <p>Origem: psicologos.loureiroyuri.com (landing)</p>
    `;
    const text = [
      "Novo lead — Landing Yuri Loureiro",
      `Nome: ${body.name}`,
      `Email: ${body.email}`,
      `WhatsApp: ${body.phone ?? ""}`,
      `Mensagem: ${body.message ?? ""}`,
      "Origem: psicologos.loureiroyuri.com",
    ].join("\n");

    // Chamada ao Resend
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [dest],
        subject,
        html,
        text,
        reply_to: body.email,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text().catch(() => "no details");
      console.error("Resend error:", detail);
      return NextResponse.json(
        { error: "Falha ao enviar e-mail", detail },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

function escapeHtml(s?: string) {
  if (!s) return "";
  return s
    .toString()
    .replaceAll("&", "&amp;")
    .replaceAll("<​", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
