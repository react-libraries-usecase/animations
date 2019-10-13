import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('React-Motion', module)
  .add('Basic', () => {
    const BasicForm = lazy(() => import('./../src/Basic'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  });;
