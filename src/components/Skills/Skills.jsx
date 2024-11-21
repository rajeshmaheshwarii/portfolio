import React from "react";
import Image from "next/image";
import "./style.css";
import { skills } from "../../../data/skills";
import Heading from "../Heading/Heading";

const Skills = () => {
  return (
    <div className="section">
      <div className="skill-container">
        <Heading title="My Skills"/>
        <div className="skills-row">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index} data-aos="zoom-out">
              <Image
                src={skill.url}
                width={80}
                height={80}
                alt={`${skill.skill_name} Logo`}
                className="item"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
