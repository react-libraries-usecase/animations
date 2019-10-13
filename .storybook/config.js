import {addDecorator, configure} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../packages', true, /.story.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

addDecorator(withInfo);
configure(loadStories, module);
