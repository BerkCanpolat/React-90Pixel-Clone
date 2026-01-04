import { motion } from "framer-motion";
import r1 from "../assets/1.png";
import r2 from "../assets/2.png";
import r3 from "../assets/3.png";
import r4 from "../assets/4.png";
import r5 from "../assets/5.png";
import r6 from "../assets/6.png";
import r7 from "../assets/7.png";
import r8 from "../assets/8.png";
import r9 from "../assets/9.png";
import r10 from "../assets/10.png";

const row1 = [
  { name: "Türksat", src: `${r1}` },
  { name: "Aselsan", src: `${r2}` },
  { name: "Halkbank", src: `${r3}` },
  { name: "Ziraat", src: `${r4}` },
  { name: "QNB", src: `${r5}` },
];

const row2 = [
  { name: "Vestel", src: `${r6}` },
  { name: "LCW", src: `${r7}` },
  { name: "Hugo Boss", src: `${r8}` },
  { name: "DeFacto", src: `${r9}` },
  { name: "Logo", src: `${r10}` },
];

const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  return (
    <div className="flex overflow-hidden py-6 select-none">
      <motion.div
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex flex-nowrap min-w-full gap-20 items-center px-10"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="shrink-0 w-32 md:w-48 h-12 flex items-center justify-center"
          >
            <img
              src={item.src}
              alt={item.name}
              className="max-w-full max-h-full grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Partners = () => {
  return (
    <section className="bg-white py-24 overflow-hidden max-w-7xl mx-auto">
      <div className="px-6 mb-16">
        <h4 className="text-zinc-400 text-sm tracking-[1px] uppercase mb-4">
            90Pixel’e İnanan Müşterilerimiz.
        </h4>
        <h2 className="text-zinc-900 text-3xl md:text-4xl font-light max-w-4xl leading-tight">
          Birlikte öğrendiğimiz, geliştirdiğimiz ve çözümler ürettiğimiz değerli markalarımız.
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} direction="left" speed={30} />
        
        <MarqueeRow items={row2} direction="right" speed={45} />
        
        <MarqueeRow items={row1} direction="left" speed={35} />
      </div>
    </section>
  );
};

export default Partners;