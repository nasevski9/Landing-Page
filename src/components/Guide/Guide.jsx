import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Guide(){

    return(
        <motion.div
        className="guide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>  
             <div className="row p-3">
                <div className="col-lg-12">
                    <h1 className="text-center text-light mb-4">User Guide</h1>
                    <h5 className="text-center text-light">Explore different ways to use the myworld App to get your rewards.</h5>

                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src='https://video.wixstatic.com/video/9f51a9_af629b53381a43939bafa65b5668b610/1080p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center col-lg-12">
                    <Link to='/online-shop'><button className="btn btn-success fs-3 p-3 mx-3">Shopping Online</button></Link>
                    <Link to='/local-shop'><button className="btn btn-success fs-3 p-3 mx-3">Shopping Local</button></Link>
                    <Link to='/egift-card'><button className="btn btn-success fs-3 p-3 mx-3">eGift Card Shop</button></Link>
                </div>
            </div>
        </motion.div>
    )
}