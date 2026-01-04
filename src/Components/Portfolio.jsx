import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, EffectFade } from 'swiper/modules';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


const projects = [
    {
      id: "1",
      title: "Centrio LXP",
      desc: "Öğrenme Deneyimi Platformu",
      color: "#8B5CF6",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
    },
    {
      id: "2",
      title: "TipStory",
      desc: "En Hızlı Mikro Öğrenme Aracı",
      color: "#10B981",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
    },
    {
      id: "3",
      title: "Corpeo",
      desc: "Kurumsal Video Portalı",
      color: "#059669",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200"
    },
    {
      id: "4",
      title: "Centrio LXP",
      desc: "Öğrenme Deneyimi Platformu",
      color: "#8B5CF6", 
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
    },
    {
      id: "5",
      title: "TipStory",
      desc: "En Hızlı Mikro Öğrenme Aracı",
      color: "#10B981",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
    },
    {
      id: "6",
      title: "Corpeo",
      desc: "Kurumsal Video Portalı",
      color: "#059669", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200"
    }
];

const Portfolio = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const [activeIndex, setActiveIndex] = useState(1);
  const totalSlides = projects.length;

  return (
    <section className="min-h-screen text-white py-20 px-4 md:px-20 relative overflow-hidden mt-135">

        <div className='max-w-7xl mx-auto '>
      <div className="flex gap-5 items-center mb-12">
        <h2 className="text-2xl font-light tracking-tighter">
          Ürünlerimiz & Özel Çözümlerimiz
        </h2>
        
        <div className="text-xl font-light tracking-widest opacity-60">
          {String(activeIndex).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
      </div>

      <div className="relative  h-150">
        
        <Swiper
          modules={[Controller, EffectFade]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          effect="fade"
          loopedSlides={totalSlides}
          loop={true}
          className="w-full h-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={`bg-${project.id}-${index}`}>
              <div className="w-full h-full relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover brightness-50"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-12 z-20 w-full max-w-md px-4">
          <Swiper
            modules={[Controller, Navigation]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            loop={true}
            loopedSlides={totalSlides}
            navigation={{
              nextEl: '.next-button',
              prevEl: '.prev-button',
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex + 1);
            }}
            className="w-full overflow-hidden shadow-2xl"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div 
                  className="p-10 min-h-87.5 flex flex-col justify-between"
                  style={{ backgroundColor: project.color }}
                >
                  <div>
                    <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
                    <p className="text-xl opacity-90">{project.desc}</p>
                  </div>

                  <button className="flex items-center gap-2 group mt-8 border-b border-white w-fit pb-1">
                    Projeyi Keşfet 
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="z-30 flex items-center gap-3 absolute bottom-0 -right-190">
            <button className="prev-button bg-[#222326] hover:bg-red-700 p-8 backdrop-blur-md transition-colors border border-white/10 cursor-pointer">
               <IoIosArrowBack className='text-3xl'/>
            </button>
            <button className="next-button bg-[#222326] hover:bg-red-700 p-8 transition-colors cursor-pointer">
               <IoIosArrowForward className='text-3xl'/>
            </button>
          </div>
        </div>

      </div>

        </div>

    </section>
  );
};

export default Portfolio;