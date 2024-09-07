<?php
/**
 * Plugin Name:       Greenlight Rooters (React)
 * Description:       Rooters for WordPress
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            wpsoul
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       .
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_react_root_block__block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_react_root_block__block_init' );

// Add hot reload functionality
function add_react_root_hot_reload_page() {
	if (isset($_GET['react-rooter']) && $_GET['react-rooter'] === 'hot') {
		include_once(__DIR__ . '/public/hotreload.php');
		exit;
	}
}
add_action('template_redirect', 'add_react_root_hot_reload_page');
