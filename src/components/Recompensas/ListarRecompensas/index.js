import React,{Component} from 'react';
import {
  Jumbotron,Table,Button
} from 'reactstrap';
import Api from '../../../services/api'
import { faCrown,faGift,faLevelUpAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ListarRecompensas extends Component{
  state={
    ListaRecompensas:[]
};

async componentDidMount(){

  const response=await Api.get('/Recompensa/ListarRecompensas');

  this.setState({

  ListaRecompensas:response.data

  })

  };

    render(){
      const{ ListaRecompensas}=this.state;
     return(
       <>
        <Jumbotron>
        <h2> Recompensas Ativas <hr></hr></h2>
        <Table striped bordered>
      <thead>
        <tr>
          <th><center><FontAwesomeIcon icon={faGift}/>  Prêmio</center></th>
          <th><center><FontAwesomeIcon icon={faLevelUpAlt }/> Pontos Necessários </center></th>
          
     
        </tr>
      </thead>
      <tbody>
          {ListaRecompensas.map(ListaRecompensas => (
              <tr key={ListaRecompensas.IdRecompensa}>
              <td className="Center"> {ListaRecompensas.DsRecompensa}</td>  
               <td> <center> {ListaRecompensas.ValorPontuacao}  pts </center>  </td>  
               <center><Button color='info'><FontAwesomeIcon icon={faCrown}/>  Reinvidicar </Button></center>
            </tr>
            ))}
  
      </tbody>
    </Table>
        </Jumbotron>
</>
      )}    
    }  
  

    export default ListarRecompensas;
  