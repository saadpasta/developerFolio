import React from 'react';
import './Codersrank.css';
import { codersRank } from '../../portfolio';

export default function Codersrank() {
  console.log("Codersrank called...");
   if(codersRank.display & codersRank.githubActivityChart){
    return (
      <div className="codersrank-section" id="codersrank">
          <h1 className="codersrank-heading">Github Activity</h1>
          <div className="codersrank-card-container">
            <codersrank-activity username={codersRank.userName} labels legend tooltip></codersrank-activity>
          </div>
      </div>
    );
  }
  return null;
}
