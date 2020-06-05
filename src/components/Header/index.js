import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {
  Navbar,
  NavbarBrand,
  NavItem
} from 'reactstrap';
// import { Container } from './styles';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="danger" className="mr-auto" dark expand="md" className="mb-4">
        <NavbarBrand href="/">PAPIRO</NavbarBrand>
        <FontAwesomeIcon icon={faSignOutAlt} href='#'  /> 
      </Navbar>
    </div>
  );
}



export default Header;
