import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsList from "@/components/productsList";

export default function Home(){
  return <>
  <Header/>
  <div className="md:w-[80%] mx-auto">
  <Hero/>
  <ProductsList/>
  </div>
  <Footer/>
  </>
}