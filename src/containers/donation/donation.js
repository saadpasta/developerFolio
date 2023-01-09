import React, {useContext} from "react";
import "./donation.scss";
import {donationInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function Donation() {
    const {isDark} = useContext(StyleContext);
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main donation-margin-top" id="donation">
                <div className="donation-div-main">
                    <div className="donation-header">
                        <h1 className="heading donation-title">{donationInfo.title}</h1>
                        <p
                            className={
                            isDark
                            ? "dark-mode donation-subtitle"
                            : "subTitle donation-subtitle"
                            }
                        >
                        {donationInfo.subtitle}
                        </p>
                        <div className="button-donation-div">
                        <Button
                        text="Support me"
                        href={donationInfo.link}
                        newTab={true}
                        ></Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}