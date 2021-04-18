import React from "react";

const time = new Date();
const year = time.getFullYear();

function Footer() {
    return (<footer className="footer"><p>Copyright ⓒ {year}</p></footer>);
}

export default Footer;