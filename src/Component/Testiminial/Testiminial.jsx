import React from 'react'
import './Testiminial.scss'
import Slider from 'react-slick'
import { comments, sliderSettings } from '../../utils/data'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";


const Testiminial = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="testiminial">
            <a className="anchor" id="people"></a>
            <motion.div 
            variants={footerVariants}
            className="container">
                <div className="heading">
                    <span className='primaryText'>People talk about us</span>
                    <p>  I got a job that was in accordance with the salary and field of work</p>
                    <p>The process of submitting an appilication was quite cosy</p>
                </div>
                <div className="comments">
                    <Slider className='slider' {...sliderSettings}>
                        {comments.map((person, id) => {
                            const { name, post, comment, img } = person
                            return (
                                < div className="person" key={id}>
                                    <img src={img} alt="" />
                                    <p>{comment}</p>
                                    <hr />
                                    <div className="bio">
                                        <span>{name}</span>
                                        <span>{post}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </motion.div >
        </motion.section >
    )
}

export default Testiminial
