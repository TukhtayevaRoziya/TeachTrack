import React from 'react';
import { Layout } from 'antd';

import header from '../../assets/header_front.webp'

import style from './Header.module.css'

const MyHeader = () => {
  return (
    <Layout>
      <div className={style.header_block}>
        <div className={style.header_text_wrap}>
          <h1>O'zingiz uchun mos o'quv markazlar</h1>
          <p>Sizga hududingizdagi o'zingiz uchun mos o'quv markazlar topishga yordam beramiz</p>
        </div>
        <div className={style.header_2}>
          <img src={header} alt="" style={{ backgroundColor: 'transparent' }} />
        </div>
      </div>
    </Layout>
  );
};
export default MyHeader;