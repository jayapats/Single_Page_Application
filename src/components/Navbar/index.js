import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
  import viasat from "../images/vlogo.jpeg"


class Navbar extends Component {
  render() {
  return (
    <>
      <Nav>
          <NavLink to="/">
                <img src={require('../images/vlogo.jpeg')} alt='logo' id='viasatimg' >
                </img>
          </NavLink>

          <Bars/>
          <NavMenu>
            
          <NavLink to="/dashboard">
                <img src={require('../images/dash.png')} alt='dashboard' id='dashboardimg'/>
          </NavLink>
              <NavLink to="/user" >Login User : sjayapathy</NavLink>
              <NavLink to="/logout" >Logout</NavLink>
          </NavMenu>
      </Nav>
    </>
  )
}
}

export default Navbar
