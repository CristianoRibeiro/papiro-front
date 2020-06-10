import React,{Component}from 'react';


import {SidebarBlock}  from './styles';

import Api from '../../../services/api';

class RecompensasPartial extends Component{
  state={
      recompensas:[]
  };


 async componentDidMount(){

    const response=await Api.get('Recompensa/ObterTop3Recompensas');

    this.setState({

    recompensas:response.data

    })

    };

    render(){
      const{ recompensas}=this.state;

      return(

        <SidebarBlock>
            <h3> Recompensas</h3>
            <div className="divline"></div>

            <div className="blocktxt">
              <ul>
              {recompensas.map(recompensas => (
                  <li key={recompensas.IdRecompensa}>
                        {recompensas.DsRecompensa}  --- {recompensas.ValorPontuacao} pts.

                </li>
              ))}
              </ul>
            </div>
        </SidebarBlock>



      )
    }

}


  export default RecompensasPartial;
