"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const questions = [
  {
    q: "Quanto tempo demora para o site ficar pronto?",
    a: "Em média, o projeto leva de 7 a 15 dias úteis, dependendo da complexidade do layout e da agilidade no envio das informações necessárias para a personalização.",
  },
  {
    q: "Eu preciso escrever os textos do site?",
    a: "Não necessariamente. Eu posso te orientar com a estrutura ideal e com a direção do conteúdo para que os textos fiquem claros, profissionais e com foco em conversão.",
  },
  {
    q: "O site funciona bem no celular?",
    a: "Sim. Todo o projeto é pensado com prioridade para mobile, garantindo navegação leve, rápida e intuitiva em qualquer tela.",
  },
  {
    q: "O site já vem otimizado para aparecer no Google?",
    a: "Sim. A estrutura é desenvolvida com boas práticas de SEO desde o início, criando uma base sólida para o site ser melhor interpretado pelos mecanismos de busca.",
  },
  {
    q: "Posso pedir alterações depois que o site estiver no ar?",
    a: "Sim. Podemos combinar ajustes e evoluções conforme a necessidade do projeto, para que o site acompanhe o crescimento do seu consultório.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-blue-600 font-bold tracking-[0.22em] uppercase text-[10px]"
            >
              FAQ
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-4xl md:text-5xl font-light tracking-tight text-slate-900 leading-[1.05]"
            >
              Dúvidas{" "}
              <span className="font-bold text-blue-600">frequentes</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 text-lg font-light leading-relaxed text-slate-600 max-w-sm"
            >
              Antes de entrar em contato, é normal surgir dúvida. Aqui estão as
              respostas mais importantes para te ajudar a seguir com confiança.
            </motion.p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {questions.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-[28px] border border-slate-200 bg-white overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 p-6 md:p-7 text-left"
                  >
                    <span className="text-base md:text-lg font-semibold text-slate-900">
                      {item.q}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-blue-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:px-7 md:pb-7 text-slate-600 font-light leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
