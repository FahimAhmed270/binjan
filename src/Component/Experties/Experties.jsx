import React from 'react'
import './Experties.scss'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'
import {motion} from 'framer-motion'

const Experties = () => {
  return (
    <section className="experties">
      <a className='anchor' id='experties'></a>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
       className="container flexCenter">

        {/* left side */}
        <div className='leftSide'>
          {
            projectExperience.map((exp, i) => {
              return <motion.div variants = {fadeIn("right", "tween", (i+1)*0.2, 1)} className='exp' key={i}>
                <div style={{ background: exp.bg }} className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className='secondaryText'>{exp.projects} Projects</span>
                </div>
              </motion.div>
            })
          }
        </div>

        {/* right side */}
        <motion.div
          variants={textVariant(0.5)}
         className="rightSide">
          <span className='primaryText'>What do I help? </span>
          {
            WhatDoIHelp.map((para, i) => {
              return (
                <div className="secondaryText" key={i}>
                  {para}
                </div>
              )
            })
          }
          {/* icon design */}
          <div className="total-star flexCenter">
            <div className="star">
              <span className='primaryText'>285+</span>
              <span className='secondaryText'>Project Completed</span>
            </div>
            <div className="star">
              <span className='primaryText'>190+</span>
              <span className='secondaryText'>Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experties
