import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {
  Navbar,
  NavbarBrand,
  NavItem
} from 'reactstrap';
import { Content } from './styles';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="danger" className="mr-auto" dark expand="md" className="mb-4">

        <Content>

        <NavbarBrand href="/">PAPIRO</NavbarBrand>
        <div>
          <a href="#">
            Sair &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faSignOutAlt} href='#'  />
          </a>
        </div>


        </Content>


      </Navbar>
    </div>
  );
}



export default Header;
