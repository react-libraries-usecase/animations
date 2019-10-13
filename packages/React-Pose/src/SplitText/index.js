import React from 'react';
import SplitText from 'react-pose-text';
import './styles.css';

// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

const SplitText = () => {
  return (
    <div className="container">
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        React Pose Text
      </SplitText>
    </div>
  );
};

export default SplitText;
