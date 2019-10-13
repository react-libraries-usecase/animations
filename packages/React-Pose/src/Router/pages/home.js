
import React from 'react';
import posed from 'react-pose';
import { Link } from 'react-router-dom';

const ListContainer = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.li({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export default () => (
  <div>
    <h2>Home</h2>
    <ListContainer>
      <Item>
        <Link to="/about">About</Link>
        <p>Some generic description about the about page. About.</p>
      </Item>
      <Item>
        <Link to="/about">About</Link>
        <p>Some generic description about the about page. About.</p>
      </Item>
      <Item>
        <Link to="/about">About</Link>
        <p>Some generic description about the about page. About.</p>
      </Item>
      <Item>
        <Link to="/about">About</Link>
        <p>Some generic description about the about page. About.</p>
      </Item>
    </ListContainer>
  </div>
);
