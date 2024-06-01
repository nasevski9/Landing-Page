import React, {useState} from "react";
import cb from '../../assets/videos/cb.mp4'
import sp from '../../assets/videos/sp.mp4'
import { motion } from "framer-motion";
import Footer from '../Footer/Footer.jsx'
import NavBar from '../Navbar/Navbar.jsx'

export default function Benefits() {

    return (
        <>
            <NavBar />
                <motion.div
                className="benefits"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                
                    <div className="row p-3">
                        <div className="col-12">
                            <h1 className="text-center text-light mb-4">Rewards</h1>
                            <h5 className="text-center text-light">Learn about the benefits you get when shopping with myworld.</h5>
                            <div className="text-center p-3">
                                <video width="800" height="450" controls>
                                    <source src='https://video.wixstatic.com/video/9f51a9_9311391cdbae45cbaf6f89f5032940ee/1080p/mp4/file.mp4' type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="row video-container">
                        <div className="col-6 col-sm-6 p-3">
                            <h5 className="text-center text-light">Learn about Cashback</h5>
                            <div className="embed-responsive embed-responsive-16by9">
                                <video className="embed-responsive-item" controls>
                                    <source src={cb} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 p-3">
                            <h5 className="text-center text-light">Learn about Shopping Points</h5>
                            <div className="embed-responsive embed-responsive-16by9">
                                <video className="embed-responsive-item" controls>
                                    <source src={sp} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>  
                </motion.div>
            <Footer />
        </>
        
    )
}