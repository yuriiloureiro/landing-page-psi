"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Anna Araújo",
    description:
      "Landing page focada em Neuropsicologia Clínica com design acolhedor e alta performance.",
    image: "/images/card-anna.png",
    link: "https://annapsicologia.com.br/neuropsicologia-online/",
    tag: "Neuropsicologia",
  },
  {
    title: "Maiara Martins",
    description:
      "Plataforma elegante para Psicoterapia e Avaliação com foco em conversão de leads.",
    image: "/images/card-maiara.png",
    link: "https://www.neuropsimaiaramartins.com.br/",
    tag: "Psicologia Clínica",
  },
  {
    title: "Lumera",
    description:
      "Projeto minimalista e moderno focado em experiência do usuário e autoridade digital.",
    image: "/images/card-lumera.png",
    link: "https://lumera.loureiroyuri.com.br/",
    tag: "Saúde",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
          >
            Cases de Sucesso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mt-4"
          >
            Projetos reais,{" "}
            <span className="font-bold text-blue-600">
              resultados concretos.
            </span>
          </motion.h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:shadow-blue-600/10"
            >
              {/* Imagem do Case */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed mb-6 text-sm flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                  Ver site ao vivo
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to Action Secundário */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center border-t border-slate-100 pt-12"
        >
          <p className="text-slate-400 font-light italic">
            "Design não é apenas o que parece. Design é como funciona." — Steve
            Jobs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
