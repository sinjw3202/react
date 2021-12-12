/**
 * 리액트에서 state는 바뀔 수 있는 값을 의미합니다.
 * class형 컴포넌트 state
 * function형 컴포넌트는 useState
 *
 * super 함수를 호출하면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해 줍니다.
 * 컴포넌트의 state는 객체 형식이어야 합니다.
 *
 * this.setState를 사용하여 state 값을 업데이트 할 때는 상태가 비동기적으로 업데이트 됩니다.
 * 값을 중복으로 입력을 해야되면 this.setStatue(prevState => {return})에서 "prevState"을 통해서 적용할 수 있다.
 */
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값: {fixedNumber}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState(
              (prevState) => {
                return { number: prevState.number + 1 };
              },
              () => {
                //여기는 setState가 끝난 후 작동되는 코드를 입력해주세요.
              }
            );
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
