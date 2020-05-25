import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Form, FormGroup, Label, Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
// import { Container } from './styles';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="danger" dark expand="md" className="mb-4">
        <NavbarBrand href="/">PAPIRO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>


            <NavItem>
            <Form inline>
                <FormGroup>
                  <Label for="pesquisa" hidden>Pesquisa</Label>
                  <Input type="search" name="pesquisa" id="pesquisa" placeholder="Pesquisa" />
                </FormGroup>
                {' '}

                <Button className="ml-2 btn-dark">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </NavItem>
            <NavItem>
            <Button className="ml-2 mr-4 btn-success">
                  Iniciar um novo Topíco
            </Button>
            </NavItem>
            <NavItem>
              <NavLink className="mr-4" href="#">
                <FontAwesomeIcon size="lg" icon={faEnvelope} />
              </NavLink>
            </NavItem>
            <NavItem>
            <UncontrolledDropdown>
              <DropdownToggle className=""  caret>
              Usuario Logado
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Meu Perfil</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sair</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}



export default Header;
