import React from 'react'
// import logo from '../../../assets/courses/wester.jpg'
import person from '../../../assets/courses/teacher.png'

import style from './Wester.module.css'
import { Link } from 'react-router-dom'

const Wester = ({ subject, course, logo, time, path }) => {
    return (
        <div className={style.body}>
            <div className={style.header}>
                <img src={logo} alt="" />

                <div>
                    <h1>{course}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quaerat distinctio dolor incidunt tempore ipsum, corporis enim laboriosam nesciunt aspernatur voluptas quo sequi inventore optio veniam explicabo recusandae fuga rem.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptate laboriosam! Cumque excepturi fuga laborum culpa repellat, pariatur exercitationem ipsam dolor magnam, recusandae explicabo provident veniam cupiditate? Dolor, voluptas in.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia odit distinctio dolor quis officia officiis autem dolores pariatur, unde quas deleniti ipsa in laudantium nesciunt? In sit facilis alias?

                    </p>
                </div></div>
            <div className={style.main}>
                <h1 className={style.main_title}>{subject}</h1>
                <div className={style.main_wrap}>
                    <div className={style.main_block}>
                        <div className={style.main_block_img__}>

                            <img src={person} alt="" />
                            <div>

                                <h1><b> O’qituvchi:</b> Muxamadaliyev <br /> Ibroxim</h1>
                                <h1><b>Tel raqami:</b> +998900113861</h1>
                            </div>
                        </div>
                        <div className={style.main_block_text__}>

                            <h1><b>Dars kunlari:</b>Du-Chor-Ju</h1>
                            <h1><b>Dars vaqti:</b>{time}</h1>

                        </div>
                        <div className={style.button}>
                            <Link to={'/' + path + '/registration'}>Kursga yozilish</Link>
                            <a href={'https://www.youtube.com/watch?v=_z3Ir3HCYTw'}>Demo dars</a>
                        </div>
                    </div>
                    <div className={style.main_block}>
                        <div className={style.main_block_img__}>

                            <img src={person} alt="" />
                            <div>

                                <h1><b> O’qituvchi:</b> Muxamadaliyev <br /> Ibroxim</h1>
                                <h1><b>Tel raqami:</b> +998900113861</h1>
                            </div>
                        </div>
                        <div className={style.main_block_text__}>

                            <h1><b>Dars kunlari:</b>Du-Chor-Ju</h1>
                            <h1><b>Dars vaqti:</b>{time}</h1>

                        </div>
                        <div className={style.button}>
                            <Link to={'/' + path + '/registration'}>Kursga yozilish</Link>

                            <a href={'https://www.youtube.com/watch?v=_z3Ir3HCYTw'}>Demo dars</a>
                        </div>
                    </div>
                    <div className={style.main_block}>
                        <div className={style.main_block_img__}>

                            <img src={person} alt="" />
                            <div>

                                <h1><b> O’qituvchi:</b> Muxamadaliyev <br /> Ibroxim</h1>
                                <h1><b>Tel raqami:</b> +998900113861</h1>
                            </div>
                        </div>
                        <div className={style.main_block_text__}>

                            <h1><b>Dars kunlari:</b>Du-Chor-Ju</h1>
                            <h1><b>Dars vaqti:</b>{time}</h1>

                        </div>
                        <div className={style.button}>
                            <Link to={'/' + path + '/registration'}>Kursga yozilish</Link>

                            <a href={'https://www.youtube.com/watch?v=_z3Ir3HCYTw'}>Demo dars</a>
                        </div>
                    </div>
                    <div className={style.main_block}>
                        <div className={style.main_block_img__}>

                            <img src={person} alt="" />
                            <div>

                                <h1><b> O’qituvchi:</b> Muxamadaliyev <br /> Ibroxim</h1>
                                <h1><b>Tel raqami:</b> +998900113861</h1>
                            </div>
                        </div>
                        <div className={style.main_block_text__}>

                            <h1><b>Dars kunlari:</b>Du-Chor-Ju</h1>
                            <h1><b>Dars vaqti:</b>{time}</h1>

                        </div>
                        <div className={style.button}>
                            <Link to={'/' + path + '/registration'}>Kursga yozilish</Link>

                            <a href={'https://www.youtube.com/watch?v=_z3Ir3HCYTw'}>Demo dars</a>
                        </div>
                    </div>
                    <div className={style.main_block}>
                        <div className={style.main_block_img__}>

                            <img src={person} alt="" />
                            <div>

                                <h1><b> O’qituvchi:</b> Muxamadaliyev <br /> Ibroxim</h1>
                                <h1><b>Tel raqami:</b> +998900113861</h1>
                            </div>
                        </div>
                        <div className={style.main_block_text__}>

                            <h1><b>Dars kunlari:</b>Du-Chor-Ju</h1>
                            <h1><b>Dars vaqti:</b>{time}</h1>

                        </div>
                        <div className={style.button}>
                            <Link to={'/registration'}>Kursga yozilish</Link>
                            <a href={'https://www.youtube.com/watch?v=_z3Ir3HCYTw'}>Demo dars</a>
                        </div>
                    </div>
                    <div className={style.main_block}>
                        <div className={style.main_block_img__}>

                            <img src={person} alt="" />
                            <div>

                                <h1><b> O’qituvchi:</b> Muxamadaliyev <br /> Ibroxim</h1>
                                <h1><b>Tel raqami:</b> +998900113861</h1>
                            </div>
                        </div>
                        <div className={style.main_block_text__}>

                            <h1><b>Dars kunlari:</b>Du-Chor-Ju</h1>
                            <h1><b>Dars vaqti:</b>{time}</h1>

                        </div>
                        <div className={style.button}>
                            <Link to={'/' + path + '/registration'}>Kursga yozilish</Link>

                            <a href={'https://www.youtube.com/watch?v=_z3Ir3HCYTw'}>Demo dars</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wester
