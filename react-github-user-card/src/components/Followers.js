import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';

const Followers = props => {
    return (
        <>
            {props.followers.map(follower => {
                return (
                    <div className='followerInfo' key={follower.id}>
                        <Card style={{ maxWidth: "500px", margin: "30px"}}>
                            <CardImg top width="100%" src={follower.avatar_url} alt="Card image cap" style={{ display: "flex"}}/>
                            <CardBody>
                                <CardTitle>Username: {follower.login}</CardTitle>
                                <CardText>ID: {follower.id}</CardText>
                                <CardText>
                                    <small className="text-muted">type: {follower.type}</small>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                );
            })}
        </>
    );
}

export default Followers;