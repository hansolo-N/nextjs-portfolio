import React from 'react'
import CallToAction from './CallToAction'
import Image from 'next/image'
import styles from './HeroLayout.module.css'

function HeroLayout() {
  return (
    <div className={`grid grid-cols-2 ${styles.container}`}>
        <div className='grid-auto-cols'>
           <CallToAction/>
        </div>
        <div className='grid-auto-cols'>
          <Image className= {styles.img} src='/test2.jpg' alt='image not found' width={600} height={300}/>
        </div>
    </div>
  )
}

export default HeroLayout