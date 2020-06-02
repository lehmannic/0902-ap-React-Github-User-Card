import React from 'react'

class UsernameForm extends React.Component {
  constructor() {
    super(); 
    this.state = {
      username: ""
    }
  }

  handleChanges = e => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault(); 
    this.props.viewUser(this.state.username)
    this.setState({
      username: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.username}
          onChange={this.handleChanges}
        />
        <button>View</button>
      </form>
    )
  }
}

export default UsernameForm; 