import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

// import notes
import BasicNote from './../notes/Basic';

storiesOf('CssTransition', module)
  .add('Basic', () => {
    const Basic = lazy(() => import('./../src/Basic/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Basic />
      </Suspense>
    );
  },{
    notes: BasicNote ,
  });
