import React from 'react'
import Angelist from '../../../assets/social_icons/angelist.svg'
import Github from '../../../assets/social_icons/github.svg'
import Linkedin from '../../../assets/social_icons/linkedin.svg'
import Medium from '../../../assets/social_icons/medium.svg'
import Twitter from '../../../assets/social_icons/twitter.svg'
import Instagram from '../../../assets/social_icons/instagram.svg'
import style from './Home.module.css'
import Globe from '../../../assets/globe.svg'
import Dots from '../../../assets/dots.svg'

function Home() {

  const clickLink = (e) => {
    e.preventDefault();
    window.scrollTo(0, document.getElementById("aboutMeSection").offsetTop);
  }

  return (
    <section id="homeSection" className={style.homeSection}>
      <img src={Globe} alt="" className={style.globeImage}/>
      <div>
        <p>HELLO WORLD.</p>
        <h1>I'm Esteban Munoz</h1>
        <p>| FULL-STACK DEVELOPER |</p>
      </div>
      <button className={style.moreButton} onClick={(e) => {clickLink(e)}}>MORE ABOUT ME</button>

      <div className={style.socialIcons}>
        <a href="https://github.com/estebanmual"><img src={Github} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/estebanmual"><img src={Linkedin} alt="Linkedin" /></a>
        <a href="https://medium.com/@estebanmual"><img src={Medium} alt="Medium" /></a>
        <a href="https://twitter.com/estebanmual"><img src={Twitter} alt="Twitter" /></a>
        <a href="https://angel.co/u/estebanmual"><img src={Angelist} alt="Angellist" /></a>
        <a href="https://www.instagram.com/estebanmual/"><img src={Instagram} alt="Instagram" /></a>
      </div>
      <img src={Dots} alt="" className={style.dotsImage}/>
    </section>
  )
}

export default Home