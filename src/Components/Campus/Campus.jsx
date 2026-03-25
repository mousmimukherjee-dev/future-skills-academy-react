import React from 'react'
import styles from "./campus.module.css"
import gallery_1 from "../../assets/gallery-1.png"
import gallery_2 from "../../assets/gallery-2.png"
import gallery_3 from "../../assets/gallery-3.png"
import gallery_4 from "../../assets/gallery-4.png"
import white_arrow from "../../assets/white-arrow.png"
import { Title } from '../Title'
import { useState } from 'react'
const Campus = () => {
  return (
    <div className={styles.campusPage}>
    
    <Title title="Gallery" subTitle="Campus Photos" />
    <div className={styles.campus}>
     
      <div className={styles.gallery}>
        <img src={gallery_1} alt='img'></img>
        <img src={gallery_2} alt='img'></img>
        <img src={gallery_3} alt='img'></img>
        <img src={gallery_4} alt='img'></img>
      </div>

      <button className='btn dark-btn'>See More here <img src={white_arrow} alt="" /></button>
    </div>
    </div>
    
  )
}

export default Campus