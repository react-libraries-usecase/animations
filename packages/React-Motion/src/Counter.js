import React  from 'react';
import {Motion, spring} from 'react-motion';

const Counter = () => {
  return <>
    <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
      {value => <div>{value.x}</div>}
    </Motion>
  </>;
};

export default Counter;
