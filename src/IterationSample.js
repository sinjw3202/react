/**
 * map()함수
 * 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성
 * arr.map(callback, [thisArg])
 * callback : 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세가지
 *  currentValue : 현재 처리하고 있는 요소
 *  index : 현재 처리하고 있는 요소의 index값
 *  array : 현재 처리하고 있는 원본 배열
 * thisArg(선택항목) : callback 함수 내부에서 사용할 this 레퍼런스
 *
 * key값은 고유해야된다.
 */
import React from 'react';
import { useState } from 'react/cjs/react.development';

const IterationSample = () => {
  // 화면에 출력될 초기 데이터 세팅
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
