import React from "react";
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

  const getMediumData = async () => {
    const response = await fetch(RSSConverter);
    const data = await response.json();
    console.log(data.items);
  }

  getMediumData();
  return (
    <section className={style.BlogSection} id="blogSection">
      <div className={style.header}>
        <h2 className={style.title}>Blog</h2>
        <hr className={style.hr} />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={style.card}>
            <h3 className={style.blogCardTitle}>Card 1</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.card}>
            <h3 className={style.blogCardTitle}>Card 1</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.card}>
            <h3 className={style.blogCardTitle}>Card 1</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Blog;
