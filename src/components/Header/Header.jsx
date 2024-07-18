import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <motion.div className="header">
            <motion.button
            className="nav-button"
            whileHover={{scale: 1.5}}
            whileTap={{scale: 0.8}}
            >
              About 
            </motion.button>
            <motion.button
            className="nav-button"
            whileHover={{scale: 1.5}}
            whileTap={{scale: 0.8}}
            >
              Contact 
            </motion.button>
        </motion.div>
    )
}