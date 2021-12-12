/**
 * 임의의 매서드 적용하는법
 * 매서드의 이름은 사용자가 임의로 정할수 있다.
 *
 * 일반 함수를 사용하게되면 constructor에서 생성을 하고 바인딩을 해야 사용할 수 있지만
 * 화살표 함수를 통해서 바로 생성 후 적용할 수 있다.
 *
 * 이벤트를 작성할때 여러개의 값을 일괄로 처리하기 위해서는 name을 통해서 처리 할 수 있다.
 * 문자열로 처리하네 [e.target.name]
 *
 * state에 사용될 값들을 초기화
 */
import React, { Component } from 'react';

class EventPractive extends Component {
  state = {
    username: '',
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.message);
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
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractive;
