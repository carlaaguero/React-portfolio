import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/carla-agüero" rel="noopener noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/carlaaguero" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
        <a href="mailto:carla.aguero.mi@gmail.com" rel="noopener noreferrer" target="_blank"><MdOutlineEmail/></a>



    </div>
  )
}

export default HeaderSocials