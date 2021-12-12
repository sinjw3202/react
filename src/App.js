import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <MyComponent name="신재우" favoriteNumber={3}>
        리액트
      </MyComponent>
    );
  }
}

export default App;
