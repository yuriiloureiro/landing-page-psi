import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./sections/Hero";
import Diferenciais from "./sections/Diferenciais";
import Cases from "./sections/Cases";
import Tecnologias from "./sections/Tecnologias";
import FAQ from "./sections/FAQ";
import ContactFooter from "./sections/ContactFooter";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Diferenciais />
      <Cases />
      <Tecnologias />
      <FAQ />
      <ContactFooter />
      <WhatsAppButton />
    </main>
  );
}
