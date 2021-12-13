/**
 * ref : reference
 * 클래스형 컴포넌트에서 ref 사용하기 ref를 사용하기 위해서는 Hooks를 사용해야 한다.
 * validationSample 컴포넌트 만들기 > input에 ref 달기 > 버튼을 누를 때마다 input에 포커스 주기
 *
 * DOM의 특정한 엘리먼트에 접근하기 위해서 사용됨
 * 다른 컴포넌트에 있는 엘리먼트에 접근? 부모객체에 접근?
 *
 * DOM을 꼭 사용해야 하는 상황
 * 특정 input에 포커스 주기
 * 스크롤 박스 조작하기
 * Canvas 요소에 그림 그리기 등
 *
 * <input ref={(ref) => {this.input = ref}} /> 이렇게하면 this.input은 input 요소의 DOM을 가리킵니다.
 *
 * 컴포넌트에 ref달기
 * 이 방법은 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 사용
 */
import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  input = React.createRef();
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButton = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.current.focus(); // 현재 input에 커서를 포커스한다.
  };

  render() {
    return (
      <div>
        <input
          ref={this.input}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButton}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
