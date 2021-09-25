// import React from 'react';
import PropTypes from 'prop-types';

// // 비구조화 할당으로 값을 받아와버리면 코드양도 줄어들고 편하다
// // 함수형
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요 부모로부터 전달받았어요 props는 : {name}
//       <br />
//       사이를 비집고 들어와 버린 : {children}
//       <br />
//       내가 제일 좋아하는 숫자는 뭘까요? : {favoriteNumber}
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: '기본값입니다.',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

import React, { Component } from 'react';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, childeren } = this.props;
    return (
      <div>
        안녕하세요, 케케케 : {name} <br />
        childeren : {childeren} <br />
        favoriteNumber : {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;
