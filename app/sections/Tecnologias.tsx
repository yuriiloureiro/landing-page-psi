"use client";

import { motion } from "framer-motion";

const techItems = [
  {
    title: "SEO nativo",
    desc: "O site já nasce com uma base técnica pensada para o Google, com estrutura organizada, hierarquia clara e boas práticas que ajudam na visibilidade orgânica.",
    icon: "🔍",
  },
  {
    title: "Google Meu Negócio integrado",
    desc: "Sua presença local fica mais forte com integração pensada para reforçar autoridade regional e facilitar que novos pacientes encontrem você na busca.",
    icon: "📍",
  },
  {
    title: "Design responsivo",
    desc: "Experiência impecável em celular, tablet e desktop, com uma navegação fluida, leve e adaptada ao comportamento real de quem está procurando atendimento.",
    icon: "📱",
  },
  {
    title: "WhatsApp estratégico",
    desc: "Botões e pontos de contato posicionados no momento certo da jornada para transformar interesse em conversa com menos atrito.",
    icon: "💬",
  },
];

export default function Tecnologias() {
  return (
    <section id="tecnicos" className="py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="rounded-[40px] bg-slate-950 px-8 py-12 md:px-12 md:py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[120px]" />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-blue-400 font-bold tracking-[0.22em] uppercase text-[10px]"
            >
              Diferenciais técnicos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-4xl md:text-5xl font-light tracking-tight text-white max-w-3xl leading-[1.05]"
            >
              O <span className="font-bold text-blue-400">tempero técnico</span>{" "}
              que faz seu site performar.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 max-w-2xl text-slate-400 text-lg font-light leading-relaxed"
            >
              Por trás de cada página, existe uma estrutura pensada para
              aparecer melhor no Google, carregar rápido e converter mais
              visitantes em consultas.
            </motion.p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {techItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-7 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-light leading-relaxed text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
