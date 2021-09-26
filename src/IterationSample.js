import React from 'react';
import { useState } from 'react/cjs/react.development';

const IterationSample = () => {
  // const names = ['눈사람', '얼음', '눈', '바람'];
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  // 일반적으로 getter와 setter를 같이 선언함
  const [inputText, setInpustText] = useState(''); // useState에는 초기값을 넣어줌
  const [nextId, setNextId] = useState(names.length + 1); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInpustText(e.target.value);
  const onClick = (e) => {
    const nextNames = names.concat({
      // concat을 통해서 배열을 다시 만듬, push는 기존 배열에 추가
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해준다
    setNames(nextNames); // names 값을 업데이트한다
    setInpustText(''); // inputText룰 비운다. 초기화
  };

  // 삭제기능, filter기능을 이용해서 해당되는 id와 일치하는 element를 제거
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames); // setNames로 제거된 후 데이터 넣어주기
  };

  const namesList = names.map((name) => (
    // onDoubleClick가 먹히지 않음...찾아보고 있음
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  )); // 나머지 값들을 적용하고

  // return에선 모두 적용 후 컴포넌트 작성
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
