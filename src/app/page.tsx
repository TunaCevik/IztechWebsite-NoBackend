import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { EventsSection } from "@/sections/Events";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <EventsSection></EventsSection>
      <TapeSection></TapeSection>
      <TestimonialsSection></TestimonialsSection>
      <AboutSection></AboutSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}
