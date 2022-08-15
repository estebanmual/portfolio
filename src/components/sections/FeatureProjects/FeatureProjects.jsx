import React from 'react'
import style from './FeatureProjects.module.css'
import CryptoCon from '../../../assets/projects/cryptoCon.png'
import Close from '../../../assets/navbar/close.svg'
import Redirect from '../../../assets/redirect.svg'
import Github from '../../../assets/social_icons/github.svg'

function FeatureProjects() {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <section className={style.featureProjectsSection} id="projectSection">
        <h2 className={style.title} >Feature Projects</h2>
        <hr className={style.hr} />
        <div className={style.cards}>
        <div className={style.card}>
            <div className={style.cardInfo}>
              <p className={style.cardTitle}>Crypto-Con</p>
              <img className={style.cardImage} src={CryptoCon} alt="Project Thumbnail" />
              <div className={style.technologies}>
                <p className={style.technology}>JavaScript</p>
              </div>
              <button onClick={() => setIsOpen(!isOpen)} className={style.cardButton}>READ MORE</button>
            </div>
            <div className={isOpen ? style.cardDetail : `${style.cardDetail} ${style.close}`}>
              <button onClick={() => setIsOpen(!isOpen)} className={style.closeDetail}><img src={Close} alt="Close Button" /></button>
              <p className={style.detailTitle}>Crypto-Con</p>
              <div className={style.detailTechnologies}>
                <p className={style.detailTechnology}>JavaScript</p>
              </div>
              <p className={style.detailText}>
                This is a wbesite for a non existing crypto-con. You can see the program with the featured speakers.
              </p>
              <div className={style.buttons}>
                <a href="#"><button className={style.detailLive}>See Live<img src={Redirect} alt="Redirect button"/></button></a>
                <a href="#"><button className={style.detailSource}>See source <img src={Github} alt="Source button"/> </button></a>
              </div>
            </div>
        </div>
        </div>
        <button className={style.seeAllButton}>SEE ALL</button>
    </section>
  )
}

export default FeatureProjects