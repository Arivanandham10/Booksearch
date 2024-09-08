import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Navbar from '../../components/Navbar/Navbar';
const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <Navbar/>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Novelnest</h2>
            <p className='about-description'>
              Novelnest is your ultimate online destination for discovering and exploring a vast collection of books. 
              Our platform provides a seamless search experience to find the perfect read, whether you're looking 
              for the latest bestsellers, classic literature, or hidden gems. We strive to offer personalized recommendations 
              that match your interests and reading habits, making your book search more enjoyable and efficient. 
              Join our community of book lovers and start your literary journey with BookHub today!
            </p>
            <p className='about-description'>
              Our mission is to foster a love of reading by making book discovery accessible and enjoyable. With a user-friendly 
              interface and a wealth of resources at your fingertips, BookHub is here to help you find your next great read 
              and cultivate a lifelong passion for books.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About