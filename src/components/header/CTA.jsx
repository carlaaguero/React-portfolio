import React from 'react'
import CV from '../../assets/Carla-Aguero-CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download my CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA