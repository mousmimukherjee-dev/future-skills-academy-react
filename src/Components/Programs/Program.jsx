import React from 'react'
import styles from "./program.module.css"
import program_1 from "../../assets/program-1.png"
import program_2 from "../../assets/program-2.png"
import program_3 from "../../assets/program-3.png"
import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"
import { useState } from 'react'
import { Title } from '../Title'


export const Programs=()=> {
  return (

    <>

    <div className={styles.ourProgram}>

    <Title title="Our Program" subTitle="What we offer"/>
    <div className={styles.programs}>
      
   
      <div className={styles.program}>
       <img src={program_1} alt="img"></img>
       <div className={styles.caption}>
        <img src={program_icon_1} alt="" />
        <p>Graduation Degree</p>
       </div>
      </div>
      <div className={styles.program}>
        <img src={program_2} alt="img"></img>
        <div className={styles.caption}>
        <img src={program_icon_2} alt="" />
        <p>Master Degree</p>
       </div>
      </div>
      <div className={styles.program}>
        <img src={program_3} alt="img"></img>
        <div className={styles.caption}>
        <img src={program_icon_3} alt="" />
        <p>Post Graduation</p>
       </div>
      </div>
    </div>
    </div>

    </>
  )
}

