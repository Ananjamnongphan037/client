import '../App.css';
import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Container  } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

export default function Navbarss() {
    const LinkSty= {
        margin: "15px",
        textDecoration: "none",
        color: 'white'
    }
    const ffantasy = {
        fontFamily: 'fantasy'
    }

    

    return (
    <div className='fixed-top'>
    <Navbar bg="dark" variant="dark" expand="md">
    <Container style={ffantasy}>
        <Link  style={LinkSty} to='/' className='navbar-logo d-inline-block align-top'>
          NodeCrud
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="ml-auto">
            <NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : " red ") } to="/" >
                  Home
            </NavLink>
            <NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : " red ") } to="/About">
                  About
            </NavLink>
            <NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : " red ") } to="/Users">
                  Users
            </NavLink>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
    )
}
