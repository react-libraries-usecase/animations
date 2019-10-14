import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class App extends Component {
  state = {
    left: 0
  };

  handleClick = val => {
    if (val && !isNaN(val)) {
      this.setState({
        left: +val
      });
    }
  };

  reset = () => this.setState({ left: 0 });

  render() {
    return (
      <React.Fragment>
        <Motion
          defaultStyle={{ left: -100 }}
          style={{ left: spring(this.state.left) }}
        >
          {val => (
            <h1 style={{ position: 'absolute', ...val }}>
              Hello!{' '}
              <span role="img" aria-label="Hand wave">
                👋
              </span>
            </h1>
          )}
        </Motion>

        <input
          type="number"
          placeholder="enter a value"
          ref={input => (this.input = input)}
        />
        <button onClick={() => this.handleClick(this.input.value)}>Set</button>
        <button onClick={this.reset}>Reset</button>
      </React.Fragment>
    );
  }
}

export default App;
