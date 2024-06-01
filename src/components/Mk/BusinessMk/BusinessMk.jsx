import React, {useEffect} from "react";
import { motion } from "framer-motion";
import NavBarMk from '../NavbarMk/NavbarMk.jsx';
import FooterMk from '../FooterMk/FooterMk.jsx';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function BusinessMk() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    
    return (
        <>
            <NavBarMk />
                <motion.div
            className="business"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                <div className="row p-3">
                    <div className="col-12 text-center text-light">
                        <h1 className="">Заработуваме од секојдневните <br />купувања од целиот свет</h1>
                        <h5 className="p-3">Погледнете го видеово за да разберете како!</h5>
                        <div className="text-center">
                            <video width="800" height="450" controls>
                                <source src='https://video.wixstatic.com/video/feb6bf_6bab0dcc58db4b8d946530f1dea7e52a/480p/mp4/file.mp4' type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="mb-4 text-light">Звучи интересно?</h1>
                        <h2 className="mb-4 text-light">Пишете ни за да ги дознаете следните чекори.</h2>
                            <div className="fb-ig">
                                <a className="mx-3" href="" target="_blank"><FaFacebook /></a>
                                <a className="mx-3" href="" target="_blank"><FaInstagram /></a>
                            </div>
                    </div>
                </div>

                </motion.div>
            <FooterMk />
        </>
           )
}