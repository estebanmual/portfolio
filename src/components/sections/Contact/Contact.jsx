import React from 'react'
import Arrow from '../../../assets/right-arrow.svg'
import style from './Contact.module.css'

function Contact() {
  return (
    <section className={style.ContactSection} id="contactSection">
        <h1>Let's <img src={Arrow} alt="Right arrow" /> <br/> Connect.</h1>
        <form>
            <div className={style.group}>
                <input required type="text" className={style.input} />
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.label}>Your name:</label>
            </div>
            <div className={style.group}>
                <input required type="text" className={style.input} />
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.label}>Your email address:</label>
            </div>
            <div className={style.group}>
                <input required type="text" className={style.input} />
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.label}>Your message:</label>
            </div>
            <button className={style.submitButton}>Send <img src={Arrow} alt="Right Arrow"/></button>
        </form>
    </section>
  )
}

export default Contact