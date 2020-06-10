import React, {Component, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
} from 'reactstrap';

import Comentar from './../../components/Comentar';

import Api from './../../services/api';

import {
  faEye,
  faClock,
  faThumbsUp,
  faThumbsDown,
  faReply,
  faShare,
  faFlag,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';


import {
  Container,
  ContentLeft,
  ContentLeftAll,
  Userinfo,
  Avatar,
  Posttext,
  Postinfo,
  Comments,
  Commentbg,
  Mark,
  Views,
  Time,
  Postinfobot,
  PosttextComent,
  Form,
  Opcoes
} from './styles';

import avatar from './../../images/user.png';

class Post extends Component {

  state = {
    on: false,
  }

  toogle = () => {
    this.setState({
      on: !this.state.on
    });
  };

   getComentario = async  () => {
   // const comentario = await Api.
    }



  render () {

      const { mensagem } = this.props;
      return (
        <div>



        { mensagem.map(mensagem => (


        <Container key={mensagem.IdMensagem}>

              <ContentLeft>
                <Userinfo>
                    <Avatar>
                        <img src={avatar} alt="" />
                    </Avatar>


                </Userinfo>
                <Posttext>
                  <h2><a href="#">{mensagem.TituloMensagem}</a></h2>
                  <p>{mensagem.DsMensagem.slice(0,150)+'...'}</p>
                </Posttext>


                <div className="clearfix"></div>

            </ContentLeft>



          <Postinfo>
              <Comments  onClick={this.toogle}>
                  <Commentbg>
                      560
                      <Mark/>
                  </Commentbg>

              </Comments>
              <Views><FontAwesomeIcon size="sm" icon={faEye} /> 1,568</Views>
              <Time><FontAwesomeIcon size="sm" icon={faClock} />  24 min</Time>
          </Postinfo>

          <Opcoes>
            <Button className="up my-2">
              <FontAwesomeIcon size="sm" icon={faLightbulb} />
            </Button>

            <Button className="comentario">Comentarios</Button>
          </Opcoes>

          <Comentar />

      </Container>
      ))}




       </div>


    );
  }

}

export default Post;
