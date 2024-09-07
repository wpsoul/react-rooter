===  ===
Contributors:      The WordPress Contributors
Tags:              block
Tested up to:      6.6
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

React Router for WordPress

== Description ==

Plugin that allows you to use React applications directly in your WordPress frontend and backend

== Installation ==

e.g.

1. Upload the plugin files to the `/wp-content/plugins/.` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= How to use plugin =

We recommend to use it on local development first and then build application. Open src folder and App.js. This is your entry point of application. Use here any React or Wordpress React code. If you want to add styles only for frontend, use editor.scss file. For both frontend and backend, use style.scss. You can use commands:

npm run build - to build application
npm run start - to start development server
npm run hot-start - to start hot reload server. This will open local host with application and will watch for changes. If you will find that it doesn't work, change gulpfile.js and set correct url of your local wordpress site in siteUrl variable. Also try to remove port option.

= How to add React app on page =

Just open editor and add React Router block. This will render React application on page.

== Changelog ==

= 0.1.0 =
* Release
