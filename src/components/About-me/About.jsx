import React from 'react'
import "./style.css"
import Heading  from '../Heading/Heading'
const About = () => {
  return (
    <div className='section'>
       <div className='about-container' data-aos="fade-up">
            <Heading title="About Me"/>
            <p className='about-text' >
            A skilled front-end developer with expertise in Next.js, React.js, HTML, CSS, JavaScript, and WordPress. With over 1+ years of experience, I have worked on diverse projects, including donation tracking systems, LMS platforms, and responsive websites. <br/><br/>

I specialize in creating intuitive, high-quality user interfaces and integrating dynamic features. As a freelancer, I am committed to delivering 100% quality work and client satisfaction, always aiming for professional and visually appealing solutions.<br/><br/>

In my free time, I enjoy watching movies and web series and listening to music, which helps me stay relaxed and inspired.
            </p>
       </div>
    </div>
  )
}

export default About