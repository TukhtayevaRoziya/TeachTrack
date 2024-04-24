import React from 'react';
import { Layout, Menu, theme } from 'antd';

import header from '../../assets/header_front.webp'

import style from './Header.module.css'

const { Header } = Layout;

const MyHeader = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
   
      <div className={style.header_block}>
        <div className={style.header_text_wrap}>
            <h1>O'zingiz uchun mos o'quv markazlar</h1>
            <p>Sizga hududingizdagi o'zingiz uchun mos o'quv markazlar topishga yordam beramiz</p>
        </div>
        <div className={style.header_2}>
<img src={header} alt="" style={{backgroundColor:'transparent'}} />
        </div>
      </div>
        {/* <Content
            style={{
            padding: '0 48px',
            }}
        >
            <Breadcrumb
            style={{
                margin: '16px 0',

            }}
            >
            <Breadcrumb.Item>Asosiy</Breadcrumb.Item>
            <Breadcrumb.Item>Biz haqimizda</Breadcrumb.Item>
            <Breadcrumb.Item>Bog'lanish</Breadcrumb.Item>
            </Breadcrumb>
            <div
            style={{
                padding: 24,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
            >
            Content
            </div>
        </Content> */}
     
    </Layout>
  );
};
export default MyHeader;