import styles from "./vedioplayer.module.css"
import vedio from "../../assets/vedio.mp4"
import { useState } from 'react'

export const VedioPlayer = ( {playState , setPlayState}) => {

  const closePlay=()=>{

    setPlayState(false)
  }

  return (
    <div className={`${styles.vedioPlayer} ${playState ? "": styles.hide}`} onClick={closePlay}>
      

      <video src={vedio} autoPlay muted controls></video>
    </div>
  )
}

