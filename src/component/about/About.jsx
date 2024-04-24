import React from 'react'
import first from '../../assets/about/first.png'
import second from '../../assets/about/second.png'
import third from '../../assets/about/third.png'

import style from './About.module.css'

const About = () => {
  return (
    <>
    <h1 className={style.title}>Biz haqimizda</h1>
    <div className={style.body}>
      <div className={style.block}>
        <img src={first} alt="" />
        <h1>1. Tajribali O'qituvchilar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam quidem quam possimus molestias. A ullam, veniam aliquam deleniti in officia dolores nihil ab, obcaecati, molestias reiciendis vitae rem repellendus.</p>
      </div>
      <div className={style.block}>
        <img src={second} alt="" />
        <h1>2. Kurs tanlash imkoniyati</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam quidem quam possimus molestias. A ullam, veniam aliquam deleniti in officia dolores nihil ab, obcaecati, molestias reiciendis vitae rem repellendus.</p>
      </div>
      <div className={style.block}>
        <img src={third} alt="" />
        <h1>3. O'quv markazlar bilan hamkorlik </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam quidem quam possimus molestias. A ullam, veniam aliquam deleniti in officia dolores nihil ab, obcaecati, molestias reiciendis vitae rem repellendus.</p>
      </div>
    </div>
    </>
  )
}

export default About
