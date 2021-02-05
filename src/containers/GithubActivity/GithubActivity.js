import React from 'react';
import './Codersrank.css';
import { codersRank } from '../../portfolio';
import CodersRankActivity from '@codersrank/activity';

window.customElements.define('codersrank-activity', CodersRankActivity);

export default function Codersrank() {
  console.log("Codersrank called...");
   if(codersRank.display & codersRank.githubActivity){
    return (
      <div className="codersrank-section" id="codersrank">
          <h1 className="codersrank-heading">Github Activity</h1>
          <div className="codersrank-card-container">
            <codersrank-activity username={codersRank.userName} labels legend tooltip branding="false"></codersrank-activity>
          </div>
      </div>
    );
  }
  return null;
}
