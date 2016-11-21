import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem} from 'react-bootstrap'
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

//adding styles to bootstrap
bootstrapUtils.addStyle(Navbar, 'cool');
bootstrapUtils.addStyle(Nav, 'text');



class NavHead extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
     <Navbar.Header>
       <Navbar.Brand>
         <a href="#">GetGO</a>
       </Navbar.Brand>
       <Navbar.Toggle />
     </Navbar.Header>
     <Navbar.Collapse>
       <Nav>
         <NavDropdown eventKey={3} title="City" id="basic-nav-dropdown">
           <MenuItem eventKey={3.1}>Toronto</MenuItem>
         </NavDropdown>
       </Nav>
       <Nav pullRight>
         <NavItem eventKey={2} href="#">Register</NavItem>
         <NavItem eventKey={1} href="#">Login</NavItem>
       </Nav>
     </Navbar.Collapse>
   </Navbar>
    );
  }
};
export default NavHead;
