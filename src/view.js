import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('[id^="react-rooter-"]');
    blocks.forEach((block) => {
        const root = createRoot(block);
        root.render(React.createElement(App));
    });
});
