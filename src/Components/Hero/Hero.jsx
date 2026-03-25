import React from 'react'
import styles from "./hero.module.css"
import dark_arrow from "../../assets/dark-arrow.png"

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>We ensure better education for better world</h1>
        <p>Our cutting edge curriculum is designed to empower students with the knowledge skills and experince neede to excel in the dynamic field of education</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="dark_arrow"></img></button>
      </div>

    </div>
  )
}
