import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'

function About() {
  return (
    <div className={styles['grid-container']}>
      <div className={`grid grid-cols-[1fr,2fr]`}>
      <Image src="/shibuya.jpg" alt='' height={300} width={300}/>
        <div className='grid grid-cols-2 grid-rows-2'>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel a officia provident beatae fugit, esse eius officiis debitis dignissimos libero deleniti accusantium dicta error quasi magni alias aliquid, dolorem inventore?
          </p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero earum quibusdam repudiandae reiciendis iste, alias eius id dolore mollitia aut voluptate in ea cum, dolorum dolor atque quasi eligendi.</p>
      
      <p className='col-span-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam excepturi facilis deserunt suscipit in ipsam quisquam, ut laboriosam repudiandae! Aperiam dolore nam, atque quam tempore itaque quidem optio perspiciatis.</p>
      </div>
  
    </div>
    </div>
  )
}

export default About