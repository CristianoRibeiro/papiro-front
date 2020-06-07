import React from 'react';
import {
  Button,
} from 'reactstrap';
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

function MgsTopico() {
  return (
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
                      <div class="postreply">Postar um novo tópico</div>
                      <textarea name="reply" id="reply" placeholder="Digite aqui seu tópico"></textarea>
                  </div>
              </PosttextComent>
              <div class="clearfix"></div>
          </div>
          <Postinfobot>



              <div class="pull-right postreply">
                  <div class="pull-left smile"><a href="#"><i class="fa fa-smile-o"></i></a></div>
                  <div class="pull-left">
                  <Button className="ml-2 mr-4 btn-success">
                      Publicar
                  </Button>
                  </div>
                  <div class="clearfix"></div>
              </div>


              <div class="clearfix"></div>
          </Postinfobot>
      </Form>
    </Container>
    );
}

export default MgsTopico;
