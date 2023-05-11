import React from 'react'
import './Portfolio.scss'
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

const Portfolio = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="portfolio">
            <a className='anchor' id='portfolio'></a>
            <div className="container">
                <motion.div variants={textVariant(.4)} className="heading">
                    <div>
                        <span className='primaryText'>My Latest Work</span>
                        <p style={{ marginTop: '15px' }}>Perfect solution for digital experience</p>
                    </div>
                    <span className='secondaryText'>Explore More Works</span>
                </motion.div>
                <div className="showcase flexCenter">
                    <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" />
                    <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
                    <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
                </div>
            </div>
        </motion.section>
    )
}

export default Portfolio
