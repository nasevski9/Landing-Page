import React, {useEffect} from "react";
import { motion } from "framer-motion";



export default function Business() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    
    return (
        <motion.div
        className="business"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="row p-3">
                <div className="col-lg-12 text-center text-light">
                    <h1 className="">We earn on the <br />world's daily purchases</h1>
                    <h5 className="p-3">Check out this video to understand how!</h5>
                    <div className="text-center">
                        <video width="800" height="450" controls>
                            <source src='https://video.wixstatic.com/video/9f51a9_4334dcf9bfb4447593b0b0e692f3a949/1080p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 text-center text-light">
                    <h1 className="mb-3">Sounds interesting?</h1>
                    <h2 className="mb-4">Check out startlyconet.com and learn more!</h2>
                        <div className="lyconet">
                            <a href="https://www.startlyconet.com/" target="_blank"><button className="btn btn-outline-warning fs-3 p-3">Go to startlyconet.com</button></a>
                        </div>
                </div>
            </div>

        </motion.div>
    )
}