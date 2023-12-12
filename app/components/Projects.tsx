import React from 'react'
import ProjectCard from './ProjectCard'
import {
  CardContent,

} from "@/components/ui/card"

function Projects() {
  return (
    <div className='flex gap-4'>
        <ProjectCard cardTitle='project1' imgSrc='shibuya.jpg'/>
        <ProjectCard cardTitle='project2' imgSrc='shibuya.jpg'/>
    </div>
  )
}

export default Projects