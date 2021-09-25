/**
 * JSX는 기존 html과 유사하다.
 * IF문 대신 조건부 연산자를 사용할 수 있다.
 * And 연산자(&&)를 사용하면 참일경우 출력 할 수 있다.
 * OR 연산자(||)를 사용하면 거짓일 경우 출력 할 수 있다.
 * css는 인라인으로도 가능하며 css로 분리해 내서 사용도 가능하다. Class대신 ClassName을 사용한다.
 * rsc는 함수형 컴포넌트 스니펫
 * rcc는 클래스형 컴포넌트 스니펫
 *
 * 배열 비구조화 할당
 * const array = [1, 2];
 * const [one, two] = array;
 *
 * HTML의 DOM에서 유니크한 식별정보인 id를 React에서는 ref를 사용해서 rendering한다.
 * state는 중요한 개념.
 * state로 데이터를 제어함(컴포넌트 내부에서만? 이건 좀 지켜봐야 될듯)
 * 내부에서의 데이터 제어, 부모로부터 가져온 데이터를 제어, 다 다른 객체임
 *
 * ref
 * 1. 콜백 함수를 통한 ref 설정 ex) <input ref={(ref) => {this.input=ref}} /> ---> this.input은 input 요소의 DOM을 가르킴?? this.superman = ref ???
 * 2. createRef를 통한 ref 설정
 */
