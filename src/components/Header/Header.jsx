import { motion } from "framer-motion";

export default function Header({onAboutClick, onContactClick}) {
    return (
        <motion.div className="header"
        initial={{x: '100vw'}}
        animate={{x: '0'}}
        transition={{ type: 'tween', duration: 1 }}
        >
            <div className="page-title">
                <h1 className="title">
                    Brandon J. Doza
                </h1>
            </div>
            <div className="buttons">
            <motion.button
            className="nav-button"
            whileHover={{scale: 1.3}}
            whileTap={{scale: 0.8}}
            onClick={onAboutClick}
            >
              About 
            </motion.button>
            <motion.button
            className="nav-button"
            whileHover={{scale: 1.3}}
            whileTap={{scale: 0.8}}
            onClick={onContactClick}
            >
              Contact 
            </motion.button>
            </div>
        </motion.div>
    )
}