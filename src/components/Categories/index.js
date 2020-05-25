import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  ListGroup, ListGroupItem, Badge,
  CardHeader
} from 'reactstrap';
// import { Container } from './styles';

function Categories() {
  return(
    <div>
       <Card>
       <CardHeader>Catégorias</CardHeader>

        <CardBody>

        <ListGroup>
          <ListGroupItem className="justify-content-between border-0">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
          <ListGroupItem className="justify-content-between border-0">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
          <ListGroupItem className="justify-content-between border-0">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
        </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
}

export default Categories;
