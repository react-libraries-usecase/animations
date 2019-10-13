import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';
import Morphing from "../src/Morphing";
import Article from "../src/ZoomImage";

storiesOf('React-Pose', module)
  .add('Basic', () => {
    const Basic = lazy(() => import('./../src/Basic'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Basic />
      </Suspense>
    );
  })
  .add('Accordion', () => {
    const Accordion = lazy(() => import('./../src/Accordion/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Accordion />
      </Suspense>
    );
  })
  .add('Modal', () => {
    const Modal = lazy(() => import('./../src/Modal/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Modal />
      </Suspense>
    );
  })
  .add('Hover', () => {
    const Hover = lazy(() => import('./../src/Hover/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Hover />
      </Suspense>
    );
  })
  .add('Morphing', () => {
    const Morphing = lazy(() => import('./../src/Morphing/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Morphing />
      </Suspense>
    );
  })
  .add('Router', () => {
    const Router = lazy(() => import('./../src/Router/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
    );
  })

  .add('Zoomable Image', () => {
    const Article = lazy(() => import('./../src/ZoomImage/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Article />
      </Suspense>
    );
  })

  .add('Loading', () => {
    const Loading = lazy(() => import('./../src/Loading/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Loading />
      </Suspense>
    );
  })
