import React from 'react'
import "./footer.css"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { socialMedia } from '../../../data/social';
const Footer = () => {
  return (
    <div className='footer-conatiner' id='contact'>
        <div className="identity" data-aos="fade-up" >
            <h2>Rajesh Maheshwari</h2>
        </div>
        <div className="social" data-aos="fade-up" >
         <p>Made with ❤️ by Rajesh Maheshwari.<br/> Let&apos;s create something amazing together!</p>
         <div className="social-icon" data-aos="fade-up" >
         {socialMedia.map((item, index) => (
            <a key={index} href={item.link} target="_blank">
              <FontAwesomeIcon icon={item.icon} className='icon'/>
            </a>
          ))}
         </div>
        </div>
    </div>
  )
}

export default Footer