import React, { useState } from 'react';
import { Collapse,NavbarToggler} from 'reactstrap';
import {SideMenu} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faAward,faPlusCircle,faTrophy,faUsers,faAddressCard,faUsersCog,faStar,faScroll,faChalkboardTeacher,faChartBar} from '@fortawesome/free-solid-svg-icons'


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
      <Link to="/Avisos/ListarAvisos/"><li > <FontAwesomeIcon icon={faNewspaper} /> Avisos</li></Link> 
      <Link to="Recompensas/ListarRecompensas"><li><FontAwesomeIcon icon={faAward}/> Recompensas</li></Link>
      <Link to="/Conquistas/ListarConquistas/"><li><FontAwesomeIcon icon={faStar}/> Conquistas</li></Link>
      <li className='liadmin' onClick={toggle}><FontAwesomeIcon icon={faChalkboardTeacher}/> Gestão</li>
        <Collapse isOpen={isOpen}>

        <Link to="/Gestão/Cargos/"><li className='li3' ><FontAwesomeIcon icon={faAddressCard}/> Cargos</li></Link>
        <Link to="/Gestão/Setores/"><li className='li3'><FontAwesomeIcon icon={faUsersCog}/> Setores</li></Link>
        <Link to="/Gestão/Relatórios/"><li className='li3'><FontAwesomeIcon icon={faChartBar}/> Relatórios</li></Link>
        <li className='li2'onClick={toggle2}><FontAwesomeIcon icon={faPlusCircle}/> Cadastrar</li>

        </Collapse>
       
        <Collapse isOpen={isOpen && isOpen2}>
        <Link to="/Avisos/Cadastrar"><li className='li3'> <FontAwesomeIcon icon={faNewspaper} /> Avisos</li></Link>
        <Link to="/Conquistas/Cadastrar"><li className='li3'><FontAwesomeIcon icon={faStar}/> Conquistas</li></Link>
        <Link to="/Recompensas/Cadastrar/"> <li className='li3'><FontAwesomeIcon icon={faAward}/> Recompensas</li></Link>
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

