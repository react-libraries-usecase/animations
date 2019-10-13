import React, { useState } from 'react';
import './style.css';

const Index = () => {
  const [status, setStatus] = useState('hide');

  const handleShowHide = e => {
    setStatus(e.target.value);
  };
  const reverseStatus = () => (status === 'show' ? 'hide' : 'show');
  const toggleShowHide = e => {
    setStatus(reverseStatus());
  };

  return (
    <>
      <h2>basic</h2>
      <div className={`wrapper ${status}`}>
        <div className="object" />
      </div>
      <input type="button" value="show" onClick={handleShowHide} />
      <input type="button" value="hide" onClick={handleShowHide} />

      <hr />

      <h2>styled</h2>
      <div className={'nav-menu'}>
        <div onClick={toggleShowHide} style={{ cursor: 'pointer' }}>
          click to {reverseStatus()}
        </div>
      </div>

      <div className={`wrapper menuWrapper ${status}`}>
        <div className={'menu'}>
          <ul>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">faq</a>
            </li>
            <li>
              <a href="">settings</a>
            </li>
            <li>
              <a href="">logout</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <h2>styled , sequenced</h2>

      <div className={'nav-menu'}>
        <div onClick={toggleShowHide} style={{ cursor: 'pointer' }}>
          click to {reverseStatus()}
        </div>
      </div>

      <div className={`wrapper sequenceWrapper ${status}`}>
        <ul>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">faq</a>
          </li>
          <li>
            <a href="">settings</a>
          </li>
          <li>
            <a href="">logout</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Index;
