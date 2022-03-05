
import React from 'react';
// #mepic{
//   display: inline-block;
//     height: 400px;
//     width: 400px;
//     object-fit: cover;
//     border-radius: 6px;
// }
function About() {
  return (
    <div className="About">
        <div id='mecontent'>
          <h1 id='about-me-title' className="about-me">About Me</h1>
          <p id='about-me-content' className="about-me">
          I have learned in my 48 years on this planet, what is truly important to me and that is family. Whether that be my work family, my blood family, my tribal family, or my friend family...Family comes first. <br/>
           <br/>
          My husband and I were high school sweethearts. We have been together for thirty years. We have two amazing children together.  They are 23 and 18. One is studying to be a Doctor at the UW and the other is a senior in High School, hoping to go on the "Disc-golf Pro-Tour" after graduation.
         <br/>
          I am energentic. Outgoing. Easily conforming to most situations. Forever the student. I see value in learning, and eager to see what I am capable of doing with this life. Recently, I have completed the UW Full Stack Web Development program and am capable of doing some amazing things using the web. I am moldable, flexible, and work well in teams. 
                        
          </p>
        </div>
        <img id='mepic' alt='chrissie and Glaysia' src='../../../public/me&G.jpg' />
    </div>
  );
}

export default About;