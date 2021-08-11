import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  state = {
    nearTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const nearTop = window.scrollY < 130;
      if (nearTop !== this.state.nearTop) {
        this.setState({ nearTop });
        console.log('scroll is ' + window.scrollY);
        console.log('near top: ' + nearTop);
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar
          // fixed="top"
          id="nav"
          className={this.state.nearTop ? 'nav-background-top' : 'nav-background-scroll'}
        >
          <Nav>
            <NavLink exact to="/" activeClassName="current-link" className="header-links">
              HOME
            </NavLink>
            <NavLink exact to="/about" activeClassName="current-link" className="header-links">
              ABOUT
            </NavLink>
            <NavLink exact to="/projects" activeClassName="current-link" className="header-links">
              PROJECTS
            </NavLink>
            <NavLink exact to="/contact" activeClassName="current-link" className="header-links">
              CONTACT
            </NavLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
