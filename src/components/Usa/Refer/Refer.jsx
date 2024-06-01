import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";

export default function Refer() {

    return (
        <>
        <NavBar />
        <motion.div
        className="refer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="row">
                <div className="col-12 p-3">
                    <h1 className="text-center text-light mb-4">Share and Gain</h1>
                    <h5 className="text-center text-light">Learn how you can earn sharing the myworld app.</h5>
                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src='https://video.wixstatic.com/video/9f51a9_675599d56acf40e9b4aadffc641af42c/1080p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="text-center p-3">
                        <div className="embed-responsive embed-responsive-16by9">
                            <video className="embed-responsive-item" width="400" height="300" controls>
                                <source src='https://video.wixstatic.com/video/9f51a9_419df69abd6e4fc2b72236b1d991b608/1080p/mp4/file.mp4' type="video/mp4"/>
                            </video>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <Link to='/usa/opportunity'>
                                <button className="btn btn-success fs-4 p-2">Get Paid on Daily Purchases</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        <Footer />
        </>
    )
}