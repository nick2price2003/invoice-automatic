import ScrollUp from '@/components/Common/ScrollUp';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <About />
      <Pricing />
      <Contact />
    </>
  );
}
