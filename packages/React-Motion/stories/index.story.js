import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';
import Basic from "../src/Basic";

storiesOf('React-Motion', module)
  .add('Basic', () => {
    const Basic = lazy(() => import('./../src/Basic'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Basic />
      </Suspense>
    );
  })
