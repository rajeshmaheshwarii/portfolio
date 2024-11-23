import React from 'react'
import Card from "@/components/Card/Card"

import { educationData } from '../../../data/educationData';
import Heading from '../Heading/Heading';


const Education = () => {
  return (
    <div className='section' id='education'>
      <div className="container">
      <Heading title="Education"/>
        {educationData.map((edu,index)=>{
          return <Card data={edu} key={index}/>
        })}
      </div>
     
    </div>
  )
}

export default Education