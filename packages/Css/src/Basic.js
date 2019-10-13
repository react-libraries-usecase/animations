import React, { useState } from 'react';
import './style.css';

const Basic = () => {
  const [status, setStatus] = useState('Hide');

  const handleShowHide = e => {
    setStatus(e.target.value);
  };

  return (
    <>
      <div className={`wrapper ${status}`}>
        <div className="object" />
      </div>
      <input type="button" value="show" onClick={handleShowHide} />
      <input type="button" value="hide" onClick={handleShowHide} />
    </>
  );
};

export default Basic;
