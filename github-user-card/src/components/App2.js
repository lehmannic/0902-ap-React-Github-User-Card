import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
import Followers from "./FollowersList";

import "./App.css";

class App extends React.Component {
  state = {
    user: {},
    userFollowers: [],
  };

  // Fetch User Data
  componentDidMount() {
    axios
      .all([
        axios.get("https://api.github.com/users/lehmannic"),
        axios.get("https://api.github.com/users/dombruno/followers"),
      ])
      .then(
        axios.spread((userRes, followersRes) => {
          this.setState({
            user: userRes.data,
            userFollowers: followersRes.data,
          });
        })
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card App</h1>
        <UserCard user={this.state.user} />
        <Followers followers={this.state.userFollowers} />
      </div>
    );
  }
}

export default App;
