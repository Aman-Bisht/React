import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';

const Footer = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);



  return (
    <Navbar
      expand="md"
      variant={darkMode ? 'dark' : 'light'}
      className={`${theme? 'bg-light-black text-light' : 'bg-light text-balck'} justify-content-center w-100`}
      style={{ width: '100%', marginTop: '40px' }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/about-us"
              className={`nav-link ${darkMode? 'text-dark-primary' : 'text-light-primary'}`}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className={`nav-link ${darkMode? 'text-dark-primary' : 'text-light-primary'}`}
              >
              Contact Us
            </Link>
          </Nav>
          <Nav className="mx-auto">
            <Navbar.Brand  className={`nav-link ${darkMode? 'text-dark-primary' : 'text-light-primary'}`}>
              <b>BuY-it.com</b>
            </Navbar.Brand>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      <div className="text-center py-3">
        <p  className={`nav-link ${darkMode? 'text-dark-primary' : 'text-light-primary'}`}>
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </Navbar>
  );
};

export default Footer;
