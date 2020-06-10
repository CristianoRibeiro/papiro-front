import React,{Component} from 'react';
import Api from '../../services/api';

import { SidebarBlock } from './styles';

class TopTopics extends Component{
  state={
      topmensagens:[]
  };


 async componentDidMount(){

    const response=await Api.get('Mensagem/ObterTop3Mensagens');

    this.setState({

      topmensagens:response.data

    })

    };

    render(){
      const{ topmensagens}=this.state;
      return(

        <SidebarBlock>
            <h3> Top Tópicos</h3>
            <div className="divline"></div>

            <div className="blocktxt">
              <ul>
              {topmensagens.map(topmensagens => (
                <li key={topmensagens.IdMensagem}>
                      {topmensagens.TituloMensagem}

                </li>
              ))}

              </ul>
            </div>
        </SidebarBlock>
      )}
    }

    export default TopTopics;
