import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as NLink } from 'react-router-dom'


export default class extends React.Component {
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
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-3">
          <NavbarBrand tag={NLink} exact to="/">
            <img src="/img/logo-white.png" alt="" className="navbar-logo"/>
          {/* Dev++ */}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="" navbar>
              <NavItem>
                <NavLink tag={NLink} to="/program">Our Program</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NLink} to="/team">The Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NLink} to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
