import React from 'react'
import Angelist from '../../../assets/social_icons/angelist.svg'
import Github from '../../../assets/social_icons/github.svg'
import Linkedin from '../../../assets/social_icons/linkedin.svg'
import Medium from '../../../assets/social_icons/medium.svg'
import Twitter from '../../../assets/social_icons/twitter.svg'
import Instagram from '../../../assets/social_icons/instagram.svg'
import style from './Home.module.css'

function Home() {
  return (
    <div className={style.home}>
      <div>
        <p>HELLO WORLD.</p>
        <h1>I'm Esteban Munoz</h1>
        <p>| FULL-STACK DEVELOPER |</p>
      </div>
      <button>MORE ABOUT ME</button>

      <div>
        <a href="#"><img src={Github} alt="" /></a>
        <a href="#"><img src={Linkedin} alt="" /></a>
        <a href="#"><img src={Medium} alt="" /></a>
        <a href="#"><img src={Twitter} alt="" /></a>
        <a href="#"><img src={Angelist} alt="" /></a>
        <a href="#"><img src={Instagram} alt="" /></a>
      </div>
    </div>
  )
}

export default Home