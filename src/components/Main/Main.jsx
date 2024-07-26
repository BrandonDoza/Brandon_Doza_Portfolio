import { motion } from "framer-motion"

export default function Main() {

function handleNavigation(url) {
    window.location.href = url;
  };

    return (
        <motion.div 
        className="main"
        initial={{x: '-100vw'}}
        animate={{x: '0'}}
        transition={{ type: 'tween', duration: 1 }}
        >
            <div 
            className="photo"
            >
                <img src={'https://i.postimg.cc/k5dmKxmK/myImage.jpg'} className="img"/>
            </div>
            <div
            className="job-title">
                <h2>FRONT END WE DEVELOPER</h2>
                <h2>UI/UX DESIGNER</h2>
                <p className="landing-paragraph">Ensuring the web is accessible and inclusive for everyone is my driving passion. I am dedicated to creating digital experiences that cater to diverse needs and abilities, making the online world a more equitable space.</p>
            <div className="links-to-external">
                <motion.div
            className="nav-button"
             whileHover={{scale: 1.5}}
             whileTap={{scale: 0.8}}
             onClick={() => handleNavigation('https://github.com/BrandonDoza')}
             >
           <box-icon name='github' type='logo' size='md'></box-icon>
            </motion.div>
            <motion.div
            className="nav-button"
             whileHover={{scale: 1.5}}
             whileTap={{scale: 0.8}}
             onClick={() => handleNavigation('https://www.linkedin.com/in/brandon-doza/')}
             >
           <box-icon name='linkedin-square' type='logo' size='md'></box-icon>
           </motion.div>
            </div>
            </div>
        </motion.div>
    )
}