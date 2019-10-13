import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

const text = `
~~~js
import React, { useState } from 'react';
import './style.css';

const Basic = () => {
  const [infinite, setInfinite] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handleInfiniteChange = e => {
    setInfinite(e.target.checked);
  };
  const handlePlayingChange = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <div
        className={
          'wrapper ' + (infinite && ' infinitePlay ') + (playing && 'playing')
        }
      >
        <div className="object" />
      </div>
      <label>
        Infinite:
        <input type="checkbox" onChange={handleInfiniteChange} />
      </label>
      <input type="button" value="Play" onChange={handlePlayingChange} />
    </>
  );
};

export default Basic;
~~~
`;
storiesOf('CssTransition', module)
  .add('Basic', () => {
    const Basic = lazy(() => import('./../src/Basic/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Basic />
      </Suspense>
    );
  },{
    info: text
  });
