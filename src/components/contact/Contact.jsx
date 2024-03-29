import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a4lf0q5', 'template_83wki59', form.current, 'o4P7u8u4sJRhc8SgD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
           <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>carla.aguero.mi@gmail.com</h5>
            <a href="mailto:c.agueromiranda@gmail.com" rel="noopener noreferrer" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
           <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>carlaaguero</h5>
            <a href="https://m.me/carlaselena.agueromiranda" rel="noopener noreferrer" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
           <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+966</h5>
            <a href="https://api.whatsapp.com/send?phone=+966535918597" rel="noopener noreferrer" target="_blank">Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
           <input type="text" name='name' placeholder='Your Full Name' required />
           <input type="email" name='email' placeholder='Your Email' required />
           <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact