import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Web Application Design.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Landing Page Development.</p>
          </li> 
          <li>
            <BiCheck className='service__list-icon' />
            <p>Iterative Design Process.</p>
          </li> 
          <li>
            <BiCheck className='service__list-icon' />
            <p>Visual Design Expertise</p>
          </li> 
          <li>
            <BiCheck className='service__list-icon' />
            <p>Designing graphics with Photoshop, After Effects, Premiere Pro, etc.</p>
          </li>
        </ul>
      </article>
      {/* END OF UI/UX */}

      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Responsive Website Development.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Responsive Website Development.</p>
          </li> 
          <li>
            <BiCheck className='service__list-icon' />
            <p>Mobile App Development.</p>
          </li> 
          <li>
            <BiCheck className='service__list-icon' />
            <p>Continuous Integration and Deployment.</p>
          </li> 
          <li>
            <BiCheck className='service__list-icon' />
            <p>API Development and Integration.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Full-stack development with React, Angular, and other libraries.</p>
          </li>
        </ul>
      </article>
      {/* END OF WEB DEVELOPMENT */}

      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Content Creation for Social Media.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Video Editing.</p>
          </li> 
          <li>
            <BiCheck className='service__list-icon' />
            <p>Infographic and Visual Content Design.</p>
          </li> 
          <li>
            <BiCheck className='service__list-icon' />
            <p>Podcast Content Development.</p>
          </li> 
          <li>
            <BiCheck className='service__list-icon' />
            <p>Web Development for Websites and Marketing Materials.</p>
          </li>
        </ul>
      </article>
      {/* END OF CONTENT CREATION */}
      </div>

    </section>
  )
}

export default Services