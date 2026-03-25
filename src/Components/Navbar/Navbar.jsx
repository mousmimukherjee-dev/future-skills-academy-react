import styles from "./navbar.module.css"
import logo from "../../assets/logo.png"
import graduation from "../../assets/graduation.png"
import menu_icon from "../../assets/menu-icon.png"
import { useEffect, useState } from "react"

export const Navbar=({page ,setPage})=>{

  const navItem =["Home","Program","About-Us","Campus","Testimonials"]

  const[ sticky , setSticky ] = useState(false)

  useEffect(()=>{

    window.addEventListener("scroll",()=>{

      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const[menu , setMenu]= useState(false)

  const toggleMenu=()=>{

    console.log("clicked")
    setMenu(!menu)

  }

  const handelPage=(pageName)=>{

    setPage(pageName)
  }

  return(

    <nav className={`${styles.container} ${sticky ? styles.darkNav : ""}`}>
      <div className={styles.logo}>
        <img src={graduation} alt="logo" ></img>
        <h2>Future Skills Academy</h2>
      </div>
      
      
      <ul className={`${styles.list} ${menu ? "" : styles.active}`}>
        {navItem.map((nav , index)=>(

         <li key={index} onClick={()=>handelPage(nav)}>{nav}</li>

        ))}    
        <li><button className={styles.btn} onClick={()=>handelPage("Contact")}>Contact Us</button></li>
      </ul>
      <img src={menu_icon} alt="" className={styles.menu} onClick={toggleMenu} />
    </nav>
  )
}