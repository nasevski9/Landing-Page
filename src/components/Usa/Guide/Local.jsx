import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import { scanAndGo } from "./data";
import scng from '../../assets/scng.png'
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";


export default function Local() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
        <NavBar />
        <motion.div
        className="local"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="row p-3">
                <div className="col-12">
                    <h1 className="text-center text-light mb-4">Shop Local</h1>
                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src='https://video.wixstatic.com/video/9f51a9_901e78e4aa17460e830eb66630c5cfd1/1080p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                    </div>
                    <h5 className="text-center text-light">Below is an image presentation of the steps.</h5>
                </div>
            </div>   
            <div className="row">
                <div className="col-12 container">
                    <div className="carousel-wrapper">
                         <div className="logo-wrapper">
                            <img src={scng} alt="Scan and Go Logo" />
                            <h2 className=" text-light text-center">Scan and Go</h2>
                        </div>
                        <p className="text-light text-center mb-4">Discover how easy it is to get benefits with Scan & Go.</p>
                        <Carousel variant="dark" indicators={false} slide={false} interval={null}>
                        {scanAndGo.map((item) => {
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
                <div className="d-flex justify-content-center align-items-center col-12">
                    <Link to='/usa/online-shop'><button className="btn btn-success fs-5 p-2 mx-2">Shopping Online</button></Link>
                    <Link to='/usa/egift-card'><button className="btn btn-success fs-5 p-2 mx-2">eGift Card Shop</button></Link>
                </div>
            </div>
        </motion.div>
        <Footer />
        </>
    )
}