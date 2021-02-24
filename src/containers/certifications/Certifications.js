import React, {Component} from 'react';
import './Certifications.css';
import { Fade } from "react-reveal";
import {certifications} from "../../portfolio";
import CertificationCard from '../../components/certificationCard/CertificationCard';

export default function Certifications() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="certs">
			<h1 className="cert-header-title">Certifications</h1>
      <div className="cert-main-div">
        <div className="cert-text-div">
          {certifications.certifications.map(cert => {
						return <CertificationCard certificate={cert} />;
					})}
        </div>
      </div>
    </div>
    </Fade>
  );
}
