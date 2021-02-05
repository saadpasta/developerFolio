import React from 'react';
import './GithubActivity.css';
import { githubActivity } from '../../portfolio';
import CodersRankActivity from '@codersrank/activity';

window.customElements.define('github-activity', CodersRankActivity);

export default function GithubActivity() {
   if(githubActivity.display){
    return (
      <div className="githubactivity-section" id="githubActivity">
          <h1 className="githubactivity-heading">Github Activity</h1>
          <div className="githubactivity-card-container">
            <github-activity username={githubActivity.userName} labels legend tooltip branding="false"></github-activity>
          </div>
      </div>
    );
  }
  return null;
}
