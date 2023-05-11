import React, { useState } from 'react'
import './Header.scss'
import { BiPhoneCall } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { headerVariants, getMenuStyles } from '../../utils/motion'

const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={headerVariants}
            viewport={{ once: true, amount: 0.25 }}
            className="wrapper bg-primary"
            >
            <div className="container flexCenter">
                <div className="name">
                    Binjan
                </div>
                <ul className='menu flexCenter'
                   style={getMenuStyles(menu)}
                >
                    <li><a href="#experties">Services</a></li>
                    <li><a href="#work">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#people">Testiminials</a></li>
                    <li className='phone flexCenter'>
                        <p>+001 (313) 345 678</p>
                        <BiPhoneCall size={"40px"} />
                    </li>
                </ul>

                {/* menu bar */}
                <div className="menuIcon"
                 onClick={() => setMenu((prev)=> !prev)}
                >
                    {menu ? <RxCross2 size={30}/> : <BiMenuAltRight size={30}/>}
                    
                </div>
            </div>
        </motion.div>
    )
}

export default Header
