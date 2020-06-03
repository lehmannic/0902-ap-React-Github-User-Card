import React from "react";


const FollowersList = props => {
  console.log(props.followers)

  return (
    <div className="followers-list container">
      {props.followers.map(follower => {
        return (
          <div className="follower-card container">
            <img src={follower.avatar_url} />
            <h3>Username: {follower.login}</h3>
          </div>
        )
      })}
    </div>
  )
};

export default FollowersList;
