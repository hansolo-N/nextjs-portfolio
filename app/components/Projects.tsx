import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'
import { motion,useMotionValue,useMotionValueEvent, useScroll } from "framer-motion"

// {scaleX: progress <=0.6?1.6 * progress : 1,
function Projects() {



  const [progress,setProgress] = useState(0)
  const { scrollY} = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setProgress((latest/1800))
  })
  
  return (
    <motion.div className={`flex gap-4 ${styles.projectsContainer}`}  style={{translateX: -2300 * progress}}>
        <ProjectCard cardTitle='project1' imgSrc='shibuya.jpg' cardContent='this is an updated version of my portfolio using Next.Js with typescript and some other react libraries'/>
        <ProjectCard cardTitle='project1' imgSrc='shibuya.jpg' cardContent='this is an updated version of my portfolio using Next.Js with typescript and some other react libraries'/>
    </motion.div>
  )
}

export default Projects