import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('React-transition-group', module)
  .add('Router', () => {
    const BasicForm = lazy(() => import('./../src/Router/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
