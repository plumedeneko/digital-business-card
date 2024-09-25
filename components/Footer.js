import React from "react"

export default function Footer() {
    return (
        <div className="footer">
            <div />
            <div />
            <img onClick={twitter} src="./images/twitter.png" />
            <img onClick={facebook} src="./images/facebook.png" />
            <img onClick={insta} src="./images/instagram.png" />
            <img onClick={git} src="./images/github.png" />
            <div />
            <div />
        </div>
    )
}

function twitter() {
    window.open("https://twitter.com");
}

function facebook() {
    window.open("https://facebook.com");
}

function insta() {
    window.open("https://instagram.com");
}

function git() {
    window.open("https://github.com/plumedeneko");
}