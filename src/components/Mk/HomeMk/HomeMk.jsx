import React, {useEffect } from "react";
import { Carousel } from 'react-bootstrap'; 
import { IoIosPhonePortrait } from "react-icons/io";
import { FaGasPump } from "react-icons/fa";
import { data, images } from './data.js'
import trust from '../../assets/trust.png'
import newsweek from '../../assets/newsweek.png' 
import gorivo from '../../assets/mk/gorivo.jpg'

import { motion } from "framer-motion";
import NavBarMk from '../NavbarMk/NavbarMk.jsx';
import FooterMk from '../FooterMk/FooterMk.jsx';

export default function Home(Mk) {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
        <NavBarMk />
            <motion.div
            className="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                <div className="d-flex justify-content-center align-items-center row">
                    <div className="col-lg-12 p-3">
                        <h1 className="text-center text-light">Купувајте, Заработете.</h1>
                        <div className="text-center p-3">
                            <video width="800" height="450" controls>
                                <source src='https://video.wixstatic.com/video/feb6bf_acd311c49a914deaa5a5483013192785/480p/mp4/file.mp4' type="video/mp4"/>
                            </video>
                        </div>
                        <div className="text-center mb-3">
                            <a href="https://www.myworld.com/mk/joinforfree?redirect_uri=https%3a%2f%2flink.myworld.com%2fdynamic%2fBngfFLKpfv6YR9ud9" target="_blank"><button className="btn btn-success fs-4 p-2">Преземете сега</button></a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <img src={newsweek} alt="Newsweek Reward" className="newsweek"/>
                        </div>
                    </div>
                    <div className="col-lg-12 text-center banner">
                        <div className="row">
                            <h2 className="text-center fst-italic fs-1 pt-4">Неколку препознатливи партнери</h2>
                        </div>
                        {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Image ${index}`}
                                    style={{
                                        width: "150px",
                                        height: "auto", 
                                        padding: "10px",
                                        background: "none"
                                    }}
                                />
                                ))}
                        <div className="row">
                            <h2 className="text-center fst-italic fs-3 pb-4">и многу други!</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 pt-4">
                        <h1 className="text-center text-light"><FaGasPump /> Заштедете на Гориво</h1>
                    </div>
                    <div className="col-12 mak-img">
                        <img src={gorivo} alt="Gorivo" />
                    </div>

                    <div className="col-lg-12 text-center pt-4">
                        <a href="https://www.myworld.com/mk/joinforfree?redirect_uri=https%3a%2f%2flink.myworld.com%2fdynamic%2fBngfFLKpfv6YR9ud9" target="_blank"><button className="btn btn-success fs-4 p-2">Преземете сега</button></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 pt-4">
                        <h1 className="text-center text-light mb-3"><IoIosPhonePortrait /> Преглед на Апликацијата</h1>
                    </div>
                
            
                    <div className="col-lg-12 container">
                        <div className="carousel-wrapper">
                        <Carousel variant="dark" slide={false} indicators={false} interval={null}>
                            {data.map((item) => {
                                    return (
                                        <Carousel.Item key={item.id}>
                                            <img src={item.image} alt="App Guide" className="d-block w-100" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        <Carousel.Caption className="caption">
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </Carousel.Caption>
                                        </Carousel.Item>
                                );
                            })}
                        </Carousel>
                        </div>
                    </div>
                    
                
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center pt-3">
                        <p className="text-center text-light fs-5">Разгледајте ја апликацијата, партнерите и можете да ги поканете и вашите пријатели бесплатно.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center pt-3">
                            <a href="https://www.trustpilot.com/review/myworld.com" target="_blanm">
                                <img src={trust} alt="Trustpilot review" className="trust" />
                            </a>
                    </div>
                </div>
            </motion.div>
        <FooterMk />
        </>
    )
}