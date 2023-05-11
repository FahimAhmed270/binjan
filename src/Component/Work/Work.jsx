import React from 'react'
import './Work.scss'
import { workExp } from "../../utils/data";
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import { motion } from 'framer-motion'

const Work = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="work">
            <a className='anchor' id='work'></a>
            <div className="container flexCenter">
                {/* heading */}
                <span className='primaryText heading'>My Work Experience</span>
                <div className="experience flexCenter">
                    {
                        workExp.map((exp, id) => {
                            return (
                                <motion.div
                                variants={textVariant2}
                                 className="exp flexCenter" key={id}>
                                    <div className="post">
                                        <h1>{exp.place}</h1>
                                        <p>{exp.tenure}</p>
                                    </div>
                                    <div className="role">
                                        <h1>{exp.role}</h1>
                                        <p>{exp.detail}</p>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                    <motion.div variants={zoomIn(1, 1)} className='progressbar'>
                        <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className='line'></motion.div>
                        <div><div className='circle' style={{ background: "#286F6C" }}></div></div>
                        <div><div className='circle' style={{ background: "#F2704E" }}></div></div>
                        <div><div className='circle' style={{ background: "#EEC048" }}></div></div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work
