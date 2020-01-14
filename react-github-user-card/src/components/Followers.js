import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';

const Followers = props => {
    return (
        <div className="followers-info">
            {props.followers.map(follower => {
                return (
                    <div className='followerInfo' key={follower.id}>
                        <Card style={{ maxWidth: "500px", margin: "30px"}}>
                            <Row>
                            <Col >
                            <CardImg top width="100%" src={follower.avatar_url} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Username: {follower.login}</CardTitle>
                                <CardText>ID: {follower.id}</CardText>
                                <CardText>
                                    <small className="text-muted">type: {follower.type}</small>
                                </CardText>
                            </CardBody>
                            </Col>
                            </Row>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
}

export default Followers;