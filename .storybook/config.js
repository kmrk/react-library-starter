import { addParameters, configure } from '@storybook/react';

addParameters({
  options: {
    name: 'react-library-starter'
  }
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
