import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';

import styled from "styled-components";

const AnimatedDiv = styled.div`
  width: 100px;
  color: white;
  margin: 40px;
  height: 100px;
  background-color: black;
  border-radius: 4px;
`;

const animations = [
  {
    name: 'slideIn',
    defaultStyle: { translateX: 200 },
    style: config => ({ translateX: spring(0, config) }),
    render: value => ({ transform: `translateX(${value.translateX}px)` })
  },
  {
    name: 'flipX',
    defaultStyle: { rotateX: 200 },
    style: config => ({ rotateX: spring(0, config) }),
    render: value => ({ transform: `rotateX(${value.rotateX}deg)` })
  },
  {
    name: 'flipY',
    defaultStyle: { rotateY: 200 },
    style: config => ({ rotateY: spring(0, config) }),
    render: value => ({ transform: `rotateY(${value.rotateY}deg)` })
  },
  {
    name: 'zoomIn',
    defaultStyle: { scale: 0 },
    style: config => ({ scale: spring(1, config) }),
    render: value => ({
      transform: `scale3d(${value.scale},${value.scale},${value.scale})`
    })
  },

  {
    name: 'zoomOut',
    defaultStyle: { scale: 1 },
    style: config => ({ scale: spring(0, config) }),
    render: value => ({
      transform: `scale3d(${value.scale},${value.scale},${value.scale})`,
      opacity: value.scale
    })
  },
  {
    name: 'fadeIn',
    defaultStyle: { opacity: 0 },
    style: config => ({ opacity: spring(1, config) }),
    render: value => ({ opacity: value.opacity })
  }
];

const App = () => {
  // const [visible, setVisible] = useState(false);
  const [stiffness, setStiffness] = useState(170);
  const [damping, setDamping] = useState(20);
  const [animation, setAnimation] = useState(0);

  const changeStiffness = ev => {
    const value = ev.target.value;
    setStiffness(value);
  };

  const changeDamping = ev => {
    const value = ev.target.value;
    setDamping(value);
  };

  const animationChange = ev => {
    const value = ev.target.value;
    setAnimation(value);
  };

  const usedAnimation = animations[animation];
  return (
    <div id="App">
      <div>
        Stiffness:
        <input
          type="range"
          max="400"
          min="10"
          value={stiffness}
          onChange={changeStiffness}
        />{' '}
        {stiffness}
      </div>
      <div>
        Damping
        <input
          type="range"
          value={damping}
          max="100"
          min="0"
          onChange={changeDamping}
        />{' '}
        {damping}
      </div>
      <select onChange={animationChange}>
        {animations.map((an, index) => (
          <option value={index} key={an.name}>
            {an.name}
          </option>
        ))}
      </select>
      <div key={usedAnimation.name}>
        <Motion
          key={usedAnimation.name}
          defaultStyle={usedAnimation.defaultStyle}
          style={usedAnimation.style({stiffness,damping,animation})}
        >
          {value => (
            <div>
              <AnimatedDiv style={usedAnimation.render(value)} />
            </div>
          )}
        </Motion>
      </div>
    </div>
  );
};

export default App;
