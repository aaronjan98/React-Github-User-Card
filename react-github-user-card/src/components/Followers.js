import React from 'react';

const Followers = props => {
    return (
        <div className="followers-info">
            {props.followers.map(follower => {
                return (
                    <div className='followerInfo' key={follower.id}>
                        <img src={follower.avatar_url} />
                        <p>Username: {follower.login}</p>
                        <p>ID: {follower.id}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Followers;