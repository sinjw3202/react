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
 *
 * 만약 비슷한 사용자 정의 함수가 많다면 어떻게 해야됨?
 * 일괄적으로 처리할 변수를 담고, 그 변수를 또 따로 담아야됨 그런뒤 ...form으로 모든 값을 가져와서 처리함
 */
import React, { useState } from 'react';

const EventPractive = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    console.log(nextForm); //사용되는 객체가 담김
    setForm(nextForm);
  };
  // const onChangeUserName = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if ((e.key = 'Enter')) {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해주세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractive;
