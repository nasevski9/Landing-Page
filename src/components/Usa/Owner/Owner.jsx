import React from "react";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";





export default function Owner() {
    return (
        <>
            <NavBar />
            <motion.div
            className="owner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                <div className="row">
                <div className="col-12 p-3">
                    <h1 className="text-center text-light mb-4">Own a Business?</h1>
                    <h5 className="text-center text-light">Learn how you can grow your business through myWorld.</h5>
                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src='https://video.wixstatic.com/video/9f51a9_afe960d0030e4f4695dc07ca9398f73e/1080p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            
            <div className="row">
                    <div className="col-12 text-center text-light">
                        <h1 className="mb-4">Sounds interesting?</h1>
                        <h3 className="mb-4">Click on the button below <br />You'll be redirected to a contact page <br />{/*In the description, add code=5 to receive a gift!*/}</h3>
                            <div>
                                <a href="https://www.startmyworld.com/contact" target="_blank"><button className="btn btn-success fs-3 p-3">Contact Us</button></a>
                            </div>
                    </div>
            </div>

            </motion.div>
            <Footer />
        </>
    )
}