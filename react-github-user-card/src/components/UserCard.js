import React from 'react';

const UserCard = props => {

    return (
        <div className="UserInfo">
          <img  src={props.users.avatar_url} />
          {props.users.login}
          {console.log(Object.entries(props.users))}
        
        </div>
    );
}

export default UserCard;