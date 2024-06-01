import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import { scanAndGo } from "./data.js";
import scng from '../../assets/scng.png'
import video from '../../assets/mk/videos/scng.mp4'
import { motion } from "framer-motion";
import NavBarMk from '../NavbarMk/NavbarMk.jsx';
import FooterMk from '../FooterMk/FooterMk.jsx';

export default function LocalMk() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
        <NavBarMk />
        <motion.div
        className="local"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="row p-3">
                <div className="col-12">
                    <h1 className="text-center text-light mb-4">Пазарувај Локално</h1>
                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                    <h5 className="text-center text-light">Подолу се сликовито прикажани чекорите.</h5>
                </div>
            </div>   
            <div className="row">
                <div className="col-12 container">
                    <div className="carousel-wrapper">
                         <div className="logo-wrapper">
                            <img src={scng} alt="Scan and Go Logo" />
                            <h2 className=" text-light text-center">Scan and Go</h2>
                        </div>
                        <p className="text-light text-center mb-4">Како да пазаруваш локално со Scan & Go.</p>
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
                    <Link to='/mk/online-shop'><button className="btn btn-success fs-5 p-2 mx-2">Online Пазарување</button></Link>
                    <Link to='/mk/egift-card'><button className="btn btn-success fs-5 p-2 mx-2">Дигитални Картички</button></Link>
                </div>
            </div>
        </motion.div>
        <FooterMk />
        </>
    )
}