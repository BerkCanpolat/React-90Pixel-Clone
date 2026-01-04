import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Partners from "./Components/Partners";
import Awards from "./Components/Awards";


const Home = () => {
  return (
    <section>
        <div>
        <Hero />
        <Portfolio />
        </div>
        <Partners />
        <Awards />
    </section>
  )
};

export default Home;
