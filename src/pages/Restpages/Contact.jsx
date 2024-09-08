import React from 'react';
import "./Contact.css";
import developerImg from "../../images/DEVpic.jpeg";
import Navbar from '../../components/Navbar/Navbar';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='container'>
        <Navbar />
        <div className='section-title'>
          <h2>Contact</h2>
        </div>
        <div className='contact-content grid'>
          <div className='contact-img'>
            <img src={developerImg} alt="Developer" />
          </div>
          <div className='contact-text'>
            <h2 className='contact-title fs-26 ls-1'>Meet the Developer</h2>
            <p className='contact-description'>
              Hi, I'm Arivanandham, the developer behind Novelnest. I am passionate about creating seamless user experiences 
              and bringing ideas to life through code. With a background in full-stack development, I aim to build products 
              that are both functional and aesthetically pleasing.
            </p>
            <p className='contact-description'>
              If you have any questions, feedback, or just want to connect, feel free to reach out! You can contact me through 
              email or follow me on social media for more updates on my work.
            </p>
            <div className='contact-info'>
              <p>Email: arivanandham@gmail.com</p>
              <p>Phone: 6383680984</p>
            </div>
            <ul className='social-contacts'>
              <li className='social-contact'>
                <FaInstagram className='text-blue' size={32} />
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>Novelnest_</a>
              </li>
              <li className='social-contact'>
                <FaWhatsapp className='text-blue' size={32} />
                <a href='https://www.whatsapp.com' target='_blank' rel='noopener noreferrer'>6383680984</a>
              </li>
              <li className='social-contact'>
                <FaTwitter className='text-blue' size={32} />
                <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>tweet@Novelnest_</a>
              </li>
              <li className='social-contact'>
                <FaFacebook className='text-blue' size={32} />
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>_Nestnovel</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
