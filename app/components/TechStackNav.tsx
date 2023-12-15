'use client'
import React, { useEffect, useRef, useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import { EffectFade,Pagination,Navigation } from 'swiper/modules';
import { useSwiper,useSwiperSlide } from 'swiper/react';
import styles from './TechStack.module.css'
import icons from '../data/Icons'
import { Button } from "@/components/ui/button"
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from 'next/link';



function TechStackNav() {
    const [index,setIndex] = useState(0)
    const iconsLength = icons.length -1
    const paginationEl = useRef(null)
    const btnPrev = useRef(null)
    const btnNext = useRef(null)

  function openWindow(): void{
    window.open(`https://en.wikipedia.org/wiki/Figma`);
  }

  return (
    <div className={`${styles['gallery']}`}>
        
      <h1> Tech Stack</h1>
        <Swiper className={`${styles['swiper-container']}`} effect={'coverflow'} grabCursor={true} centeredSlides={true}  slidesPerView={3} 
        
         fadeEffect={
            {
              crossFade: true
            }
          }
          loop= {true}
          spaceBetween={50}
          pagination={{
            el: paginationEl.current,
            clickable:true,
            type: 'bullets'
          }}
          navigation={{
            nextEl: btnNext.current,
            prevEl: btnPrev.current,
          }}
          modules={[EffectFade,Pagination,Navigation]}
          >
          <div className={styles.slides}>

            {icons.map((slide)=> 
            <SwiperSlide key={slide.iconName}>
              {({ isActive }) => (
                <HoverCard>
                  <HoverCardTrigger>
                  <p className={`${styles.icon}`}><i className={`ci ${slide.iconName} ci-4x`}></i></p>
                </HoverCardTrigger>
                { isActive && <HoverCardContent>
                    <p>{slide.name}</p>
                    <a onClick={openWindow}>Learn More</a>
                    {/* <Link href={`https://en.wikipedia.org/wiki/${slide.name}`} target=''>Learn More..</Link> */}
                </HoverCardContent>}
                </HoverCard>
                )}
          </SwiperSlide>)}
        
          </div>
         
          <div className={`${styles[`swiper-controller`]}`}>
           
           <div className={`${styles['btn-container']}`}>
            <Button  ref={btnPrev} className= {`${styles['swiper-btn-prev']}`} ><IoChevronBackSharp/></Button>
            <Button  ref={btnNext}  className= {`${styles['swiper-btn-next']}`} ><IoChevronForward/></Button>
           </div>
            
          
            <div ref= {paginationEl} className={`${styles[`swiper-pagination-custom`]}`}></div>
          </div>
          
        </Swiper>
        
        
        
       
    </div>
  )
}

export default TechStackNav
