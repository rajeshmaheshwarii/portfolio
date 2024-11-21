"use client";

import { useEffect } from "react";
import About from "@/components/About-me/About";
import Skills from "@/components/Skills/Skills";
import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience"
import Project from "@/components/Projects/Project";
import TestimonialSwiper from "@/components/Testimonial/Testimonial";
import Footer from "@/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 50, // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Easing function for animations
      once: false, // Whether animation should happen only once
    });
      // Refresh animations when DOM changes (optional)
      AOS.refresh();
  }, []);

  return (
    <>
      <div className="main_container">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience/>
        <Project/>
        <TestimonialSwiper/>
        <Footer/>
      </div>
    </>
  );
}
