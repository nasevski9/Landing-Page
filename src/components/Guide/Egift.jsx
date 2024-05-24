import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import { egift } from "./data";
import egiftlogo from '../assets/egift-logo.png'
import { motion } from "framer-motion";

export default function Egift() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <motion.div
        className="egift"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="row p-3">
                <div className="col-lg-12">
                    <h1 className="text-center text-light mb-4">Shop with eGift Card</h1>
                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src='https://video.wixstatic.com/video/9f51a9_0e9d6af37bc3473c828547fd425082ed/1080p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                    </div>
                    <h5 className="text-center text-light">Below is an image presentation of the steps.</h5>
                </div>
            </div>   
            
            <div className="row">
                <div className="col-lg-12 container">
                    <div className="carousel-wrapper">
                        <div className="logo-wrapper">
                            <img src={egiftlogo} alt="Egift Card Logo" />
                            <h2 className=" text-light text-center">eGift Card</h2>
                        </div>
                        <p className="text-light text-center mb-4">It's so simple to order digital gift cards in myWorld App.</p>
                        <Carousel variant="dark" style={{ width:"500px", height:"500px"}} slide={false}>
                            {egift.map((item) => {
                                return (
                                    <Carousel.Item key={item.id}>
                                        <img src={item.image} alt="App Guide" className="d-block w-100" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    <Carousel.Caption className="caption">
                                        <p className="text-secondary">{item.step}</p>
                                        <h3>{item.title}</h3>
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
                <div className="d-flex justify-content-center align-items-center col-lg-12">
                    <Link to='/online-shop'><button className="btn btn-success fs-3 p-3 mx-3">Shopping Online</button></Link>
                    <Link to='/local-shop'><button className="btn btn-success fs-3 p-3 mx-3">Shopping Local</button></Link>
                </div>
            </div>
        </motion.div>
    )
}