import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import BasicForm from './../src/Basic';
import AdvancedForm from './../src/Advanced';
import LoginForm from './../src/Login';
import TabbedForms from './../src/Tabbed';
import UploadForm from './../src/Upload';
import WizardForm from './../src/Wizard';

describe('Button', () => {
  test('basic form render correctly', () => {
    const tree = renderer.create(<BasicForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('login form render correctly', () => {
    const tree = renderer.create(<LoginForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('upload form render correctly', () => {
    const tree = renderer.create(<UploadForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('tabbed form render correctly', () => {
    const tree = renderer.create(<TabbedForms />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('advanced form render correctly', () => {
    const tree = renderer.create(<AdvancedForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('wizard form render correctly', () => {
    const tree = renderer.create(<WizardForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
