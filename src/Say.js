/**
 * useState의 함수의 인자에는 상태의 초깃값을 넣어줍니다.
 * 함수 호출 후 배열로 반환되는데 첫번째 배열값은 현재 상태이고, 두번째 배열값은 상태를 바꾸어 주는 함수 입니다.
 *
 * state를 통해서 값을 주입하려고 할때 setter를 통해서 값을 넣어야되며 직접적으로 값을 입력하면 안된다.
 */

import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        녹색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
