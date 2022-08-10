import React, { useState } from "react";
import style from "./Blog.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Pagination } from "swiper";

function Blog() {
  const username = 'estebanmual';
  const RSSURL = `https://medium.com/feed/@${username}`;
  const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSURL}`;

  const [blogs, setBlogs] = useState([]);

  const getMediumData = async () => {
    const response = await fetch(RSSConverter);
    const data = await response.json();
    setBlogs(data.items);
  }

  getMediumData();
  return (
    <section className={style.blogSection} id="blogSection">
      <div className={style.header}>
        <h2 className={style.title}>Blog</h2>
        <hr className={style.hr} />
      </div>
      <p>Here you can find my most recent articles posted in <strong>Medium</strong>.  <br />  Feel free to check them out. </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide>
          <div className={style.card}>
            <img src={blog.thumbnail} className={style.cardImage} alt="Blog thumbnail" />
            <h3 className={style.blogCardTitle}>{blog.title}</h3>
            <a href={blog.link}><button className={style.moreButton}>READ MORE</button></a>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Blog;
