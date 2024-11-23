import React from "react";
import Card from "@/components/Card/Card";

import { experience } from "../../../data/experience";
import Heading from "../Heading/Heading";

const Experience = () => {
  return (
    <div className="section" id="experience">
      <div className="container">
        <Heading title="Experience" />
        {experience.map((exp, index) => {
          return <Card data={exp} type="experience" key={index} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
