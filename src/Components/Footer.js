
import React from "react";

function Footer() {
    const goToLinkedIn = () => {
        window.location = 'https://www.linkedin.com/in/chrissiesparling'
    }

    return (
        <div className="Home container">
            <div className="row">
                <div className="col-12 text-center">
                    <h3 onClick={()=>goToLinkedIn()}>LinkedIn</h3>
                </div>
            </div>
        </div>
    );
}

export default Footer;