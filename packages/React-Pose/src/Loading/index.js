import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import shuffle from './shuffle';
import './style.css';

const Item = posed.li({
  // You can make a custom transition for the flip-powered
  // shuffling animation by overriding `flip`. You can even
  // add other properties to animate while the flip animation
  // is in progress. Uncomment the following code to try it out!
  flip: {
    scale: 1,
    transition: {
      scale: {
        type: 'spring',
        velocity: 10
      },
      default: {
        type: 'spring'
      }
    }
  }
});

class Example extends React.Component {
  state = { items: [0, 1, 2, 3, 4, 5, 6, 7,8] };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        items: shuffle(this.state.items)
      });
    }, 1000);
  }

  render() {
    const { items } = this.state;

    return (
      <ul>
        <PoseGroup>{items.map(id => <Item key={id} />)}</PoseGroup>
      </ul>
    );
  }
}

export default Example;