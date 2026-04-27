"use client";

import { motion } from "framer-motion";

const diferenciais = [
  {
    title: "Design que Acolhe e Converte",
    description:
      'Não é apenas um site "bonitinho". Crio interfaces que transmitem a confiança necessária para que o paciente sinta segurança em agendar a primeira consulta.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Otimizado para Anúncios (Ads)",
    description:
      "Sua landing page é construída com o índice de qualidade do Google em mente. Menos custo por clique e mais eficiência nas suas campanhas de tráfego pago.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Foco Total em Dispositivos Móveis",
    description:
      "80% dos agendamentos vêm do celular. Seu site será ultra-veloz e intuitivo no mobile, garantindo que ninguém desista por lentidão.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Diferenciais() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Lado Esquerdo: Texto de Introdução */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
            >
              Diferenciais
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mt-4 leading-tight"
            >
              Por que ter um site <br />
              <span className="font-bold text-blue-600 italic">exclusivo?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-slate-600 text-lg font-light leading-relaxed max-w-sm"
            >
              Psicologia é sobre conexão. Seu site deve ser a extensão digital
              do seu consultório: acolhedor, profissional e direto.
            </motion.p>
          </div>

          {/* Lado Direito: Lista de Diferenciais */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-8">
            {diferenciais.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex gap-6 p-8 bg-white rounded-[32px] border border-slate-100 hover:shadow-xl hover:shadow-blue-600/5 transition-all"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
