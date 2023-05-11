import React from 'react'
import './Footer.scss'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren } from "../../utils/motion";

const Footer = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="footer">
            <motion.div
            variants={footerVariants}
            className="container">
                <div className="left">
                    <span className='primaryText'>Let's make something <br />
                        amazing together.</span>
                    <span className='primaryText'> Start by <a href="mailto:fahimahmed54270@gmail.com">saying hi</a></span>
                </div>
                <div className="right">
                    <div className="info">
                        <span className='secondaryText'>Information</span>
                        <p>145 New York, FL 5467, USA</p>
                    </div>
                    <ul className='menu'>
                        <li>Services</li>
                        <li>Works</li>
                        <li>Notes</li>
                        <li>Experience</li>
                    </ul>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Footer
