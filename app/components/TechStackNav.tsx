'use client'
import React, {useRef} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import { Autoplay,EffectCoverflow,Pagination,Navigation } from 'swiper/modules';
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



function TechStackNav() {
    const paginationEl = useRef(null)
    const btnPrev = useRef(null)
    const btnNext = useRef(null)

  function openWindow(name:string): any{
     return window.open(`https://en.wikipedia.org/wiki/${name}`);
  }


  return (
    <div className={`${styles['gallery']}`}>
        
      <h1 className={styles.header}> Tech Stack</h1>
        <Swiper className={`${styles['swiper-container']}`} effect={'coverflow'} grabCursor={true} centeredSlides={true}  slidesPerView={3} 
        
         coverflowEffect={{
          depth:100,
          modifier: 2.5,
          rotate:50,
          slideShadows: false
         }}
         loop= {true}
          autoplay={{
            delay:3000,
            disableOnInteraction: false
          }}
          
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
          modules={[EffectCoverflow,Pagination,Navigation,Autoplay]}
          >
           
          <div className={styles.slides}>
          
            {icons.map((slide)=>
            
            <SwiperSlide key={slide.iconName}>
              
              {({ isActive }) => (
                
                <HoverCard>
                  
                  <HoverCardTrigger>
                  
                    <div className={`${styles.icon}`}>
                    <i className={`ci ${slide.iconName} ci-5x`}></i>
                    </div>
                    
                </HoverCardTrigger>
                { isActive && <HoverCardContent>
                    <p>{slide.name}</p>
                    
                    {/* <Link href={`https://en.wikipedia.org/wiki/${slide.name}`} target=''>Learn More..</Link> */}
                </HoverCardContent>}
                </HoverCard>
                )}
          </SwiperSlide>
          )}
        
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
