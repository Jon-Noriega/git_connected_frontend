import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'

class App extends Component {

  state = {
    user: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
}

  render(){
    return (
      <div className="App">
          <Login user={this.state.user} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
