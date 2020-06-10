import React,{Component} from 'react';
import Api from '../../services/api';
import {
  Card,
  CardHeader,CardBody
} from 'reactstrap';

import {SidebarBlock}  from './styles';

class AvisosPartial extends Component{
  state={
      avisos:[]
  };


 async componentDidMount(){

    const response=await Api.get('Aviso/ObterAvisosAtivos');

    this.setState({

    avisos:response.data

    })

    };

    render(){
      const{ avisos}=this.state;
      return(
      <SidebarBlock>
        <h3> Avisos</h3>
        <div className="divline"></div>

        <div className="blocktxt">
          <ul>
          {avisos.map(avisos => (
              <li key={avisos.IdAviso}>
                    {avisos.TituloAviso}

            </li>
          ))}
          </ul>
        </div>
     </SidebarBlock>

      )}
    }

    export default AvisosPartial;
