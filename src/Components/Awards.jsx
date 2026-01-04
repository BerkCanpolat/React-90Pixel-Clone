import { motion } from 'framer-motion';

const awards = [
  { id: 1, img: "https://via.placeholder.com/150", title: "Award 1" },
  { id: 2, img: "https://via.placeholder.com/150", title: "Award 2" },
  { id: 3, img: "https://via.placeholder.com/150", title: "Award 3" },
  { id: 4, img: "https://via.placeholder.com/150", title: "Award 4" },
  { id: 5, img: "https://via.placeholder.com/150", title: "Award 5" },
  { id: 6, img: "https://via.placeholder.com/150", title: "Award 6" },
  { id: 7, img: "https://via.placeholder.com/150", title: "Award 7" },
  { id: 8, img: "https://via.placeholder.com/150", title: "Award 8" },
  { id: 9, img: "https://via.placeholder.com/150", title: "Award 9" },
  { id: 10, img: "https://via.placeholder.com/150", title: "Award 10" },
  { id: 11, img: "https://via.placeholder.com/150", title: "Award 11" },
];

const Awards = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-zinc-400 text-lg font-light tracking-tight">
            Ödüllerimiz
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          
          <div className="grid grid-cols-2 md:grid-cols-6 border-b border-r border-zinc-100">
            {awards.slice(0, 6).map((award) => (
              <motion.div 
                key={award.id}
                whileHover={{ backgroundColor: "#fafafa" }}
                className="aspect-square border-l border-t border-zinc-100 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img src={award.img} alt={award.title} className="max-w-full max-h-full object-contain" />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 md:ml-[8.33%]">
             {awards.slice(6, 11).map((award) => (
              <motion.div 
                key={award.id}
                whileHover={{ backgroundColor: "#fafafa" }}
                className="aspect-square border-l border-b border-zinc-100 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img src={award.img} alt={award.title} className="max-w-full max-h-full object-contain" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Awards;