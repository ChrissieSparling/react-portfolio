
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Container} from 'react-bootstrap'
import { MDBRipple, MDBBtn, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import ProjectCard from "./ProjectCards";
import ArtSea from "../images/ArtSea.jpg";
import thirst from "../images/thirst.jpg";
// import comingSoon from "../images/comingSoon.jpg";
import ocean from "../images/ocean.jpg";
import sunflower1 from "../images/sunflower1.jpg";

function Projects(){
    return (
  <>
        <Container fluid className="project-section">
      <Container>
        <h1 className="d-flex justify-content-center project-heading">
          My Gallery of Projects 
        </h1>
        <p className="d-flex justify-content-center" style={{ color: "magenta", fontSize:"2em" }}>
         My Daily Dose of Dopomine. In other words, they say enjoy what you do...and I do! Here are a few things I have done in the last 12weeks.
        </p>
        
        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>    
        {/* thirsty-thursdays */}
      <MDBCol>
      <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={thirst}
        alt='...'
        position='top'
        />
    <MDBCardBody>
      <MDBCardTitle>Thirsty-Thursdays</MDBCardTitle>
      <MDBCardText>
      This was a group collaboration project. It is a fun app for people to use when they don't' know they want to eat or drink. Basically, its a virtual cook-book.
      </MDBCardText>
      <MDBBtn href='https://chuckdvchek.github.io/thirsty-thursdays/'>Thirsty-thursdays</MDBBtn>
    </MDBCardBody>
    </MDBRipple>
    </MDBCard>
    </MDBCol>


      {/* Oceans of Knowledge */}
    <MDBCol>
    <MDBCard>
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
    <MDBCardImage src={ocean}
        alt='...'
        position='top'
        />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Oceans of Knowledge</MDBCardTitle>
        <MDBCardText>
        A fun interactive trivia game. We created a seasick mode for extra fun. You can select your categories, number of questions, difficulty level and you can save your score to make it competive.
        </MDBCardText>
        <MDBBtn href='https://zortro.github.io/Project1/'>Oceans Of Knowledge</MDBBtn>
      </MDBCardBody>
    </MDBCard> 
  </MDBCol>

        {/* Artsea */}
  <MDBCol>
  <MDBCard>
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
    <MDBCardImage src={ArtSea}
        alt='...'
        position='top'
        />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>ArtSea</MDBCardTitle>
        <MDBCardText>
        This project is near and dear to my heart. Art feeds the soul. During this pandemic we wanted to create an application that links artist to artlovers in the seattle area. There are things like Etsy out there, but we wanted to take a little more home town route with this.
        </MDBCardText>
        <MDBBtn href='https://artsea-2022.herokuapp.com/'>ArtSea</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>

    {/* RiseUP */}
    <MDBCol>
  <MDBCard>
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
    <MDBCardImage src={sunflower1}
        alt='...'
        position='top'
        />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>RiseUp</MDBCardTitle>
        <MDBCardText>
        Coming soon- the best Self-help, Mental wellness, advice app everyone needs.
        </MDBCardText>
        <MDBBtn href='https://github.com/ChrissieSparling'>RiseUp</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    </MDBRow>
    </Container>
    </Container>
    </>
    );
}

export default Projects;

