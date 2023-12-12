
import React from 'react'
import Header from './Header'
import styles from './CallToAction.module.css'


function CallToAction() {
  return (
    <div>
        <Header/>
        <p className={styles.intro}>hello there, I am Nasr</p>
        <p className={styles.summary}>Crafting web experiences with passion & code.</p>
    </div>
  )
}

export default CallToAction