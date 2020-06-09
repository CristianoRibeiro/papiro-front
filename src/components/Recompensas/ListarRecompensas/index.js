import React,{Component} from 'react';
import {
  Jumbotron,Table
} from 'reactstrap';

class ListarRecompensas extends Component{


    render(){
      
     return(
       <>
      <h2> Recompensas Ativas </h2>
        <Jumbotron>
        <Table striped>
      <thead>
        <tr>
          <th>Prêmio</th>
          <th>Pontos Necessários </th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Jacob</td>
  
        </tr>
        
      </tbody>
    </Table>
        </Jumbotron>
</>
      )}    
    }  
  

    export default ListarRecompensas;
  