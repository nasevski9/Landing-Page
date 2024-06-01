import React from "react";
import { motion } from "framer-motion";
import NavBarMk from '../NavbarMk/NavbarMk.jsx';
import FooterMk from '../FooterMk/FooterMk.jsx'; 
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export default function OwnerMk() {
    return (
        <>
           <NavBarMk />
            <motion.div
            className="owner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="row">
                <div className="col-12 p-3">
                    <h1 className="text-center text-light mb-4">Поседувате Бизнис?</h1>
                    <h5 className="text-center text-light">Погледнете како можете да го зајакнете и проширете вашиот бизнис со помош на myWorld.</h5>
                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src='https://video.wixstatic.com/video/feb6bf_750d9adf4e1e4431aa374d5e23f9df0e/480p/mp4/file.mp4' type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            
            <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="mb-4 text-light">Звучи интересно?</h1>
                        <h2 className="mb-4 text-light">Пишете ни за да ги дознаете следните чекори.</h2>
                            <div className="fb-ig">
                                <a className="mx-3" href="https://www.facebook.com/nextlevelmarketing55" target="_blank"><FaFacebook /></a>
                                <a className="mx-3" href="https://www.instagram.com/nextlevel_marketer/" target="_blank"><FaInstagram /></a>
                            </div>
                    </div>
            </div>

            </motion.div>
            <FooterMk />
        </>
    )
}