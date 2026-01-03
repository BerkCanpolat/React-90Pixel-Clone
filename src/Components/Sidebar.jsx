import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ isOpen, onClose, side }) => {
  const isRight = side === "right";

  const panelVariants = {
    hidden: { height: 0, width: 100 },
    visible: {
      height: ["0vh", "100vh", "100vh"],
      width: [100, 100, 400],
      transition: { duration: 0.8, times: [0, 0.5, 1], ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      width: [400, 100, 100],
      height: ["100vh", "100vh", "0vh"],
      transition: { duration: 0.8, times: [0, 0.5, 1], ease: [0.76, 0, 0.24, 1] }
    }
  };

  const navVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6 
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      transition: { duration: 1 } 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100"
          />

          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`
              fixed top-0 z-105 bg-[#1a1b1e] flex flex-col
              ${isRight ? "right-0 border-l" : "left-0 border-r"} 
              border-white/10 overflow-hidden
            `}
          >
            <div className="p-12 pt-20 text-white flex flex-col h-full w-100">
              <div className={`mb-16 flex ${isRight ? "justify-end" : "justify-start"}`}>
                <button onClick={onClose} className="group flex items-center gap-3 opacity-40 hover:opacity-100 transition-all uppercase text-[10px] tracking-[4px]">
                  {isRight && <span>KAPAT</span>}
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <span className="absolute w-full h-px bg-white rotate-45" />
                    <span className="absolute w-full h-px bg-white -rotate-45" />
                  </div>
                  {!isRight && <span>KAPAT</span>}
                </button>
              </div>
              
              <motion.nav 
                variants={navVariants}
                className={`flex flex-col gap-10 ${isRight ? "items-end text-right" : "items-start text-left"}`}
              >
                {["Ana Sayfa", "Ürünler", "Projeler", "İletişim"].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                  >
                    <motion.a
                      href="#"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="relative flex items-center gap-6 group"
                    >
                      <motion.span
                        variants={{
                          rest: { opacity: 0, x: isRight ? 10 : -10 },
                          hover: { opacity: 0.5, x: 0 }
                        }}
                        className="text-xs font-medium tracking-widest"
                      >
                        0{index + 1}
                      </motion.span>

                      <motion.span 
                         variants={{
                           rest: { x: 0, y: 0 },
                           hover: { 
                             x: isRight ? -15 : 30,
                             y: -10,
                           }
                         }}
                         className="text-5xl font-extralight tracking-tight"
                      >
                        {item}
                      </motion.span>
                    </motion.a>
                  </motion.div>
                ))}
              </motion.nav>

              <div className={`mt-30 pl-10.5 text-gray-400 ${isRight ? "text-right" : "text-left"}`}>
                <p className="my-1.5">Dribble</p>
                <p className="my-1.5">Instagram</p>
                <p className="my-1.5">Linkedin</p>
                <p className="my-1.5">Twitter</p>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className={`mt-auto flex gap-6 pt-10 border-t border-white/5 ${isRight ? "justify-end" : "justify-start"}`}
              >
                <span className="text-[10px] p-5 tracking-widest opacity-30 cursor-pointer hover:opacity-100">EN</span>
                <span className="text-[10px] border border-white p-5 tracking-widest cursor-pointer">TR</span>
              </motion.div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;