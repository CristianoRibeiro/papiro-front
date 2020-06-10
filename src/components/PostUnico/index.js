import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
} from 'reactstrap';

import PostUnico from './../../components/PostUnico';

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

class PostUnico extends Component {
  render() {

  const {mensagemKey} = this.props;

  return (
    <>
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
        <Comments>
            <Commentbg>
                560
                <Mark/>
            </Commentbg>

        </Comments>
        <Views><FontAwesomeIcon size="sm" icon={faEye} /> 1,568</Views>
        <Time><FontAwesomeIcon size="sm" icon={faClock} />  24 min</Time>
    </Postinfo>
    </>
  );
  }
}

export default PostUnico;
