"use client"
import React from "react";
import "./project.css";
import Image from "next/image";
import { projects } from "../../../data/projects";
import Heading from "../Heading/Heading";
import { useRouter } from "next/navigation";
const Project = () => {
const router = useRouter()
  const handlePreviewProject = (link) =>{
    router.push(link)
  }
  return (
    <div className="section">
      <div className="container">
      <Heading title="Projects"/>
        <div className="project-container">
            {projects.map((project,index)=>{
                return <>
                 <div className="project-item" key={index} data-aos="fade-up">
                    <div className="project-logo">
                        <Image className="logo" src={project.logo} width={1000} height={1000} alt="project" />
                    </div>
                    <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">
                     {project.description}
                    </p>
                    <button type="button" className="project-btn" onClick={()=> handlePreviewProject(project.link)} data-aos="fade-left">Preview</button>
                    </div>
                </div>
                </>
                   
            })}
            
        </div>
      </div>
    </div>
  );
};

export default Project;
