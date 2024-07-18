import { motion } from "framer-motion";

export default function Header({onAboutClick, onContactClick}) {
    return (
        <motion.div className="header">
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
        </motion.div>
    )
}