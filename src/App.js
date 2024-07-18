import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
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
                        <p>This is the About modal content.</p>
                        <button onClick={toggleAbout} className="close-modal-button">
                            Close 
                        </button>
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
                        <p>This is the Contact modal content.</p>
                        <button onClick={toggleContact} className="close-modal-button">
                            Close 
                        </button>
                    </motion.div>
                </motion.div>  
            )}  
            </AnimatePresence> 
    </div>
  );
}

export default App;
