import React, {useState, useEffect} from 'react';

import { Container, Row, Col } from 'reactstrap';
import Pagination from './../../components/Pagination';
import Post from  './../../pages/Post';

import Header from './../../components/Header';

import MgsTopico from './../../components/MgsTopico';
import UserPane from './../../components/UserPane';
import AvisosPartial from './../../components/AvisosPartial';
import RecompensasPartial from './../../components/RecompensasPartial';
import TopTopics from  './../../components/TopTopics';

import './styles.css';
import Api from '../../services/api';

function Main(props) {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    loadData();
  }, [posts]);


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  async function loadData() {

    try {
      const response = await Api.get(`/Mensagem`);
      setPosts(response.data);

    } catch (error) {
      console.log(error);
    }

  };


  return(
    <>
    <Header  {...props} />

    <Container>
    <Row>
    <Col xs="3">
        <UserPane/>
    </Col>

      <Col xs="6">
        <MgsTopico />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />



        <Post mensagem={currentPosts} />
      </Col>
      <Col xs="3">
          <AvisosPartial/>
          <br></br>
          <br></br>
          <RecompensasPartial/>
          <br></br>
          <br></br>

          <TopTopics/>
      </Col>
      </Row>
    </Container>

    </>
    );



}

export default Main;
