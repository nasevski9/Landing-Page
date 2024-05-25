import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import { RiShoppingCart2Line } from "react-icons/ri";
import { online } from './data.js'
import { motion } from "framer-motion";

export default function Online() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <motion.div
        className="online"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="row p-3">
                <div className="col-lg-12">
                    <h1 className="text-center text-light mb-4">Shop Online</h1>
                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src='https://video.wixstatic.com/video/9f51a9_217cc32d82b3404c9b9109c0a1d07118/1080p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                    </div>
                    <h5 className="text-center text-light">Below is an image presentation of the steps.</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 container">
                    <div className="carousel-wrapper">
                        <h2 className=" text-light text-center mb-3"><RiShoppingCart2Line /> Online Partner</h2>
                        <p className="text-light text-center mb-4">Find your favorite online Partner in a few simple steps.</p>
                        <Carousel variant="dark" indicators={false} slide={false}>
                            {online.map((item) => {
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
                <div className="d-flex justify-content-center align-items-center col-lg-12">
                    <Link to='/local-shop'><button className="btn btn-success fs-5 p-2 mx-2">Shopping Local</button></Link>
                    <Link to='/egift-card'><button className="btn btn-success fs-5 p-2 mx-2">eGift Card Shop</button></Link>
                </div>
            </div>
        </motion.div>
    )
}