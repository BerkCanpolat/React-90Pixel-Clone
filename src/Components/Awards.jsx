import React from 'react';
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.png";
import a7 from "../assets/a7.png";
import a8 from "../assets/a8.png";
import a9 from "../assets/a9.png";
import a10 from "../assets/a10.png";
import a12 from "../assets/a12.png";

const awards = [
  { id: 1, img: `${a1}` },
  { id: 2, img: `${a2}` },
  { id: 3, img: `${a3}` },
  { id: 4, img: `${a4}` },
  { id: 5, img: `${a5}` },
  { id: 6, img: `${a6}` },
  { id: 7, img: `${a7}` },
  { id: 8, img: `${a8}` },
  { id: 9, img: `${a9}` },
  { id: 10, img: `${a10}` },
  { id: 11, img: `${a12}` },
];

const Awards = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-zinc-400 text-lg font-light mb-12">Ödüllerimiz</h2>

        <div className="flex flex-col">
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-3">
            {awards.slice(0, 6).map((award) => (
              <div 
                key={award.id}
                className="aspect-square border border-gray-300 flex items-center justify-center p-8  hover:bg-zinc-50 transition-all duration-300"
              >
                <img src={award.img} alt="Award" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 md:ml-[8.333%] gap-3">
            {awards.slice(6, 11).map((award) => (
              <div 
                key={award.id}
                className="aspect-square border border-gray-300 flex items-center justify-center p-8  hover:bg-zinc-50 transition-all duration-300"
              >
                <img src={award.img} alt="Award" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Awards;