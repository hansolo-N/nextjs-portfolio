import React, { useState } from 'react'
import styles from './TechStack.module.css'
import icons from '../data/Icons'

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
    <div className={`${styles['stack-container']}`}>
        <button className={styles.btn} onClick={handleDecreaseClick}>-</button>
        <div className={styles.icons}>
        <p><i className={`ci ${icons.at(index-1)?.name} ci-3x`}></i></p>
        <p><i className={`ci ${icons.at(index)?.name} ci-3x`}></i></p>
        <p><i className={`ci ${icons.at(index+1)?.name} ci-3x`}></i></p>
        </div>
        <button className={styles.btn} onClick={handleIncreaseClick}>+</button>
    </div>
  )
}

export default TechStackNav

//0