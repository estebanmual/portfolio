import React from 'react'
import style from './Blog.module.css'

function Blog() {
  return (
    <section className={style.BlogSection} id="blogSection">
        <div className={style.header}>
        <h2 className={style.title}>Blog</h2>
        <hr className={style.hr} />
      </div>
    </section>
  )
}

export default Blog