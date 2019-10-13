import React, { useEffect, useState } from "react";
import posed, { PoseGroup } from 'react-pose';
import './style.css';

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const ModalComponent = () => {
  const [isVisible, setVisibility] = useState(false);


  useEffect(() => {
    const fn = () => {
      setVisibility(!isVisible);
    };
    window.addEventListener('click',fn);

    return () => window.removeEventListener('click',fn)
  },[isVisible]);


  return (
    <div className={'modalWrapper'}>
      <PoseGroup>
        {isVisible && [
          // If animating more than one child, each needs a `key`
          <Shade key="shade" className="shade" />,
          <Modal key="modal" className="modal" />
        ]}
      </PoseGroup>
    </div>
  );
};

export default ModalComponent;
