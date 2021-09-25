import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
// import ValidationSample from './ValidationSample';
// import EventPractive4 from './EventPractive4';
// import EventPractive2 from './EventPractive2';
// import EventPractive from './EventPractive';
// import Say from './Say';
// import Counter from './Counter';
// import MyComponent from './MyComponent';

class App extends Component {
  render() {
    // const name = 'react';
    // const favoriteNumber = 20;
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.ScrollBox = ref;
          }}
        />
        <button
          onClick={() => {
            this.ScrollBox.scrollToBottom();
          }}
        >
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
