import React from 'react';
import posed from 'react-pose';

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

export default () => (
  <Container>
    <h2>About</h2>
    <P>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </P>
    <P>
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </P>
    <P>
      It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged.
    </P>
    <P>
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </P>
  </Container>
);
