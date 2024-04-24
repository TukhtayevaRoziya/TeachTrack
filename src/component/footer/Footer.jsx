import React from "react";
import style from "./Footer.module.css";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined} from '@ant-design/icons';


const Footer = () => {
  return (
    <footer>
      <div className={style.footer_content}>
        <h3>Educations </h3>
        <p>
        Copyright 2023 The All Rights Reserved. Powered by _________
            
        </p>
        <ul className={style.socials}>
          <li>
            <a href="/">
              <FacebookOutlined size={30} color="#DB4437" />
            </a>
          </li>
       
          <li>
            <a href="/">
              <InstagramOutlined size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="/">

              <LinkedinOutlined size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>
    
    </footer>
  );
};

export default Footer;
