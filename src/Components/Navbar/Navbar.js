/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Navbar1 = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className="my-nav">
            <Navbar bg="transparent" variant="dark" expand="lg">
            <Navbar.Brand href="#home" className='ml-md-5'> <Link  className='text-warning' to="/"><b>MD. AKHLAQUR RAHMAN</b></Link></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto " variant="dark">  
                    <Link to="/"><a className="nav-link mr-4">Home</a></Link>
                    <Link to="/about"><a className="nav-link mr-4">About</a></Link>
                    <Link to="/portfolio"><a className="nav-link mr-4">Portfolio</a></Link>
                    <Link to="/blogs"><a className="nav-link mr-4">Blogs</a></Link>
                    <Link to="/contact"> <a className="nav-link mr-4 ">Contact</a></Link>
                       
                    <a target='_blank' href='https://drive.google.com/file/d/1XiHTlmnzSzbeufW1lXE-L_ane6XJYbpp/view?fbclid=IwAR30jIwCQHO9be92WyYIsYwY3Izfs8U88-RJALNSmnItRxElg42P8fTebNE'> <button className='btn text-white bg-warning px-4 mr-md-5 '><FontAwesomeIcon icon={faDownload} size="1x" /> Resume</button></a>  
                </Nav> 
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navbar1;