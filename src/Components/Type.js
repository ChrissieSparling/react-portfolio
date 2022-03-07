import React from "react";
import Typewriter from "typewriter-effect";

function Type(){
    return(
        <Typewriter
      options={{
        strings: [
          "Mother-Wife-Sister-Daughter",
          "Optimist",
          "Full-Stack Developer",
          "Designer",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
        />
    );
}

export default Type