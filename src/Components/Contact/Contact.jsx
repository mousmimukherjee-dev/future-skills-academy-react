import React from 'react'
import styles from "./contact.module.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
import { useState } from 'react'
import { Title } from '../Title'


export const Contact = () => {

   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0fa33426-9ad6-4753-aab7-b4fe50282380");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className={styles.contactPage}>
    <Title title="Contact Us" subTitle="Get in Touch" />
    <div className={styles.contact}>
    
      <div className={styles.contactCol}>
        <h3>Send Us A Message <img src={msg_icon} alt="msg" /></h3>
        <p>Feel free to reach out through conatct form or find our information below. Your feedback question and suggestion are important to us as we strive to provide exceptional service to our University Community </p>
        <ul>
          <li><img src={mail_icon} alt="mail" />mousmichattterjee6@gmail.com</li>
          <li><img src={phone_icon} alt="img" />0761569991</li>
          <li><img src={location_icon} alt="img" />Stockholm</li>
        </ul>
      </div>

      <div className={styles.contactCol}>

        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type='phone' name="phone" placeholder='Your Contact Number' required />
          <label>Write Your message here</label>
          <textarea name="message" row="6" placeholder='Enter your message here' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit  <img src={white_arrow} alt="arrowImg" /></button>
        </form>
        <span>{result}</span>
        
      </div>
    </div>
    </div>
  )
}
