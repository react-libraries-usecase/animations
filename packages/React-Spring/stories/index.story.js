import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('React-Spring', module)
  .add('Basic', () => {
    const BasicForm = lazy(() => import('./../src/Basic'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
  .add('Trail', () => {
    const BasicForm = lazy(() => import('./../src/Trail/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
  .add('Box', () => {
    const BasicForm = lazy(() => import('./../src/Box'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
  .add('Sortable', () => {
    const BasicForm = lazy(() => import('./../src/Sortable/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })

  .add('Custom Menus', () => {
    const BasicForm = lazy(() => import('./../src/CustomMenus/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })

  .add('Cards', () => {
    const BasicForm = lazy(() => import('./../src/Cards/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
  .add('Items', () => {
    const BasicForm = lazy(() => import('./../src/Items/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
