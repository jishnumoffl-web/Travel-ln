import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import DestinationsSection from "@/components/Destination";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Package from "@/components/Package";
import SabarimalaPackage from "@/components/Sabarimala";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DestinationsSection />
      <Package />
      <SabarimalaPackage />
      <Testimonials />
      <ContactSection />
      <Footer />
      {/* <WhyChooseUs /> */}
    </>
  );
}
