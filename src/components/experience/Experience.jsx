import React from 'react'
import './experience.css'
import LOGO1 from '../../assets/logo1.jpg'
import LOGO2 from '../../assets/logo2.jpg'
import LOGO3 from '../../assets/logo3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    logo: LOGO1,
    job: 'Web Developer',
    description: 'I worked as a Web Developer for three years, creating web promotions with HTML, CSS, and JavaScript. Additionally, I managed website content using Git and produced social media content.'
  },
  {
    logo: LOGO2,
    job: 'Reporter at Mediaset',
    description: 'I worked as a reporter in the political section for the Spanish television program called "El Programa de Ana Rosa" for three years. My role involved content creation and coverage in the political domain.'
  },
  {
    logo: LOGO3,
    job: 'Web Redactor at Atresmedia',
    description: 'I worked as a content writer for the Spanish TV channel "La Sexta Noticias," creating interesting and informative content for their website. My role involved crafting engaging articles to keep the audience informed.'
  },
]
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Employment History</h5>
      <h2>Work Experience</h2>
      <Swiper className="container testimonials__container" 
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({logo, job, description}, index) => {
            return (
              <SwiperSlide key={index} className='experience'>
                <div className="logo">
                  <img src={logo} />
                </div>
                <h5 className='job__title'> {job} </h5>
                <small className='job__description'> {description} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Experience