import React from "react";

import earn from '../../assets/videos/earn.mp4';
import connect from '../../assets/videos/connect.mp4';
import provider from '../../assets/videos/provider.mp4';
import { motion } from "framer-motion";
import NavBarMk from '../NavbarMk/NavbarMk.jsx';
import FooterMk from '../FooterMk/FooterMk.jsx'; 

export default function MediaBox() {


    return (
        <>
        <NavBarMk />
        <motion.div
        className="refer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="d-flex justify-content-center align-items-center row">
                <div className="col-lg-12 p-3">
                    <h1 className="text-center text-light">Поврзете, Гледајте и Добивајте</h1>
                    <div className="text-light text-center mt-4">
                        <h5>Паметен начин да заработите за секоја реклама што ја гледате додека гледате телевизија!</h5>
                    </div>
                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src='https://atmedia.digital/wp-content/uploads/2021/11/newMASTER_media_Box.mp4' type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="col-lg-12 text-center">
                    <h5 className="text-center text-light">@media box е мултимедијална ТВ кутија дизајнирана за домашна забава, каде што можете да гледате телевизија, <br /> филмови или ТВ серии од вашите омилени извори на содржина и да добивате исплата.</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-light mt-5">Инсталирајте, гледајте и заработувајте без напор!</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 white-line-container">
                    <div className="white-line"></div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-12 video-container">
                    <div className="video-text p-5">
                        <h3>Лесно за Инсталирање</h3>
                        <p>Поврзете го вашиот уред со @media box само со HDMI кабел.</p>
                    </div>
                    <div className="video-wrapper">
                        <video width="700" height="400" controls>
                            <source src={connect} type="video/mp4"/>
                        </video>    
                    </div> 
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 white-line-container">
                    <div className="white-line"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 video-container">
                    <div className="video-wrapper">
                        <video width="700" height="400" controls>
                            <source src={provider} type="video/mp4"/>
                        </video>    
                    </div>
                    <div className="video-text p-5">
                        <h3>Лесно за Гледање</h3>
                        <p>Изберете го вашиот извор на содржина и уживајте!</p>
                    </div>          
                </div>                        
            </div>

            <div className="row">
                <div className="col-lg-12 white-line-container">
                    <div className="white-line"></div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-12 video-container">
                    <div className="video-text p-5">
                        <h3>Забавувајте се и Бидете Платени!</h3>
                        <p>Имате можност да ги поставите вашите преференции за реклами,<br /> уживајте и заработувајте за гледање на рекламите.</p>
                    </div>
                    <div className="video-wrapper">
                        <video width="700" height="400" controls>
                            <source src={earn} type="video/mp4"/>
                        </video>    
                    </div>
                           
                </div>                        
            </div>

            <div className="row">
                <div className="col-lg-12 white-line-container">
                    <div className="white-line"></div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="text-light my-4">Станете myWorld клиент и добијте го вашиот @media box.</h3>
                </div>
            </div>

            </motion.div>
            <FooterMk />
        </>
    )
}