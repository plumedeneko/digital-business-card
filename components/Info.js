import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img className="profile-pic" src="./images/kunal.jpg" />
            <h1>Kunal Rishi</h1>
            <p>Computer Science Student</p>
            <p id="link"><a href="https://www.google.com" target="_blank">kunalrishi.website</a></p>
            <div id="buttons">
                <button id="email" onClick={email}>
                    <img src="./images/email.png" />
                    Email
                </button>
                <button id="linkedin" onClick={linkedin}>
                    <img src="./images/linkedin.png" />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}

function email() {
    window.open("mailto:kunalrishi.pro@gmail.com", "_self"); 
}

function linkedin() {
    window.open("https://www.linkedin.com/in/kunal-rishi/"); 
}