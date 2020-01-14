import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';

const UserCard = props => {

    return (
        <div className="UserInfo">
          <Card style={{ maxWidth: "500px", margin: "30px"}}>
              <CardImg top width="100%" src={props.users.avatar_url} alt="Card image cap" />
              <CardBody>
                  <CardTitle>Username: {props.users.login}</CardTitle>
                  <CardText>ID: {props.users.id}</CardText>
                  <CardText>
                      <small className="text-muted">type: {props.users.type}</small>
                  </CardText>
              </CardBody>
          </Card>
        </div>
    );
}

export default UserCard;