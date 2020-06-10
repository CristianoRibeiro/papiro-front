import React, { useState } from 'react';
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {
  Navbar,
  NavbarBrand,
  NavItem
} from 'reactstrap';
import { Content } from './styles';

import { logout } from "./../../services/auth";


function Header(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

   function handleLogout() {


    logout()
    props.history.push('/login');
  };

  return (
    <div>
      <Navbar color="danger" className="mr-auto" dark expand="md" className="mb-4">

        <Content>

        <NavbarBrand href="/">PAPIRO</NavbarBrand>
        <div>
          <a href="#" onClick={() => handleLogout()}>
            Sair &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faSignOutAlt} href='#'  />
          </a>
        </div>


        </Content>


      </Navbar>
    </div>
  );
}



export default withRouter(Header);
