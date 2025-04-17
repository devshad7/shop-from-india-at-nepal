import About from "@/components/About";
import Brands from "@/components/Brands";
import CalcAlert from "@/components/CalcAlert";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToOrder from "@/components/HowToOrder";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import WhyToChooseUs from "@/components/WhyToChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative top-16">
        <Hero />
        <Brands />
        <About />
        <HowToOrder />
        <WhyToChooseUs />
        <Review />
        <FAQs />
        <Footer />
      </div>
    </>
  );
}
