import React, { useEffect, useState } from "react";
import posed from 'react-pose';
import data from './data';
import './style.css';

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

const Index = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <h1>Accordion demo</h1>
      {data.map(({ title, content }, i) => (
        <>
          <h2 className="title" onClick={() => setOpen(open === i ? false : i)}>
            {open === i ? '🤯 ' : '🙂 '}
            {title}
          </h2>
          <Content className="content" pose={open === i ? 'open' : 'closed'}>
            <div className="content-wrapper">{content}</div>
          </Content>
        </>
      ))}
    </>
  );
};

export default Index;
