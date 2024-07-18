import { motion } from 'framer-motion'

export default function Backdrop({children, onClick}) {
    return (
        <motion.div
        className='backdrop'
        onClick={onClick}>
            {children}
        </motion.div>
    )
}