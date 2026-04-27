"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ContactFooter() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      // campo honeypot para bots; não deve ser preenchido
      hp: formData.get("hp")?.toString() ?? "",
    };

    // cliente-side basic validation
    if (!payload.name || !payload.email) {
      setError("Por favor, preencha nome e e-mail.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = await res.json().catch(() => null);

      if (!res.ok) {
        setError(body?.error || "Erro ao enviar a mensagem. Tente novamente.");
        setLoading(false);
        return;
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Erro de rede. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }

  const email = "hello@loureiroyuri.com";

  return (
    <footer
      id="contato"
      className="bg-slate-950 pt-24 pb-12 text-white relative overflow-hidden"
    >
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50" />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center mb-24">
          {/* Lado Esquerdo: Call to Action */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl font-light tracking-tight leading-[1.05]"
            >
              Vamos criar a sua <br />
              <span className="font-bold text-blue-500 italic text-[0.9em]">
                presença digital?
              </span>
            </motion.h2>
            <p className="mt-8 text-slate-400 text-lg font-light leading-relaxed max-w-md">
              Dê ao seu consultório o site que ele merece. Preencha os dados e
              eu te enviarei uma proposta personalizada em até 24 horas.
            </p>

            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-slate-400 font-bold tracking-widest text-xs uppercase">
                {email}
              </span>
            </div>
          </div>

          {/* Lado Direito: Formulário de Lead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl"
          >
            {success ? (
              <div className="text-center py-10">
                <div className="text-blue-600 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Obrigado — sua proposta foi enviada!
                </h3>
                <p className="text-slate-600">
                  Vou responder em até 24 horas. Verifique também sua caixa de
                  spam caso não veja retorno.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-8 bg-transparent border border-slate-200 text-slate-900 py-3 px-6 rounded-2xl"
                >
                  Enviar outra
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Formulário de contato"
              >
                {/* HONEYPOT - deixe oculto para usuários */}
                <input
                  aria-hidden="true"
                  tabIndex={-1}
                  name="hp"
                  type="text"
                  className="hidden"
                />

                <div>
                  <label className="block text-slate-900 text-[10px] font-bold uppercase tracking-widest mb-2 px-1">
                    Nome Completo
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Como podemos te chamar?"
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-900 text-[10px] font-bold uppercase tracking-widest mb-2 px-1">
                    E-mail Profissional
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="seuemail@contato.com"
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-900 text-[10px] font-bold uppercase tracking-widest mb-2 px-1">
                    WhatsApp
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all uppercase tracking-[0.2em] text-xs disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Enviar Proposta"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Rodapé Final */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <p className="text-slate-500 text-sm font-light">
              © 2026 Yuri Loureiro. Todos os direitos reservados.
            </p>
          </div>
          <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.3em]">
            Code & Design by Yuri Loureiro
          </p>
        </div>
      </div>
    </footer>
  );
}
