import { useScroll, useTransform, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Sidebar from "./Sidebar";


const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX);
  const springY = useSpring(mouseY);

  const rotateX = useTransform(springY, [-550,550], [40,-40]);
  const rotateY = useTransform(springX, [-550,550], [-40,40]);

const rotationStrength = useTransform(scrollY, [0, 500], [1, 0]);

const finalRotateX = useTransform(
  [rotateX, rotationStrength], 
  ([rX, strength]) => rX * strength
);
const finalRotateY = useTransform(
  [rotateY, rotationStrength], 
  ([rY, strength]) => rY * strength
);

const logoX = useTransform(scrollY, [0, 500], [isMobile ? 0 : 450, 0]);

  const logoYFinal = isMobile ? -372 : -415;
  const logoY = useTransform(scrollY, [0, 500], [isMobile ? 150 : 50, logoYFinal]);
const logoScale = useTransform(scrollY, [0, 500], [isMobile ? 2 : 5, 1]);

const textTranslateX = isMobile ? "-40%" : "-160%";
const textTranslatey = isMobile ? "-70%" : "-50%";

  const headerOpacity = useTransform(scrollY, [500, 600], [0, 1]);
  const headerWidth = useTransform(scrollY, [200, 500], [1, 110]);
  const logoColor = useTransform(scrollY, [100, 400], ["#303136", "#ffffff"]);
  const logoBGColor = useTransform(scrollY, [500, 600], ["", "#e13c39"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="h-[400vh] bg-zinc-950">

      <button 
        onClick={() => setLeftMenuOpen(true)}
        className="fixed top-6 left-6 text-white flex flex-col gap-1.5 group p-2"
      >
        <span className="w-8 h-0.5 bg-white group-hover:bg-red-500 transition-colors"></span>
        <span className="w-5 h-0.5 bg-white group-hover:bg-red-500 transition-colors"></span>
      </button>

      <button 
        onClick={() => setRightMenuOpen(true)}
        className="fixed top-6 right-6 text-white flex flex-col items-end gap-1.5 group p-2"
      >
        <span className="w-8 h-0.5 bg-white group-hover:bg-red-500 transition-colors"></span>
        <span className="w-5 h-0.5 bg-white group-hover:bg-red-500 transition-colors"></span>
      </button>

      <Sidebar side="left" isOpen={leftMenuOpen} onClose={() => setLeftMenuOpen(false)} />
      <Sidebar side="right" isOpen={rightMenuOpen} onClose={() => setRightMenuOpen(false)} />

      <motion.nav
      style={{
        opacity: headerOpacity,
          width: headerWidth,
          backgroundColor: logoBGColor,
          x: "-50%",
          left: "50%"
      }}
      className="fixed top-0 md:top-2 h-25 z-50 border border-white/10 backdrop-blur-xl bg-[#303136] shadow-2xl"/>

      <div className="flex items-center justify-center h-screen">
        <motion.div
          style={{
            translateY: textTranslatey,
            translateX: textTranslateX,
            top: isMobile ? "40%" : "50%"
          }}
          className="fixed left-[50%] top-[50%] text-white font-light"
        >
          <h1 className="font-bold text-white text-5xl md:text-6xl leading-15 md:leading-24 w-100 text-left mb-10">
            Yeni Nesil Öğrenme Teknolojileri.
          </h1>
          <p className="w-80 leading-7 text-md md:w-100">
            Eğitim ve İnsan Kaynakları Teknolojileri alanında basit, kullanışlı ve yenilikçi ürünler ve projeler oluşturmak için bir araya gelen deneyimli, enerjik ve tutkulu bir ekibiz.
          </p>
         <p
  className="
    relative inline-flex items-center gap-3.5 mt-6.5 pb-2 max-w-max
    cursor-pointer text-white

    before:absolute before:left-0 before:bottom-0
    before:h-0.5 before:w-full
    before:bg-white

    after:absolute after:left-0 after:bottom-0
    after:h-0.5 after:w-full
    after:bg-red-500
    after:origin-left
    after:scale-x-0
    after:transition-transform after:duration-500 after:ease-out

    hover:after:scale-x-100
    hover:text-red-500
  "
>
  Çözümlerimiz ile tanışın
  <FaArrowRightLong />
</p>

          <div className="hidden md:flex items-center gap-5.5 fixed -bottom-40">
            <div>
                <motion.div 
                animate={{ 
    y: [-5, 15],            
    opacity: [0, 1, 0],    
  }}
  transition={{ 
    duration: 2,           
    repeat: Infinity,      
    ease: "linear",        
    times: [0, 0.15, 1],    
  }}
                className="w-0.5 h-2.5 bg-white fixed -bottom-35 left-2.25 rounded-full"/>
            <div className="w-5 h-9 border border-white rounded-br-2xl rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl"/>
            </div>
          <p>Devam etmek için aşağı kaydır</p>
          </div>
        </motion.div>

        <div style={{ perspective: 1000 }} className="fixed inset-0 pointer-events-none flex items-center justify-center z-100">
        <motion.div
          style={{
            x: logoX,
            y: logoY,
            color: logoColor,
            scale: logoScale,
            left: "50%",
            top: "50%",
            translateX: "-50%",
            translateY: "-50%",
            position: "fixed",
            rotateX: finalRotateX,
            rotateY: finalRotateY,
            transformStyle: "preserve-3d"
          }}
          className="z-60 flex items-center justify-center"
        >
          <svg width={"100"} height={"auto"} viewBox="0 0 61 40" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="26" y="34" width="5" height="6"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.6011 34.2115H30.2615V39.0961H26.6011V34.2115Z" fill="currentColor"></path></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.2615 35.9688C30.275 35.1107 29.7077 34.2115 28.5592 34.2115H26.6011V39.0961H27.7846V37.6569H28.5596C29.6808 37.6569 30.2477 36.813 30.2615 35.9688ZM29.1058 35.9619C29.1058 36.2457 28.9261 36.543 28.5592 36.543H28.5588H27.7838V35.3599H28.5596C28.9261 35.3599 29.1058 35.6711 29.1058 35.9619Z" fill="currentColor"></path></g><path d="M36.9108 35.3046H36.1077V38.0373H36.9104V39.0961H34.1219V38.0373H34.9246V35.3046H34.1219V34.225H36.9104L36.9108 35.3046Z" fill="currentColor"></path><mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="40" y="34" width="6" height="6"><path fill-rule="evenodd" clip-rule="evenodd" d="M40.7439 34.2527H45.1862V39.0961H40.7439V34.2527Z" fill="currentColor"></path></mask><g mask="url(#mask1)"><path d="M45.1789 34.3635L43.6289 36.64L45.1862 38.9996V39.0961H43.9127L42.9577 37.6227L42.017 39.0961H40.7439V38.9992L42.2939 36.6396L40.7643 34.3911V34.2527H42.0101L42.9581 35.6296L43.9197 34.2527H45.1789V34.3635Z" fill="currentColor"></path></g><mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="49" y="34" width="4" height="6"><path fill-rule="evenodd" clip-rule="evenodd" d="M49.2812 34.2115H52.4781V39.0961H49.2812V34.2115Z" fill="currentColor"></path></mask><g mask="url(#mask2)"><path d="M50.4716 37.9542H52.4781V39.0965H49.2812V34.2115H52.4712V35.3526H50.4716V36.0311H52.4297V37.1796H50.472L50.4716 37.9542Z" fill="currentColor"></path></g><mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="56" y="34" width="4" height="6"><path fill-rule="evenodd" clip-rule="evenodd" d="M56.7127 34.2523H59.93V39.0961H56.7127V34.2523Z" fill="currentColor"></path></mask><g mask="url(#mask3)"><path d="M57.8962 37.9542H59.93V39.0965H56.7127V34.2519H57.8962V37.9542Z" fill="currentColor"></path></g><mask id="mask4" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="39"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.384644H47.99V38.8462H0V0.384644Z" fill="currentColor"></path></mask><g mask="url(#mask4)" id="logo-90px"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.7819 0.551525C31.3042 -0.128091 27.0715 1.31037 23.9973 4.05537C21.1458 1.50306 17.2788 0.068063 13.0873 0.444217C6.24229 1.0596 0.714985 6.56845 0.0665236 13.4265C-0.702322 21.5538 5.29575 28.4834 13.0631 29.2077L8.63306 38.8461H16.7608C18.2499 38.8453 19.6022 37.9773 20.2231 36.6238L24.9334 26.375C27.4228 28.2572 30.4592 29.2742 33.58 29.2711C41.9823 29.2711 48.7269 22.0265 47.925 13.4423C47.3134 6.90576 42.2588 1.53537 35.7819 0.551525ZM9.65306 14.8281C9.65306 12.1946 11.7831 10.06 14.41 10.06C17.0361 10.06 19.1658 12.1946 19.1658 14.8281C19.1658 17.4615 17.0361 19.5961 14.41 19.5961C11.7831 19.5961 9.65306 17.4615 9.65306 14.8281ZM28.8234 14.8281C28.8234 17.4615 30.9527 19.5961 33.58 19.5961C36.2069 19.5961 38.3369 17.4615 38.3369 14.8281C38.3369 12.1946 36.2069 10.06 33.58 10.06C30.9527 10.06 28.8234 12.1946 28.8234 14.8281Z" fill="currentColor"></path></g><path d="M24.0289 3.90767C23.6846 3.72959 23.335 3.55805 22.9843 3.38574C23.335 3.55843 23.6846 3.72959 24.0289 3.90805" fill="#221F1F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1623 14.6685C19.1515 14.0354 18.9585 13.3216 18.7008 12.7777C18.9988 9.24925 20.2288 5.46772 22.0404 2.58118C22.737 3.01059 23.3922 3.50373 23.9977 4.05425C21.0796 6.54502 19.1785 10.6677 19.1623 14.6685ZM10.9885 33.7223L13.0519 29.205C13.4942 29.2462 15.5785 29.27 16.4315 29.1127C23.1565 27.8693 28.335 21.9512 28.205 14.8781C28.3912 24.9477 20.8808 33.2123 10.9885 33.7223Z" fill="#E13C39"></path></svg>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;