import React from "react";
import "./PatentsCard.css";

export default function PatentsCard({ patents }) {
  function openUrlInNewTab(url) {
    if(url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div>
      <div class="patents-container" onClick={() => openUrlInNewTab(patents.url)}>
        <a class="patents-card" href="#patents" >
          <h3 className="patents-title">{patents.title}</h3>
          <p class="small">{patents.description}</p>
          <div class="go-corner" >
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
