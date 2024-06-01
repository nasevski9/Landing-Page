import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";
import NavBarMk from '../NavbarMk/NavbarMk.jsx';
import FooterMk from '../FooterMk/FooterMk.jsx'; 
import video from '../../assets/mk/videos/refer.mp4'
import refer1 from '../../assets/mk/refer/refer1.png';
import refer2 from '../../assets/mk/refer/refer2.png';
import refer3 from '../../assets/mk/refer/refer3.png';

const data = [ refer1, refer2, refer3 ];

export default function ReferMk() {

    return (
        <>
        <NavBarMk />
        <motion.div
        className="refer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="row">
                <div className="col-lg-12 p-3">
                    <h1 className="text-center text-light mb-4">Споделете и Добијте</h1>
                    <h5 className="text-center text-light">Погледнете како можете да добивате со споделување на myWorld апликацијата.</h5>
                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="text-center">
                    <h3 className="text-light">Погледнете низ слики како да ја препорачате апликацијата и да добиете поени</h3>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="carousel-wrapper">
                        <Carousel variant="light" slide={false} indicators={false} interval={null}>
                            {data.map((item, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <img src={item} alt="App Guide" className="d-block w-100" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        </Carousel.Item>
                                );
                            })}
                        </Carousel>
                        </div>
                    </div>
                    
                        <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                            <Link to='/mk/opportunity'>
                                <button className="btn btn-success fs-4 p-2">Заработете од Дневни Купувања</button>
                            </Link>
                        </div>
                </div>
            </div>
        </motion.div>
        <FooterMk />
        </>
    )
}