'use client'
import { useState } from 'react'
import HeroLayout from './components/HeroLayout'
import Projects from './components/Projects'
import styles from './components/page.module.css'
import { motion,useMotionValue,useMotionValueEvent, useScroll } from "framer-motion"
import About from './components/About'
import TechStackNav from './components/TechStackNav'

export default function Home() {
  const [progress,setProgress] = useState(0)
  const progressValue = useMotionValue(0);
  const { scrollY ,scrollYProgress} = useScroll()

  const current = scrollYProgress.get()



  useMotionValueEvent(scrollY, "change", (latest) => {
    setProgress((latest/1000))
  })


  return (
    <motion.div className='flex flex-col gap-6'>
    {progress > 0 && <motion.progress value={progress} max={1} className={styles.progressbar}>progress bar</motion.progress>}
    <HeroLayout/>
    <Projects/>
    <About/>
    <TechStackNav/>
    </motion.div>
    )
}
