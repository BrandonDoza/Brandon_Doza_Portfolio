import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  function toggleAbout() {
    setIsAboutOpen(!isAboutOpen);
  }

  function toggleContact() {
    setIsContactOpen(!isContactOpen);
  }

  function toggleResume() {
    setIsResumeOpen(!isResumeOpen);
  }

  return (
    <div className="app">
      <Header onAboutClick={toggleAbout} onContactClick={toggleContact} onResumeClick={toggleResume} />
      <Main />
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
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
              <h2>About</h2>
              <p className="about-paragraph">
                As a Frontend Web Engineer specializing in JavaScript, React,
                HTML, CSS, and TypeScript, I find the challenge of learning new
                languages both exciting and at times overwhelming, but that's
                the beauty in it. Embracing the unknown with a growth mindset is
                key to navigating this ever-evolving landscape and gaining a
                profound understanding of web engineering. My approach isn't, "I
                don't know this," but rather, "I don't know this yet!" The
                countless hours invested—experiencing the highs and lows—have
                shaped me into a proficient frontend engineer. However, this
                journey is far from complete! Each new day brings fresh
                opportunities for growth, and I am eager to continue evolving
                and expanding my skills.
              </p>
              <></>
              <p className="about-paragraph">
                Now, I aspire to leverage my problem-solving skills, leadership
                experience, and creativity to enhance productivity, optimize
                workflows, and cultivate enduring relationships. I welcome daily
                challenges as opportunities for growth and improvement
              </p>
              <motion.button
                onClick={toggleAbout}
                className="close-modal-button"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
              >
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
              <p>p: {`(970)389-2278`}</p>
              <p>
                e: <a href="mailto:brandonjamesdoza@gmail.com">
                  brandonjamesdoza@gmail.com
                </a>
              </p>
              <p>Denver, CO Based</p>
             
              <motion.button
                onClick={toggleContact}
                className="close-modal-button"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100vh" }}
            onClick={toggleResume}
          >
            <motion.div
              className="modal-resume-content"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              onClick={(e) => e.stopPropagation()}
            >
                <h1>Resume</h1>
                <object data="/Brandon Doza Resume 08_2024.pdf" width="100%" height="600px"/>
              <motion.button
                onClick={toggleResume}
                className="close-modal-button"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
              >
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
