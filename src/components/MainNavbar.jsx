import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink as NLink } from 'react-router-dom'
import ThemeToggle from "./ThemeToggle"


export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="MainNavbar">
        <Navbar color="dark" dark expand="sm" className="mb-3" fixed="top">
          <NavbarBrand tag={NLink} exact to="/">
            <img src="/img/logo-white.png" alt="" className="navbar-logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="" navbar>
              {/* <NavItem>
                <NavLink tag={NLink} to="/hello">Hello</NavLink>
              </NavItem>
              */}
              <NavItem className="ml-auto">
                <div className="toggle-container">
                  <ThemeToggle />
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
