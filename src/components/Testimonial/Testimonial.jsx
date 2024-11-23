"use client";
import React, { useEffect, useState } from "react";
import "./testimonial.css";
import Image from "next/image";
import Heading from "../Heading/Heading";
import { testimonials } from "../../../data/testimonials";
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [testimonials.length]);

  return (
    <div className="section" id="testimonials">
      <div className="container">
        <Heading title="Testimonials"/>

        {/* Testimonial Card */}
        <div className="testimonial-card" data-aos="fade-up">
          <div className="testimonial-content">
            <Image
              src={testimonials[currentIndex].logo}
              alt="author"
              className="author-img"
              width={1000}
              height={1000}
            />
            <div className="testimonial-text">
              <Image
                src="/quote1.png"
                width={1000} // Adjust the size as needed
                height={1000} // Adjust the size as needed
                alt="Start Quote"
                className="quote-icon"
              />
              <span>{testimonials[currentIndex].message}</span>
              <Image
                src="/quote2.png"
                width={30} // Adjust the size as needed
                height={30} // Adjust the size as needed
                alt="End Quote"
                className="quote-icon"
              />
            </div>
            <div className="author-info">
              <p className="author-name">{testimonials[currentIndex].name}</p>
              <p className="author-role">
                {testimonials[currentIndex].designation}
              </p>
            </div>
          </div>

          {/* Dot Indicator */}
          <div className="dot-indicator">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;