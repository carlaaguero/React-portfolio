import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/futureachievement.jpg'
import IMG2 from '../../assets/chic-atelier.jpg'
import IMG3 from '../../assets/abal.jpg'
import IMG4 from '../../assets/diamond-match.jpg'
import IMG5 from '../../assets/carla-web.jpg'
import IMG6 from '../../assets/carla-new.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/carlaaguero/Future-Achievement" className='btn' rel="noopener noreferrer" target='_blank'>Github</a>
          <a href="https://futureachievement.netlify.app/" className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Website</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/carlaaguero/React-Ecommerce-Website" className='btn' rel="noopener noreferrer" target='_blank'>Github</a>
          <a href="https://chicatelier.netlify.app/" className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Website</a>
          </div>
        </article><article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/carlaaguero/ABAL-Website" className='btn' rel="noopener noreferrer" target='_blank'>Github</a>
          <a href="https://abalservicios.netlify.app/" className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Website</a>
          </div>
        </article><article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/carlaaguero/React-memory-game" className='btn' rel="noopener noreferrer" target='_blank'>Github</a>
          <a href="https://diamondmatchgame.netlify.app/" className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Website</a>
          </div>
        </article><article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/carlaaguero/Portafolio-de-Carla" className='btn' rel="noopener noreferrer" target='_blank'>Github</a>
          <a href="https://carlaaguero.netlify.app/" className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Website</a>
          </div>
        </article><article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item tittle</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/carlaaguero/React-portfolio" className='btn' rel="noopener noreferrer" target='_blank'>Github</a>
          <a href="https://carlaaguero.com/" className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Website</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio