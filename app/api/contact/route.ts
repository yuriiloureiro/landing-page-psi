// app/api/contact/route.ts
import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
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

    // construindo html simples
    const html = `
      <h2>Novo lead — Landing Yuri Loureiro</h2>
      <p><strong>Nome:</strong> ${escapeHtml(body.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(body.phone ?? "")}</p>
      <hr/>
      <p>Origem: loureiroyuri.com</p>
    `;

    const resendApiKey = process.env.RESEND_API_KEY;
    const from = process.env.SENDER_EMAIL || "no-reply@loureiroyuri.com";
    const to = process.env.DESTINATION_EMAIL || "hello@loureiroyuri.com";

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Resend API key não configurada" },
        { status: 500 },
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Lead: ${body.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error:", text);
      return NextResponse.json(
        { error: "Falha ao enviar e-mail", detail: text },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<​", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
