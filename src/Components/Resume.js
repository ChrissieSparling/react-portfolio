import React from "react";

function Resume() {
    return (
        <div className="Home container">
            <div className="row">
                <h4 onClick={()=>window.location = '#'}>My Resume</h4>
            </div>
        </div>
    );
}

export default Resume;