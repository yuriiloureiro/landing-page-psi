"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-slate-50 flex items-center min-h-[calc(100vh-64px)] pt-[116px] pb-12 lg:pt-16 lg:pb-0"
    >
      {/* Blobs Ambientais */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-400/10 rounded-full blur-[100px]" />
      </div>

      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 w-full h-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start lg:items-center h-full gap-6 sm:gap-8 lg:gap-16">
          {/* Conteúdo */}
          <div className="lg:col-span-7 flex flex-col justify-start lg:justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[1.45rem] sm:text-2xl lg:text-[clamp(2.2rem,3.6vw,4rem)] leading-[1.06] font-light tracking-tight text-slate-900"
            >
              Transforme suas visitas em consultas com um{" "}
              <span className="font-bold text-blue-600">
                site de alta performance
              </span>{" "}
              exclusivo para{" "}
              <span className="font-bold underline decoration-blue-600/20 underline-offset-8">
                Psicólogos
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-slate-500 max-w-xl mt-6 mb-8 leading-relaxed font-light"
            >
              Desenvolvo plataformas rápidas, elegantes e otimizadas para o
              Google, para que você foque no que importa: seus pacientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 sm:gap-8"
            >
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/30 transition-all active:scale-95"
                aria-label="Ir para solicitar orçamento"
              >
                Solicitar orçamento
              </a>

              <a
                href="#cases"
                className="group flex items-center gap-2 text-xs font-bold text-slate-800 tracking-widest uppercase border-b-2 border-transparent hover:border-blue-600 transition-all pb-1"
              >
                Ver cases de sucesso
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* Ilustração direita */}
          <div className="lg:col-span-5 flex items-start lg:items-center justify-center lg:justify-end mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[540px] -mt-4 sm:-mt-2 lg:mt-0"
            >
              <div className="absolute -inset-10 -z-10 rounded-full bg-blue-500/10 blur-[80px]" />
              <Image
                src="/images/ilustracao-hero.png"
                width={540}
                height={540}
                alt="Ilustração Yuri Loureiro"
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
