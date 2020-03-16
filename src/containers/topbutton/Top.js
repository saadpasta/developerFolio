import React from "react";
import "./Top.css";


export default function Top() {
    function TopEvent() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    // When the user scrolls down 20px from the top of the document, show the button    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topButton").style.visibility = "visible";
        } else {
            document.getElementById("topButton").style.visibility = "hidden";
        }
    }
    window.onscroll = function() {scrollFunction();};
    window.onload = function() {scrollFunction();}; //To make sure that this button is not visible at starting.    
    // When the user clicks on the button, scroll to the top of the document
    return (
        <button onClick={TopEvent} id="topButton" title="Go to top"><i class="fa fa-hand-o-up" aria-hidden="true"></i></button>
        );
    }
