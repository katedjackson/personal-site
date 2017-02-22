import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Navbar>
        <Navbar.Header className="navbar-title">
          <Navbar.Brand>
            <a href="#">KATELYN JACKSON</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#/about">ABOUT</NavItem>
            <NavItem eventKey={2} href="#/portfolio">PORTFOLIO</NavItem>
            <NavItem eventKey={3} href="#/blog">BLOG</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://twitter.com/msjacksonnyc"><img src={"/public/twitter.png"}/></NavItem>
            <NavItem eventKey={1} href="https://www.linkedin.com/in/katelyn-jackson/"><img src={"/public/linkedin.png"}/></NavItem>
            <NavItem eventKey={1} href="https://github.com/katedjackson"><img src={"/public/github.png"}/></NavItem>
            <NavItem eventKey={1} href="http://stackoverflow.com/story/katedjackson"><img src={"/public/stackoverflow.png"}/></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
