import React, { useState } from 'react';
import { Collapse,NavbarToggler} from 'reactstrap';
import {SideMenu} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faAward,faPlusCircle,faTrophy,faUsers,faAddressCard,faUsersCog,faStar,faScroll} from '@fortawesome/free-solid-svg-icons'

import {Link}  from 'react-router-dom';


function SideNav(){

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {if (!collapsed){setIsOpen(false);setIsOpen2(false);setIsOpen3(false)};  setCollapsed(!collapsed)}

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{if (!isOpen){setIsOpen2(false);setIsOpen3(false)};
                                  setIsOpen(!isOpen);}

  const [isOpen2, setIsOpen2] = useState(false);
  
  const toggle2 = () => setIsOpen2(!isOpen2);

  const [isOpen3, setIsOpen3] = useState(false);
  
  const toggle3= () => setIsOpen3(!isOpen3);
return (

<SideMenu navbar='true'>
<NavbarToggler onClick={toggleNavbar}><FontAwesomeIcon icon={faScroll}/></NavbarToggler>
<Collapse isOpen={!collapsed} navbar>
<div className="container">
  <div className="card">
    <div className="body">
      <ul>
      <Link to="/Avisos/"><li > <FontAwesomeIcon icon={faNewspaper} /> Avisos</li></Link>
      <Link to="/Recompensas/"><li><FontAwesomeIcon icon={faAward}/> Recompensas</li></Link>
        <li onClick={toggle}><FontAwesomeIcon icon={faPlusCircle}/> Cadastrar</li>
        <Collapse isOpen={isOpen}>
        
        <li className='li2'> <FontAwesomeIcon icon={faNewspaper} /> Avisos</li>
        <li className='li2 'onClick={toggle2}><FontAwesomeIcon icon={faTrophy}/> Prêmios</li>
        <Collapse isOpen={isOpen && isOpen2}>
        <li className='li3'><FontAwesomeIcon icon={faStar}/> Conquistas</li>
        <li className='li3'><FontAwesomeIcon icon={faAward}/> Recompensas</li>
        </Collapse>

        <li className='li2'onClick={toggle3}><FontAwesomeIcon icon={faUsers}/> Equipes</li>

        <Collapse isOpen={isOpen && isOpen3}>
     
        <li className='li3' ><FontAwesomeIcon icon={faAddressCard}/> Cargo</li>
        <li className='li3'><FontAwesomeIcon icon={faUsersCog}/> Setor</li>
     
        </Collapse>
        </Collapse>
            
      </ul>
    </div>
  </div>
</div>
</Collapse>
</SideMenu>

);
}

export default SideNav;

