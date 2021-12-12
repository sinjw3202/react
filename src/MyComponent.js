/**
 * props는 properties를 줄인말이며,(읽기전용)
 * 부모객체의 값을 자식객체에서 사용할수 있다.
 * props.객체를 통해서 값을 가져옴 / 객체는 태그의 properties를 통해서 가져옴
 *
 * children은 태그 사이의 값을 가져올때 사용됨
 *
 * propTypes는 형태를 미리 정의해준다.
 * 미리 정의를 해도 출력이 안되는건 아니지만 console을 통해서 해당 내용을 알려준다.
 * 하지만 isRequired를 통해서 해당되는 타입이 아니면 출력을 안할 수 있다.
 *
 */

import React, { Component } from 'react';
import Proptypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
  };

  static propTypes = {
    name: Proptypes.string,
    favoriteNumber: Proptypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

export default MyComponent;
