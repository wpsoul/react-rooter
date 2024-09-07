<?php
// Ensure this file is being accessed through WordPress
if (!defined('ABSPATH')) {
    exit;
}

// Load dependencies from hotapp.asset.php
$asset_file = include(plugin_dir_path(__FILE__) . '../build/hotapp.asset.php');

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <title>React Hot Reload</title>
</head>
<body <?php body_class(); ?>>
    <div id="root"></div>
    <?php
    // Enqueue dependencies
    foreach ($asset_file['dependencies'] as $dependency) {
        wp_enqueue_script($dependency);
    }
    wp_print_scripts();
    ?>
    <script src="<?php echo plugin_dir_url(__FILE__) . '../build/hotapp.js'; ?>"></script>
    <?php wp_footer(); ?>
</body>
</html>