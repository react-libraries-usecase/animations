import React, { useState } from 'react';
import './style.css';

const Basic = () => {
  const [infinite, setInfinite] = useState(false);
  const [status, setStatus] = useState('Hide');

  const handleInfiniteChange = e => {
    setInfinite(e.target.checked);
  };

  const handlePause = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <>
      <div
        className={
          'wrapper ' +
          (infinite ? 'infinitePlay' : '') +
          ' ' + status
        }
      >
        <div className="object" />
      </div>
      <label>
        Infinite:
        <input type="checkbox" onChange={handleInfiniteChange} />
      </label>
      <input type="button" value="pause" onClick={handlePause} />
    </>
  );
};

export default Basic;
