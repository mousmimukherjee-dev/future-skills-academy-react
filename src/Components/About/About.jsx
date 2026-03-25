import React from 'react'
import styles from "./about.module.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"
import { VedioPlayer } from '../../Components/VedioPlayer/VedioPlayer'
import { useState } from 'react'


export const About = ({ playState , setPlayState}) => {


  const toggleVedio=()=>{

    setPlayState(!playState)
  }

  return (
    <div className={styles.about}>

      <div className={styles.aboutLeft}>
      <img src={about_img} alt='aboutImg' className={styles.aboutImg}></img>
      <img src={play_icon} alt='playIcon' className={styles.playIcon} onClick={()=>toggleVedio()}></img>
      </div>

      <div className={styles.aboutRight}>
        <h3>About University</h3>
        <h2>Nurturing Tommorow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni atque maxime autem ipsa, nostrum accusamus minus neque explicabo veniam exercitationem dolorem? Doloribus debitis tenetur dolor quos eligendi eum itaque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam minima soluta accusantium sapiente, beatae ipsam voluptatum eligendi fuga doloremque! Est quod molestias tempora nemo dicta corporis fugit, doloremque pariatur?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit adipisci, repellendus incidunt cum corrupti ea modi consectetur laudantium fugiat, mollitia suscipit sit! Recusandae sunt distinctio corporis ratione. Placeat, modi distinctio.</p>
        
      </div>

    </div>
  )
}
