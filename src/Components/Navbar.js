
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar} from 'react-bootstrap'
import {BsHouseDoor,BsPerson,BsArchive} from 'react-icons/bs'

function NavBar() {
 return(
     <>
    <Navbar bg='dark' variant='dark'
    sticky='top' expand='md' collapseOnSelect>
      <Navbar.Brand href="/">
        Miss Chrissie.
      </Navbar.Brand>

      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav>
        <Nav.Link href= '/'><BsHouseDoor style={{marginBottom:'4px', marginRight:'2px'}}/>Home</Nav.Link>
        <Nav.Link href= '/About'><BsPerson style={{marginBottom:'4px', marginRight:'2px'}}/>About Me</Nav.Link>
        <Nav.Link href= '/Projects'><BsArchive style={{marginBottom:'4px', marginRight:'2px'}}/>Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
    </>
    );
    }

    export default NavBar;