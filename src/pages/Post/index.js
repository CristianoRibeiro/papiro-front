import React, {Component, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
} from 'reactstrap';

import { getIdUsuario } from './../../services/auth';
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

import api from './../../services/api';

import avatar from './../../images/user.png';

class Post extends Component {

  state = {
    toogle: 0,
    cor: '#999',
    up:0
  }

  async handleClick(id) {
    this.setState({toogle:this.state.toogle === id ? 0 : id});
    console.log(id);
  }


  async handleFavorit(id){

    this.setState({
      cor: this.state.cor === '#999'? '#FF7700': '#999',
      up: this.state.up === id ? 0 : id
    });

    // try {
    //   const id_user = parseInt(getIdUsuario());

    //   let response = await api.post("/UPUsuario", {
    //     CdUsuario: id_user,
    //     CdMensagem: id,
    //   });
    //   console.log(response)

    // } catch (error) {

    //   console.log(error);

    // }
  }


  render () {
      const { toogle, up } = this.state;
      const { mensagem } = this.props;

      return (
        <>

        { mensagem.map((mensagem, i) => (


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



          {/* <Postinfo>
              <Comments>
                  <Commentbg>
                      560
                      <Mark/>
                  </Commentbg>

              </Comments>
              <Views><FontAwesomeIcon size="sm" icon={faEye} /> 1,568</Views>
              <Time><FontAwesomeIcon size="sm" icon={faClock} />  24 min</Time>
          </Postinfo> */}

          <Opcoes>
            {up === mensagem.IdMensagem ? (
              <Button  style={{color: '#FF7700' }} className="up" onClick={() => this.handleFavorit(mensagem.IdMensagem)}>
                <FontAwesomeIcon size="sm" icon={faLightbulb} />
              </Button>
            ): (
              <Button  style={{color: '#999' }} className="up" onClick={() => this.handleFavorit(mensagem.IdMensagem)}>
              <FontAwesomeIcon size="sm" icon={faLightbulb} />
            </Button>
            )}


            <Button  className="comentario" onClick={() => this.handleClick(mensagem.IdMensagem)}>Comentarios</Button>
          </Opcoes>


            {toogle === mensagem.IdMensagem && (
              <Comentar post_id={mensagem.IdMensagem} />
            )}


      </Container>
      ))}




       </>


    );
  }

}

export default Post;
