import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import app from '../assets/app.png'
import download from '../assets/download.png'

export default function Footer() {
    return (
        <footer className="d-flex justify-content-center flex-wrap border-top border-success border-3 fs-3 p-2">
                <div className="col-lg-12">
                    <div className="image-container">
                        <img src={app} alt="myWorld App" className="app-logo"></img>
                        <img src={download} alt="Download from App Store" className="download"/>
                        <a href="https://www.myworld.com/mk/joinforfree?redirect_uri=https%3a%2f%2flink.myworld.com%2fdynamic%2fBngfFLKpfv6YR9ud9" target="_blank"><button className="btn btn-success fs-4 p-2">Get it Now</button></a>
                    </div>
                </div>
                <div className="col-lg-12 col-sm-12 copyright">
                    <p className="text-light fs-5"><FaRegCopyright /> Next Level Marketing 2024</p>
                </div>
        </footer>
    )
}