import React from "react";
import { Carousel } from 'react-bootstrap'; 
import { IoIosPhonePortrait } from "react-icons/io";
import { data, images } from './data.js'
import trust from '../assets/trust.png'
import newsweek from '../assets/newsweek.png' 
import { motion } from "framer-motion";


export default function Home() {
        
    return (
        <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="d-flex justify-content-center align-items-center row">
                <div className="col-lg-12 p-3">
                    <h1 className="text-center text-light">Shop, Earn.<br />Money Returns.</h1>
                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src='https://video.wixstatic.com/video/9f51a9_1ab951a7e69644bf9feed3c1673a2c92/1080p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                    </div>
                    <div className="text-center mb-3">
                        <a href="https://www.myworld.com/mk/joinforfree?redirect_uri=https%3a%2f%2flink.myworld.com%2fdynamic%2fBngfFLKpfv6YR9ud9" target="_blank"><button className="btn btn-success fs-3 p-3">Get it Now</button></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <img src={newsweek} alt="Newsweek Reward" className="newsweek"/>
                    </div>
                </div>
                <div className="col-lg-12 text-center banner">
                    <div className="row">
                        <h2 className="text-center fst-italic fs-1 pt-4">Some recognizable partners</h2>
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
                        <h2 className="text-center fst-italic fs-3 pb-4">and many more!</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 pt-4">
                    <h1 className="text-center text-light mb-3"><IoIosPhonePortrait /> App Guide</h1>
                </div>
               
         
                <div className="col-lg-12 container">
                    <div className="carousel-wrapper">
                    <Carousel variant="dark" slide={false} indicators={false}>
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
                <div className="col-lg-12 text-center">
                    <a href="https://www.myworld.com/mk/joinforfree?redirect_uri=https%3a%2f%2flink.myworld.com%2fdynamic%2fBngfFLKpfv6YR9ud9" target="_blank"><button className="btn btn-success fs-3 p-3">Get it Now</button></a>
                </div>
               
            </div>

            <div className="row">
                <div className="col-lg-12 text-center pt-3">
                    <p className="text-center text-light fs-5">Find the collected Benefits, review your markets and you can invite friends to myWorld for free.</p>
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
    )
}