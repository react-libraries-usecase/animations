import React, { useEffect, useState } from 'react';
import posed from 'react-pose';

const Box = posed.div({
  left: {
    x: -100,
    background: 'rgba(161, 0, 246, 1)',
    boxShadow: '10px 10px 20px rgba(161, 0, 246, 0.2)',
    borderRadius: 0
  },
  right: {
    x: 100,
    background: 'rgb(246,106,98)',
    boxShadow: '10px 10px 20px rgb(246,106,98,0.5)',
    borderRadius: '50%'
  }
});

const Component = ({ position }) => (
  <Box
    style={{ background: '#ccc', height: 100, width: 100 }}
    pose={position}
  />
);

const App = () => {
  const [position, setPosition] = useState('left');

  useEffect(() => {
    const setIntervalD = setInterval(() => {
      setPosition(position === 'left' ? 'right' : 'left');
    }, 2000);

    return () => clearInterval(setIntervalD);
  }, [position]);

  return <Component position={position} />;
};

export default App;
