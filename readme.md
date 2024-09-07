# React Router for WordPress

React Router for WordPress is a plugin that allows you to use React applications directly in your WordPress frontend and backend.

## Description

This plugin enables seamless integration of React applications within your WordPress environment, providing flexibility for both frontend and backend development.

## Installation

1. Upload the plugin files to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.

## Usage

We recommend using this plugin in a local development environment first before building your application for production.

1. Open the `src` folder and locate `App.js`. This is the entry point of your application.
2. Use any React or WordPress React code in this file.
3. For frontend-only styles, use the `editor.scss` file.
4. For styles that apply to both frontend and backend, use `style.scss`.

### Available Commands

- `npm run build`: Build the application
- `npm run start`: Start the development server
- `npm run hot-start`: Start the hot reload server. This will open a localhost with your application and watch for changes.

**Note:** If hot-start doesn't work, modify `gulpfile.js` and set the correct URL of your local WordPress site in the `siteUrl` variable. You may also need to remove the port option.

### Adding React App to a Page

Simply open the WordPress editor and add the React Router block. This will render your React application on the page.

## Frequently Asked Questions

**Q: How do I add a React app to a page?**
A: Open the WordPress editor and add the React Router block. This will render your React application on the page.

## Changelog

### 0.1.0
- Initial release

## Meta

- Contributors: The WordPress Contributors
- Tags: block
- Tested up to: 6.6
- Stable tag: 0.1.0
- License: GPL-2.0-or-later
- License URI: https://www.gnu.org/licenses/gpl-2.0.html