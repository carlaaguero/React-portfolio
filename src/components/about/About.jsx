import React from 'react'
import './about.css'
import ME from '../../assets/me-about-2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>Hey there! I'm a Frontend Developer, and my job is making websites not only look good but feel awesome to use. I sprinkle a bit of HTML, CSS, and JavaScript magic to bring designs to life and create a smooth, user-friendly experience. I excel in creating dynamic and responsive interfaces, with React as my favored tool in the toolkit. I love finding that sweet spot where functionality meets style. With a soft spot for the latest trends, I keep my skills sharp and stay in the loop with what's happening in the web development world. I'm all about teamwork. The thrill of exchanging ideas and collaborating to bring concepts to life is where I shine. Together, let's elevate the online experience, one frontend project at a time!</p>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About