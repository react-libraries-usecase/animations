import React from 'react';
import { Tween, Timeline } from 'react-gsap';


const Basic = () => (
  <>
    <Tween from={{ x: '100px', rotation: -360 }}>
      <div>This element gets tweened</div>
    </Tween>
    <Timeline
      target={
        <div>Target element which will be visible and gets tweened</div>
      }
    >
      <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
      <Tween to={{ x: '50px' }} />
    </Timeline>
    </>
);

export default Basic;
