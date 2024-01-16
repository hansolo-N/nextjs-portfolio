
import React from 'react'
import Header from './Header'
import styles from './CallToAction.module.css'


function CallToAction() {
  return (
    <div className={`pl-6`}>
        <Header/>
        <p className={`${styles.intro}`}>hello there, I am Nasr</p>
        <p className={styles.summary}>Crafting web <span className={styles.highlight}>experiences</span> with passion & code.</p>
    </div>
  )
}

export default CallToAction