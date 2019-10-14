import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const App = () => {
  const [contentStatus, displayContent] = useState(false);
  const contentProps = useSpring({
    opacity: contentStatus ? 1 : 0,
    marginTop: contentStatus ? 0 : -1000
  });
  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => displayContent(a => !a)} className="button">
          Toggle Content
        </button>
      </div>
      {!contentStatus ? (
        <div>No Content</div>
      ) : (
        <animated.div className="box" style={contentProps}>
          <h1>This content slid down. Thanks to React Spring</h1>
        </animated.div>
      )}
    </div>
  );
};

export default App;
