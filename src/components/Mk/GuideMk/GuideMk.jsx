import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import NavBarMk from '../NavbarMk/NavbarMk.jsx';
import FooterMk from '../FooterMk/FooterMk.jsx';
import BenefitsMk from "../BenefitsMk/BenefitsMk.jsx";
import video from '../../assets/mk/videos/3ways.mp4'

export default function GuideMk(){

    return(
        <>
        <NavBarMk />
        <motion.div
        className="guide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>  
             <div className="row p-3">
                <div className="col-12">
                    <h1 className="text-center text-light mb-4">Корисничко Упатство</h1>
                    <h5 className="text-center text-light">Откриј повеќе начини како да ја користиш апликацијата за да ги добиеш бенефитите.</h5>

                    <div className="text-center p-3">
                        <video width="800" height="450" controls>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center col-12">
                    <Link to='/mk/online-shop'><button className="btn btn-success fs-5 mx-2 p-2">Online</button></Link>
                    <Link to='/mk/local-shop'><button className="btn btn-success fs-5 mx-2 p-2">Scan&Go</button></Link>
                    <Link to='/mk/egift-card'><button className="btn btn-success fs-5 mx-2 p-2">eVoucher</button></Link>
                </div>
            </div>
            <BenefitsMk />
        </motion.div>
        <FooterMk />
        </>
    )
}