import React, { useEffect, useState } from 'react';
import posed from 'react-pose';

const Box = posed.div({
  left: { x: -100 },
  right: { x: 100 }
  // background: 'rgba(161, 0, 246, 1)',
  // boxShadow: '10px 10px 20px rgba(161, 0, 246, 0.2)',
  // transition: { duration: 700 }
});
const Component = ({ position }) => <Box pose={position} />;

const App = () => {
  const [position, setPosition] = useState('left');

  useEffect(() => {
    const setInterval =
      (() => {
        console.log('ssss')
        setPosition(position === 'left' ? 'right' : 'left')
      }, 2000);

    return () => clearInterval(setInterval);
  }, [setPosition]);

  return <Component position={position} />;
};

export default App;
