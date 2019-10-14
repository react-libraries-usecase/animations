import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('GSAP', module)
  .add('Basic', () => {
    const BasicForm = lazy(() => import('./../src/Basic'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  }).add('SVG', () => {
    const BasicForm = lazy(() => import('./../src/Svg'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  }).add('Mouse', () => {
    const BasicForm = lazy(() => import('./../src/Mouse'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  }).add('Timeline', () => {
    const BasicForm = lazy(() => import('./../src/Timeline'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  }).add('Twin', () => {
    const BasicForm = lazy(() => import('./../src/Twin'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
