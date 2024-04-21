import React from "react";
//utilizng second procedure from

const ResumeDownloadButton = ({resumeLink}) => {
  const downloadResume = () => {
    fetch(resumeLink).then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = fileURL;
        link.setAttribute("download", "resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    });
  };

  return <button onClick={downloadResume}>See my resume</button>;
};

export default ResumeDownloadButton;
