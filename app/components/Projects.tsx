import React from 'react'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'
import {
  CardContent,

} from "@/components/ui/card"

function Projects() {
  return (
    <div className={`flex gap-4 ${styles.projectsContainer}`}>
        <ProjectCard cardTitle='project1' imgSrc='shibuya.jpg' cardContent='this is an updated version of my portfolio using Next.Js with typescript and some other react libraries'/>
        <ProjectCard cardTitle='project1' imgSrc='shibuya.jpg' cardContent='this is an updated version of my portfolio using Next.Js with typescript and some other react libraries'/>
        <ProjectCard cardTitle='project1' imgSrc='shibuya.jpg' cardContent='this is an updated version of my portfolio using Next.Js with typescript and some other react libraries'/>
        <ProjectCard cardTitle='project1' imgSrc='shibuya.jpg' cardContent='this is an updated version of my portfolio using Next.Js with typescript and some other react libraries'/>
        <ProjectCard cardTitle='project1' imgSrc='shibuya.jpg' cardContent='this is an updated version of my portfolio using Next.Js with typescript and some other react libraries'/>
        <ProjectCard cardTitle='project1' imgSrc='shibuya.jpg' cardContent='this is an updated version of my portfolio using Next.Js with typescript and some other react libraries'/>
        <ProjectCard cardTitle='project1' imgSrc='shibuya.jpg' cardContent='this is an updated version of my portfolio using Next.Js with typescript and some other react libraries'/>

    </div>
  )
}

export default Projects