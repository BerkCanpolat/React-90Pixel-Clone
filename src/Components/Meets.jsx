

const languages = [
  "Tanışalım.",
  "Let`s Meet.",
  "Lass uns treffen.",
  "Vamos nos encontrar.",
  "Tanışalım.",
  "Let`s Meet.",
  "Lass uns treffen.",
  "Vamos nos encontrar.",
];

const LetMeet = () => {
  return (
    <section className="bg-white overflow-hidden relative cursor-pointer group mt-30 mb-40">

      <div className="flex whitespace-nowrap">
        <div className="flex items-center animate-[marquee_80s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...languages, ...languages].map((text, index) => (
            <h2
              key={index}
              className="text-[120px] md:text-[180px] font-bold px-10 text-zinc-200 transition-all duration-200 group-hover:hover:text-red-600 group-hover:hover:scale-110 select-none"
            >
              {text}
            </h2>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default LetMeet;