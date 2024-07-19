import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  function toggleAbout() {
    setIsAboutOpen(!isAboutOpen)
    console.log(isAboutOpen, 'About')
  }

  function toggleContact() {
    setIsContactOpen(!isContactOpen)
    console.log(isContactOpen, 'Contact')
  }

  return (
    <div className="app">
      <Header 
      onAboutClick={toggleAbout}
      onContactClick={toggleContact}
      /> 
      <Main />
      <AnimatePresence>
      {isAboutOpen && (
                <motion.div
                    className="modal-backdrop"
                    initial={{ opacity: 0,  y: "-100vh" }}
                    animate={{ opacity: 1,  y: 0 }}
                    exit={{ opacity: 0, y: "100vh" }}
                    onClick={toggleAbout}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100vh" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>About Me</h2>
                        <p>Born and raised in the midwest, I now call Colorado home. Before venturing into the world of software development, I worked in the mortgage industry as a loan officer.</p>
                        <motion.button 
                        onClick={toggleAbout} 
                        className="close-modal-button"
                        whileHover={{scale: 1.3}}
                        whileTap={{scale: 0.8}}>
                            Close 
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
            <AnimatePresence>
            {isContactOpen && (
                <motion.div
                    className="modal-backdrop"
                    initial={{ opacity: 0, y: "-100vh" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100vh" }}
                    onClick={toggleContact}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100vh" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>Contact Me</h2>
                        <p>Email: <a href="mailto:brandonjamesdoza@gmail.com">brandonjamesdoza@gmail.com</a></p>
                        <p>GitHub: <a href="https://github.com/BrandonDoza" target="_blank" rel="noopener noreferrer">https://github.com/BrandonDoza</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/brandon-doza/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/brandon-doza/</a></p>
                        <motion.button 
                        onClick={toggleContact} 
                        className="close-modal-button"
                        whileHover={{scale: 1.3}}
                        whileTap={{scale: 0.8}}>
                            Close 
                        </motion.button>
                    </motion.div>
                </motion.div>  
            )}  
            </AnimatePresence> 
    </div>
  );
}

export default App;
