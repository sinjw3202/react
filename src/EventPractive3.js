import React, { Component } from 'react';

/**
 * Enter를 누르면 전송 이벤트
 */
class EventPractive3 extends Component {
  state = {
    username: '',
    message: '',
  };
  handleChange = (e) => {
    // e.target.name 태그의 name
    // e.target.value 변수의 값
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    console.log(this.state);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="유저이름"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="메세지"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractive3;
