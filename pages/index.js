import Image from "next/image";
import { Inter } from "next/font/google";
import Introduction from "@/components/Introduction";
import AppBar from "@/components/common/AppBar";
import Banner from "@/components/Banner";
import ProductsContainer from "@/components/ProductContainer";
import ContactUs from "@/components/common/Contact";
import Footer from "@/components/common/Footer";
import AboutUs from "@/components/common/About";
import Internship from "@/components/Internship";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AppBar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-2 sm:p-6 md:p-16 ${inter.className}`}
      >
        <Introduction />
        <ProductsContainer />
        <Internship />
        <Banner />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
