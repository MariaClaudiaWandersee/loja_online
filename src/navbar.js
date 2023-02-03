import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState as UseState, useRef as UseRef } from "react";
import Logo from './components/img/logo.png';
import { Link, NavLink } from "react-router-dom";

function header() {
  const navRef = UseRef();
  
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
		<header>
			<div className='picture_principal md-6'>
				<img className='logo' src={Logo}/>
			</div>
			<nav ref={navRef}>
				{/* <a href="/" active>Início</a> */}
				<a href="/">Sobre Nós</a>
				<a href="/contatos-millennium">Contato</a>
				<a href="/trabalhe-conosco">Trabalhe Conosco</a>
				{/* <Link class="nav-link active" to="/">Início</Link>
				<Link class="nav-link" to="/sobre-millennium">Sobre</Link>
				<Link class="nav-link" to="/contatos-millennium">Contato</Link>
				<Link class="nav-link" to="/trabalhe-conosco">Trabalhe Conosco</Link> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
  );
}

export default header;