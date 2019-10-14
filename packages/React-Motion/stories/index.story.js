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
  }).add('Counter', () => {
    const Basic = lazy(() => import('./../src/Counter'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Basic />
      </Suspense>
    );
  }).add('Hello', () => {
    const Basic = lazy(() => import('./../src/Hello'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Basic />
      </Suspense>
    );
  }).add('Cards', () => {
    const Basic = lazy(() => import('./../src/Cards/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Basic />
      </Suspense>
    );
  }).add('Hamburger', () => {
    const Basic = lazy(() => import('./../src/Hamburger/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Basic />
      </Suspense>
    );
  }).add('Progress bar', () => {
    const Basic = lazy(() => import('./../src/ProgressBar/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Basic />
      </Suspense>
    );
  })
