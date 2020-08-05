import React from "react";
import "./Patents.css";
import PatentsCard from "../../components/patentsCard/PatentsCard";
import { patentsSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Patents() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="patents">
      <div className="patents-header">
        <h1 className="patents-header-text">{patentsSection.title}</h1>
        <p className="subTitle patents-subtitle">{patentsSection.subtitle}</p>
      </div>
      <div className="patents-main-div">
        <div className="patents-text-div">
          {patentsSection.patents.map(patents => {
            return (
              <PatentsCard
                patents={{
                  url: patents.url,
                  image: patents.image,
                  title: patents.title,
                  description: patents.description
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
