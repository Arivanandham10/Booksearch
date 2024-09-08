import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import Footer from './Footer';
const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
              <SearchForm/>
                <h2 className='header-title text-capitalize'>Read Smarter, Explore Deeper,<br/>
                Love Every Book</h2><br/>
                <p className='header-text fs-18 fw-3'>The Book Search App makes finding your next read easy. 
                  Explore a vast library with personalized recommendations, and discover books you'll love. 
                  Dive into stories that captivate, and make reading a more enjoyable experience.</p>
            </div>
        </header>
        <Footer/>
    </div>
  )
}
export default Header
