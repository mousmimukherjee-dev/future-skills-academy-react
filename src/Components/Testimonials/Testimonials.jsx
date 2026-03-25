
import styles from "./testimonials.module.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
import { useState } from 'react'
import { Title } from '../Title'
const Testimonials = () => {

  const [tX , setTX] = useState(0)

  const slideForward=()=>{

    if(tX > -50){

      setTX(tX - 50)
    }
  }

  const slideBackward=()=>{

    if(tX < 0){

      setTX(tX + 50 )
    }
  }

  return (

    <div className={styles.testimonialPage}>
     <Title title="Testimonials" subTitle="What Student Says" />
     <div className={styles.testimonials}>

      <img src={next_icon} alt="nextImg"  className={styles.nextBtn} onClick={slideForward}/>
      <img src={back_icon} alt="backImg"  className={styles.backBtn} onClick={slideBackward}/>
      <div className={styles.slider}>
        <ul style={{transform: `translateX(${tX}%)` , transition : "0.5s"}}>
          <li>
           <div className={styles.slide}>

        <div className={styles.userInformation}>
          <img src={user_1} alt="img" />
        <div>
            <h3>Kiana</h3>
            <span>FSA,Stockholm</span>
        </div>
        </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos quia ab soluta dolorum rerum labore laudantium, sed, praesentium ex cum magni quaerat quibusdam maiores quis eius unde! Sed, ullam!
          </p>
          </div>
          </li>

           <li>
           <div className={styles.slide}>

        <div className={styles.userInformation}>
          <img src={user_2} alt="img" />
        <div>
            <h3>Lukas</h3>
            <span>FSA,Stockholm</span>
        </div>
        </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos quia ab soluta dolorum rerum labore laudantium, sed, praesentium ex cum magni quaerat quibusdam maiores quis eius unde! Sed, ullam!
          </p>
          </div>
          </li>

           <li>
           <div className={styles.slide}>

        <div className={styles.userInformation}>
          <img src={user_3} alt="img" />
        <div>
            <h3>Ayesha</h3>
            <span>FSA,Stockholm</span>
        </div>
        </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos quia ab soluta dolorum rerum labore laudantium, sed, praesentium ex cum magni quaerat quibusdam maiores quis eius unde! Sed, ullam!
          </p>
          </div>
          </li>

           <li>
           <div className={styles.slide}>

        <div className={styles.userInformation}>
          <img src={user_4} alt="img" />
        <div>
            <h3>Patrik</h3>
            <span>FSA,Stockholm</span>
        </div>
        </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos quia ab soluta dolorum rerum labore laudantium, sed, praesentium ex cum magni quaerat quibusdam maiores quis eius unde! Sed, ullam!
          </p>
          </div>
          </li>
          </ul>
        </div>
        </div>
    </div>
   
   
  )
}

export default Testimonials