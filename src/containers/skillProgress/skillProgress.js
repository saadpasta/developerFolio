import React from "react";
import "./skillProgress.css";
import {contactInfo} from "../../portfolio";

export default function Contact() {
    return (
        // <div className="main contact-margin-top" id="contact">
        //     <div className="contact-div-main">
        //         <div className="contact-header">
        //             <h1 className="heading contact-title">{contactInfo.title}</h1>
        //             <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

        //             <div className="contact-text-div">
        //                 <a className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
        //                 <br/><br/>
        //                 <a className="contact-detail-email"
        //                    href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
        //                 <br/><br/>
        //                 <SocialMedia/>
        //             </div>
        //         </div>
        //         <div className="contact-image-div">
        //             <img alt="Saad Working" src={require("../../assests/images/contactMail.png")}></img>
        //         </div>
        //     </div>
        // </div>
        <div class="skill-section">
            <div class="skill-container">
                <img alt="Skills" class="skill-img" src={require("src/assests/images/skill.svg")}></img>
            </div>
            <div class="skill-container">
                <div class="skill">
                    <p>Pooping</p>
                    <div class="meter">
                        <span style="width: 25%"></span>
                    </div>
                </div>
                <div class="skill">
                    <p>Pooping</p>
                    <div class="meter">
                        <span style="width: 25%"></span>
                    </div>
                </div>
                <div class="skill">
                    <p>Pooping</p>
                    <div class="meter">
                        <span style="width: 25%"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
