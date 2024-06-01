import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Guide(){

    return(
        <>
        <NavBar />
        <motion.div
        className="guide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>  
            <div className="row p-3">
                <div className="col-12">
                    <h1 className="text-center text-light mb-4">User Guide</h1>
                    <h5 className="text-center text-light">Explore different ways to use the myworld App to get your rewards.</h5>

                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src='https://video.wixstatic.com/video/9f51a9_af629b53381a43939bafa65b5668b610/1080p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center col-12">
                    <Link to='/usa/online-shop'><button className="btn btn-success fs-5 mx-2 p-2">Shopping Online</button></Link>
                    <Link to='/usa/local-shop'><button className="btn btn-success fs-5 mx-2 p-2">Shopping Local</button></Link>
                    <Link to='/usa/egift-card'><button className="btn btn-success fs-5 mx-2 p-2">Shopping with eGift</button></Link>
                </div>
            </div>
        </motion.div>
        <Footer />
        </>
    )
}