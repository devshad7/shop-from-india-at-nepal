import About from "@/components/About";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToOrder from "@/components/HowToOrder";
import Navbar from "@/components/Navbar";
import WhyToChooseUs from "@/components/WhyToChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <About />
      <HowToOrder />
      <WhyToChooseUs />
      <Footer />
    </>
  );
}
