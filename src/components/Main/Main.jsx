import { motion } from "framer-motion"

export default function Main() {
    return (
        <motion.div 
        className="main"
        initial={{x: '-100vw'}}
        animate={{x: '0'}}
        transition={{ type: 'tween', duration: 1 }}
        >
            <motion.div 
            className="photo"
            whileHover={{scale: 1.3}}
            >
                <img src={'https://i.postimg.cc/k5dmKxmK/myImage.jpg'} className="img"/>
            </motion.div>
            <motion.div
            className="job-title"
            whileHover={{scale: 1.3}}
            >
                <h2>UI/UX DEVELOPER</h2>
                <h3>Languages:</h3>
                <p>Javascript, HTML, CSS, React</p>
            </motion.div>
        </motion.div>
    )
}