'use client'
import { useState } from 'react'
import HeroLayout from './components/HeroLayout'
import Projects from './components/Projects'
import styles from './components/page.module.css'
import { motion,useMotionValue,useMotionValueEvent, useScroll } from "framer-motion"
import About from './components/About'
import TechStackNav from './components/TechStackNav'
import Contact from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  const [progress,setProgress] = useState(0)
  const progressValue = useMotionValue(0);
  const { scrollY ,scrollYProgress} = useScroll()


  useMotionValueEvent(scrollY, "change", (latest) => {
    setProgress((latest/1800))
  })


  return (
    <motion.div className='flex flex-col gap-6'>
    {progress > 0 && <motion.progress value={progress} max={1} className={styles.progressbar}>progress bar</motion.progress>}
    <HeroLayout/>
    <Projects/>
    <About/>
    <TechStackNav/>
    <Contact/>
    <Footer/>
    </motion.div>
    )
}
