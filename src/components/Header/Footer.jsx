import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content text-center'>
          <p className='footer-text'>
            &copy; {new Date().getFullYear()} Novelnest. All rights reserved.
          </p>
          <ul className='footer-links'>
            <div className='socialcontacts'>
              <li className='socialcontacts'><FaInstagram className='text-blue' size={32} /><a href='https://www.instagram.com'>Novelnest_</a></li>
              <li className='socialcontacts'><FaWhatsapp className='text-blue' size={32} /><a href='https://www.whatsapp.com'>6383680984</a></li><br/>
              <li className='socialcontacts'><FaTwitter className='text-blue' size={32} /><a href='https://www.twitter.com'>tweet@Novelnest_</a></li>
              <li className='socialcontacts'><FaFacebook className='text-blue' size={32} /><a href='https://www.facebook.com'>_Nestnovel</a></li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

