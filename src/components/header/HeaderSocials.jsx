import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/carla-agüero" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/carlaaguero" target="_blank"><FaGithub/></a>
        <a href="mailto:carla.aguero.mi@gmail.com" target="_blank" target="_blank"><MdOutlineEmail/></a>



    </div>
  )
}

export default HeaderSocials