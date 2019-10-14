import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import Card from './Card';

const cardsInfo = [
  {
    title: 'Hey ho !',
    content: 'I am coming boy'
  },
  {
    title: 'Fancy',
    content: 'Nothing to say !'
  }
];

const AnimatedCard = props => {
  return (
    <Motion
      defaultStyle={{ scale: 0.5 }}
      style={{ scale: spring(1, { stiffness: 60, damping: 10 }) }}
    >
      {interpolatedStyle => <Card scale={interpolatedStyle.scale} {...props} />}
    </Motion>
  );
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {
          cardsInfo.map(card => <AnimatedCard key={card.title} {...card} />)
        }
      </React.Fragment>
    );
  }
}

export default App;
