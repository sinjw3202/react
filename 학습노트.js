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
 *
 * Life Cycle 메서드의 이해
 * Life Cycle 메소드의 종류는 총 아홉 가지 입니다. Will 접두사가 붙은 메서드는 어떤 작업을 작동하기 전에 실행되는 메서드이고, Did 접두사가 붙은 메서드는 어떤 작업을 작동한 후에 실행되는 메서드입니다.
 * Life Cycle은 총 세가지, 즉 마운트, 업데이트, 언마운트 카테고리로 나눕니다.
 * 마운트 : 페이지에 컴포넌트가 나타남
 * 언마운트 : 페이지에서 컴포넌트가 사라짐
 * 업데이트 : 컴포넌트 정보를 업데이트
 * 마운트 할때 호출되는 메서드 순서
 * 컴포넌트 만들기 -> contructor -> getDerivedStateFromProps -> render -> componentDidMount
 * constructor : 생성자 / 컴포넌트를 만들때마다 호출되는 클래스 생성자 메서드
 * getDerivedStateFromProps : props에 있는 값을 state에 넣을 때 사용됨
 * render : UI를 렌더링하는 메서드
 * componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
 *
 * 업데이트
 * 컴포넌트는 다음과 같은 총 네가지 경우에 업데이트합니다.
 * 1. props가 바뀔 때
 * 2. state가 바뀔 때
 * 3. 부모 컴포넌트가 리렌더링될 때
 * 4. this.foreceUpdate로 강제로 렌더링을 트리거할 때
 *
 * 업데이트할 때 호출하는 메서드
 * 발생시키는 요인 : props/state변경, 부모 컴포넌트 리렌더링 -> getDerivedStateFromProps -> shouldComponentUpdate(true 반환시 render 호출, false 반환시 여기서 작업 취소)
 * -> render(forceUpdate로도 강제 리렌더링 가능) -> getSnapshotBeforeUpdate(웹 브라우저상의 실제 DOM변화?) -> componentDidUpdate
 *
 * 컴포넌트는 다양한 이유로 업데이트 될 수 있음
 * 1. 부모 컴포넌트에서 넘겨주는 props가 바뀔 때
 * 2. state가 setState를 통해 업데이트 될 때
 * 3. 부모 컴포넌트가 리렌더링 될 때
 * getDerivedStateFromProps : 마운트 과정에서도 호출되며, 업데이트가 시작하기 전에도 호출됩니다. props의 변화에 따라 state값에도 변화를 주고 싶을 때 사용
 * shouldComponentUpdate
 * - 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드 입니다. true가 진행, false가 중단이며 특정 함수에서 this.foreUpdate() 함수 호출시 이과정 생략 후 바로 render 함수 호출
 * - 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설정될 props 또는 state는 nextProps와 nextState로 접근할 수 있음
 * - 반드시 true 또는 false를 반환해야됨 / 기본값은 true
 * render : 리랜더링
 * getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
 * componentDidUpdate : 업데이트 작업이 끝난 후 호출하는 메서드
 *
 * 언마운트는 말 그대로 마운트를 제거하는 과정
 * componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
 *
 * render에서 DOM 접근이나 state에 변화를 줄 수 없고 변화를 주고 싶으면, componentDidMount에서 처리해야됨
 * constuctor은 생성자로써 초기 state를 정할 수 있음 컴포넌트 실행 될 때 1번 실행됨
 *
 * getDerivedStateFromProps는 state와 props의 동기화 메서드
 *
 * componentDidCatch
 * - 렌더링 도중에 에러가 발생 했을 때 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 해준다
 * - 자신에게 발생하는 오류는 잡을 수 없고 부모객체로 전달되는 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있음
 */
