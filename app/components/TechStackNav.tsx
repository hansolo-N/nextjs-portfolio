'use client'
import React, { useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';
import styles from './TechStack.module.css'
import icons from '../data/Icons'
import { Button } from "@/components/ui/button"
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

function TechStackNav() {
    const [index,setIndex] = useState(0)
    const iconsLength = icons.length -1

    function handleDecreaseClick():void{
        if(index <= 0) setIndex(iconsLength)
        setIndex((index)=>index-1)
    }

    function handleIncreaseClick():void{
        if(index >= iconsLength) setIndex(0)
        
        setIndex((index)=>index+1)
    }


  return (
    <div className={`${styles['gallery']}`}>
        <div >
        { icons && <div >
        <Swiper className={`${styles['swiper-container']}`} effect={'coverflow'} grabCursor={true} centeredSlides={true}  slidesPerView={3} 
        coverflowEffect={
          {
            rotate:0,
            stretch:0,
            depth:100,
            modifier: 2.5
          }}
          spaceBetween={50}
          pagination={{el:'',clickable:true}}
          navigation={{
            nextEl: `${styles['swiper-btn-next']}`,
            prevEl: `${styles['swiper-btn-prev']}`,
          }}
          modules={[EffectCoverflow,Pagination,Navigation]}
          >
          <div className={styles.slides}>
          <SwiperSlide>
            {({isPrev})=>
          <p className={`${styles.icon}`}><i className={`ci ${icons.at(index-1)?.name} ci-4x ${isPrev? `${styles['prev-icon']}`: ''}`}></i></p>
          }
          </SwiperSlide>
          <SwiperSlide>
          {({isActive})=>
          <p className={`${styles.icon}`}><i className={`ci ${icons.at(index)?.name} ci-4x ${isActive? `${styles['active-icon']}`: ''}`}></i></p>
          }
          </SwiperSlide>
          <SwiperSlide>
            {({isNext})=>
          <p className={`${styles.icon}`}><i className={`ci ${icons.at(index+1)?.name} ci-4x ${isNext? `${styles['next-icon']}`: ''} `}></i></p>
        }
          </SwiperSlide>

          </div>
         
          <div className={`${styles[`swiper-controller`]}`}>
            <Button  className= {`${styles['swiper-btn-prev']}`} ><IoChevronBackSharp/></Button>
            <Button className= {`${styles['swiper-btn-next']}`} ><IoChevronForward/></Button>
          </div>
          <div className={`${styles.pagination}`}>background</div>
        </Swiper>
        </div>
        }
        </div>
        
       
    </div>
  )
}

export default TechStackNav
