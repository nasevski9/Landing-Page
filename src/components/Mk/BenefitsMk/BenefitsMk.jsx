import React, {useState} from "react";
import video from '../../assets/mk/videos/benefits.mp4'
import cb from '../../assets/mk/videos/cb.mp4'
import sp from '../../assets/mk/videos/sp.mp4'

export default function BenefitsMk() {

    return (
        <>
                    <div className="row p-3">
                        <div className="col-12">
                            <h1 className="text-center text-light mb-4">Предности</h1>
                            <h5 className="text-center text-light">Дознајте за предностите кои ги добивате кога купувате со myWorld.</h5>
                            <div className="text-center p-3">
                                <video width="800" height="450" controls>
                                    <source src={video} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="row video-container">
                        <div className="col-6 col-sm-6 p-3">
                            <h5 className="text-center text-light">Дознајте за Cashback</h5>
                            <div className="embed-responsive embed-responsive-16by9">
                                <video className="embed-responsive-item" controls>
                                    <source src={cb} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 p-3">
                            <h5 className="text-center text-light">Дознајте за Shopping Points</h5>
                            <div className="embed-responsive embed-responsive-16by9">
                                <video className="embed-responsive-item" controls>
                                    <source src={sp} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>  
        </>
        
   )
}