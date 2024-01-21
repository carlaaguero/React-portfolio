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
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, at.'
  },
  {
    logo: LOGO2,
    job: 'Reporter at Mediaset',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, at.'
  },
  {
    logo: LOGO3,
    job: 'Web Redactor at Atresmedia',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, at.'
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
                <h5 className='client__name'> {job} </h5>
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