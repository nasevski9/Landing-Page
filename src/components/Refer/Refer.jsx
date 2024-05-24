import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Refer() {

    return (
        <motion.div
        className="refer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="row">
                <div className="col-lg-12 p-3">
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
                <div className="col-lg-12">
                    <div className="text-center p-3 vertical">
                        <video width="400" height="300" controls>
                            <source src='https://video.wixstatic.com/video/9f51a9_419df69abd6e4fc2b72236b1d991b608/1080p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                        <div className="vertical-space">
                            <div className="vertical-line"></div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <Link to='/opportunity'><button className="btn btn-success fs-3 p-3">Get Paid on Daily Purchases</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}