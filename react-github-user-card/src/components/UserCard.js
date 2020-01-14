import React from 'react';

const UserCard = props => {

    return (
        <div className="UserInfo">
          <img  src={props.users.avatar_url} />
          <p>Username: {props.users.login}</p>
          <p>ID: {props.users.id}</p>
          {console.log(Object.entries(props.users)[0])}
        </div>
    );
}

export default UserCard;