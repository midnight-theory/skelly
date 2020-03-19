import {
    addParameters,
    configure
} from '@storybook/react';
import {
    DocsPage,
    DocsContainer
} from '@storybook/addon-docs/blocks';
import {
    InitAll
} from '../src';

// Configure Storybook options
addParameters({
    options: {
        showRoots: true,
        panelPosition: 'right'
    },
    docs: {
        container: DocsContainer,
        page: DocsPage,
    }
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/docs/', true, /\.stories\.mdx$/), module);
configure(require.context('../src/components/', true, /\.stories\.mdx$/), module);

// Intervally invoke initiate function
// reason the actual DOM can't be target initially
// due to html issue in Storybook
setInterval(() => {
    InitAll();
}, 1000);