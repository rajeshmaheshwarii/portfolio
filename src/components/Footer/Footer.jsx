import React from 'react'
import "./footer.css"
import Image from 'next/image';
import { socialMedia } from '../../../data/social';
const Footer = () => {
  return (
    <div className='footer-conatiner'>
        <div className="identity" data-aos="fade-up" data-aos-duration="500">
            <h2>Rajesh Maheshwari</h2>
        </div>
        <div className="social" data-aos="fade-up" data-aos-duration="1000">
         <p>Made with ❤️ by Rajesh Maheshwari.<br/> Let's create something amazing together!</p>
         <div className="social-icon" data-aos="fade-up" data-aos-duration="1200">
         {socialMedia.map((item, index) => (
            <a key={index} href={item.link} target="_blank">
              <Image src={item.icon} width={1000} height={1000} alt={item.name} className='icon' />
            </a>
          ))}
         </div>
        </div>
    </div>
  )
}

export default Footer