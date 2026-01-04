import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Partners from "./Components/Partners";
import Awards from "./Components/Awards";
import Capabilities from "./Components/Capabilities";
import LetMeet from "./Components/Meets";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "./Components/Footer";


const Home = () => {
  return (
    <section>
        <div>
        <Hero />
        <Capabilities />
        <Portfolio />
        </div>
        <Partners />
        <Awards />
        <LetMeet />
        <div className="flex flex-col items-center justify-center">
        <p className="text-gray-500 text-2xl max-w-200 text-center mb-10">Teknoloji projelerinizde birlikte yürüyebileceğiniz bir iş ortağına mı ihtiyacınız var? Birlikte yazabileceğimiz başarı hikayelerini konuşalım.</p>
        <button className="w-22 h-22 bg-[#e13c39] flex items-center justify-center"><FaArrowRight className="text-white text-2xl"/></button>
      </div>
      <Footer />
    </section>
  )
};

export default Home;
