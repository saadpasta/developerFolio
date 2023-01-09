import React, {useContext} from "react";
import "./donation.scss";
import {illustration, donationInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import "../../_globalColor";
import donation from "../../assets/lottie/donation";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function Donation() {
    const {isDark} = useContext(StyleContext);
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main donation-margin-top" id="donation">
                <div className="donation-div-main">
                    <div className="contact-header">
                        <h1 className="heading donation-title">{donationInfo.title}</h1>
                        <p
                            className={
                            isDark
                            ? "dark-mode contact-subtitle"
                            : "subTitle contact-subtitle"
                            }
                        >
                        {contactInfo.subtitle}
                        </p>
                        <div className="button-donation-div">
                        <Button
                        text="Support me"
                        href={donationInfo.link}
                        ></Button>
                        </div>
                        <div className="donation-image-div">
                        {illustration.animated ? (
                        <DisplayLottie animationData={donation} />
                        ) : (
                        <img
                        alt="Donation"
                        src={require("../../assets/images/donation.svg")}
                        ></img>)}
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}