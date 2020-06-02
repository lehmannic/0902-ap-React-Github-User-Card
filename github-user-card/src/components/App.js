// import React from 'react';
// import axios from 'axios';
// import UserDisplay from './UserCard'
// import Form from './UsernameForm'
// import './App.css';

// class App extends React.Component {
//   state = {
//     user: {},
//   }

//   // load in me (lehmannic) when app mounts
//   componentDidMount() {
//     axios.get("https://api.github.com/users/lehmannic")
//       .then(res => {
//         this.setState({
//           user: res.data
//         })
//       })
//   }

//   viewUser
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header container">
//           <h1>GitHub User Card App</h1>
//           <Form />
//         </header>
//         <div className="user-details container">
//           {/* UserList component that renders all users */}
//           <UserDisplay />
//         </div>
//       </div>
//     );
//   }

// }

// export default App;
