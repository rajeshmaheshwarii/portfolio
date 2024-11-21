"use client";
import Link from "next/link";
import Image from "next/image";
import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-image">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          className="profile"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className="heading">
        <h2>Hey, I'm Rajesh</h2>
        <p>Frontend Developer</p>
      </div>
      <div className="description">
        <p>
          Creative Frontend Developer building responsive, user-friendly
          interfaces with modern web technologies.
        </p>
      </div>
      <div className="action-btn" data-aos="fade-up">
        <Link
          href="/Resume.pdf"
          passHref
          legacyBehavior
        >
          <a
            download={true}
            style={{ textAlign: "center" }}
            className="link-btn"
          >
            <button type="button" className="download-btn button">
              Download My CV
            </button>
          </a>
        </Link>
        <Link href="mailto:rajeshbhadru15@gmail.com" passHref legacyBehavior>
          <a style={{ textAlign: "center" }}>
            <button type="button" className="hire-btn button">
              Hire Me
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};
