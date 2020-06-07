import React, {useState, Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
} from 'reactstrap';

import Api from './../../services/api';

import {
  faEye,
  faClock,
  faThumbsUp,
  faThumbsDown,
  faReply,
  faShare,
  faFlag
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
  }
  render () {

      const { mensagem } = this.props;
      return (
        <div>

        {mensagem.map(mensagem => (


        <Container>
          {!this.state.on ? (
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

          ):(
            <ContentLeftAll>
                <Userinfo>
                    <Avatar>
                        <img src={avatar} alt="" />
                    </Avatar>


                </Userinfo>
                <Posttext>
                    <h2><a href="#">10 Kids Unaware of Their Halloween Costume</a></h2>
                    <p>It's one thing to subject yourself to a Halloween costume mishap because, hey, that's your prerogative.</p>
                </Posttext>
                <div className="clearfix"></div>
            </ContentLeftAll>
          )}

          { !this.state.on && (
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
          )}
          <div className="clearfix"></div>

          { this.state.on && (
            <Postinfobot>

                <div class="likeblock pull-left">
                    <a href="#" class="up">
                      <FontAwesomeIcon size="sm" icon={faThumbsUp} />
                      <i class="fa fa-thumbs-o-up"></i>
                      10
                    </a>
                    <a href="#" class="down">
                      <FontAwesomeIcon size="sm" icon={faThumbsDown} />
                      1
                    </a>
                </div>
                <div class="prev pull-left">
                    <a href="#">
                      <FontAwesomeIcon size="sm" icon={faReply} />
                    </a>
                </div>
                <div class="posted pull-left">
                <FontAwesomeIcon size="sm" icon={faClock} />
                 Posted on : 20 Nov @ 9:45am
                </div>

                <div class="next pull-right">
                    <a href="#">
                      <FontAwesomeIcon size="sm" icon={faShare} />
                    </a>

                </div>

                <div className="clearfix"></div>
            </Postinfobot>
          )}
      </Container>
      ))}
      <div>
      { this.state.on && (
        <div>

           {/** Textarea Comentarios do post */}
        <Container>
          <Form action="#" class="form" method="post">
              <div class="topwrap">
                <Userinfo>
                    <Avatar>
                        <img src={avatar} alt="" />
                    </Avatar>


                </Userinfo>
                 <PosttextComent>
                      <div class="textwraper">
                          <div class="postreply">Postar um comentário</div>
                          <textarea name="reply" id="reply" placeholder="Digite aqui seu comentário"></textarea>
                      </div>
                  </PosttextComent>
                  <div class="clearfix"></div>
              </div>
              <Postinfobot>



                  <div class="pull-right postreply">
                      <div class="pull-left smile"><a href="#"><i class="fa fa-smile-o"></i></a></div>
                      <div class="pull-left">
                      <Button className="ml-2 mr-4 btn-success">
                           Comentar
                      </Button>
                      </div>
                      <div class="clearfix"></div>
                  </div>


                  <div class="clearfix"></div>
              </Postinfobot>
          </Form>
        </Container>

         {/** Fim Textarea Comentarios do post */}

         {/** Comentarios do post */}
            <Container>

              <ContentLeftAll>
                  <Userinfo>
                      <Avatar>
                          <img src={avatar} alt="" />
                      </Avatar>


                  </Userinfo>
                  <Posttext>
                      <p>It's one thing to subject yourself to a Halloween costume mishap because, hey, that's your prerogative.</p>
                  </Posttext>
                  <div className="clearfix"></div>
              </ContentLeftAll>



            <div className="clearfix"></div>


              <Postinfobot>

                  <div class="likeblock pull-left">
                      <a href="#" class="up">
                        <FontAwesomeIcon size="sm" icon={faThumbsUp} />
                        <i class="fa fa-thumbs-o-up"></i>
                        10
                      </a>
                      <a href="#" class="down">
                        <FontAwesomeIcon size="sm" icon={faThumbsDown} />
                        1
                      </a>
                  </div>
                  <div class="prev pull-left">
                      <a href="#">
                        <FontAwesomeIcon size="sm" icon={faReply} />
                      </a>
                  </div>
                  <div class="posted pull-left">
                  <FontAwesomeIcon size="sm" icon={faClock} />
                  Posted on : 20 Nov @ 9:45am
                  </div>

                  <div class="next pull-right">
                      <a href="#">
                        <FontAwesomeIcon size="sm" icon={faShare} />
                      </a>

                  </div>

                  <div className="clearfix"></div>
              </Postinfobot>

            </Container>

             {/** fim  Comentarios do post */}

              {/**  Comentarios do comentario do post*/}

              <Container>

                <ContentLeftAll>
                    <Userinfo>
                        <Avatar>
                            <img src={avatar} alt="" />
                        </Avatar>


                    </Userinfo>
                    <Posttext>
                        <blockquote>
                            <span class="original">Original Posted by - theguy_21:</span>
                            Did you see that Dove ad pop up in your Facebook feed this year? How about the Geico camel one?
                        </blockquote>
                        <p>Toronto Mayor Rob Ford does not have a bigger fan than "Anchorman's" Ron Burgundy. In fact, Burgundy wants Ford to be re-elected so much, that he agreed to sing the campaign song Brien. The tune in question ...</p>

                    </Posttext>
                    <div className="clearfix"></div>
                </ContentLeftAll>



                <div className="clearfix"></div>


                <Postinfobot>

                    <div class="likeblock pull-left">
                        <a href="#" class="up">
                          <FontAwesomeIcon size="sm" icon={faThumbsUp} />
                          <i class="fa fa-thumbs-o-up"></i>
                          10
                        </a>
                        <a href="#" class="down">
                          <FontAwesomeIcon size="sm" icon={faThumbsDown} />
                          1
                        </a>
                    </div>
                    <div class="prev pull-left">
                        <a href="#">
                          <FontAwesomeIcon size="sm" icon={faReply} />
                        </a>
                    </div>
                    <div class="posted pull-left">
                    <FontAwesomeIcon size="sm" icon={faClock} />
                    Posted on : 20 Nov @ 9:45am
                    </div>

                    <div class="next pull-right">
                        <a href="#">
                          <FontAwesomeIcon size="sm" icon={faShare} />
                        </a>

                    </div>

                    <div className="clearfix"></div>
                </Postinfobot>

                </Container>
               {/** fim Comentarios do comentario do post*/}
            </div>
      )}
       </div>
       </div>

    );
  }

}

export default Post;
