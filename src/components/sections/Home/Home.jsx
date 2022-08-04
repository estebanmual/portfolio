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
  return (
    <section className={style.homeSection}>
      <img src={Globe} alt="" className={style.globeImage}/>
      <div>
        <p>HELLO WORLD.</p>
        <h1>I'm Esteban Munoz</h1>
        <p>| FULL-STACK DEVELOPER |</p>
      </div>
      <button className={style.moreButton}>MORE ABOUT ME</button>

      <div className={style.socialIcons}>
        <a href="#"><img src={Github} alt="Github" /></a>
        <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
        <a href="#"><img src={Medium} alt="Medium" /></a>
        <a href="#"><img src={Twitter} alt="Twitter" /></a>
        <a href="#"><img src={Angelist} alt="Angellist" /></a>
        <a href="#"><img src={Instagram} alt="Instagram" /></a>
      </div>
      <img src={Dots} alt="" className={style.dotsImage}/>
    </section>
  )
}

export default Home