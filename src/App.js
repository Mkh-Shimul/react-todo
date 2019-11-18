import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return {
        isLogged: !prevState.isLogged
      };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isLogged ? "Login" : "Logout"}
        </button>
        <p>
          {this.state.isLogged ? "Please Login" : "After work you can logout!!"}
        </p>
      </div>
    );
  }
}

export default App;
