import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'
import Achievement from './Achievement'
import { HiAcademicCap } from "react-icons/hi2";
import { RiBug2Line } from "react-icons/ri";


function About() {
  return (
    <div className={`${styles['grid-container']} mb-4`}>
      <h1 className={`${styles.header} underline underline-offset-8`}>ABOUT</h1>
      <div className={`grid grid-cols-[1fr,1fr] `}>
      <Image className= {`${styles['about-img']}`} src="/shibuya.jpg" alt='' height={300} width={300}/>

        <div className='grid grid-cols-[1fr,1fr] grid-rows-2 gap-4'>
          <Achievement icon={<HiAcademicCap/>} p1='B.Sc. Computer Science' p2='Information Systems' header='Education'/>
          <Achievement icon={<RiBug2Line/>} p1='1 year' p2='hello world!' header='Experience'/>
          <p className='col-span-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam excepturi facilis deserunt suscipit in ipsam quisquam, ut laboriosam repudiandae! Aperiam dolore nam, atque quam tempore itaque quidem optio perspiciatis.</p>
      </div>
    </div>
    </div>
  )
}

export default About