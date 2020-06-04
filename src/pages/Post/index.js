import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faClock } from '@fortawesome/free-solid-svg-icons'
import {
  Container,
  ContentLeft,
  Userinfo,
  Avatar,
  Posttext,
  Clearfix,
  Postinfo,
  Comments,
  Commentbg,
  Mark,
  Views,
  Time,
} from './styles';

import avatar from './../../images/images.jpeg';

function Post() {
  return (
    <Container>
      <ContentLeft>
          <Userinfo>
              <Avatar>
                  <img src={avatar} alt="" />
              </Avatar>


          </Userinfo>
          <Posttext>
              <h2><a href="#">10 Kids Unaware of Their Halloween Costume</a></h2>
              <p>It's one thing to subject yourself to a Halloween costume mishap because, hey, that's your prerogative.</p>
          </Posttext>
          <Clearfix />
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
      <Clearfix />
  </Container>
);
}

export default Post;
