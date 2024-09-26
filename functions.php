<?php

/**
 * DanielMB's functions and definitions
 *
 * @package danielmb
 * @since danielmb 1.0
 */
function is_blog()
{
    if (is_archive() || is_author() || is_category() || is_singular('post') || is_tag() || is_home()) {
        return true;
    } else {
        return false;
    }
}

if (!function_exists('danielmb_setup')) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which runs
     * before the init hook. The init hook is too late for some features, such as indicating
     * support post thumbnails.
     */
    function danielmb_setup()
    {

        /**
         * Enable support for post thumbnails and featured images.
         */
        add_theme_support('post-thumbnails');

        /**
         * Add support for two custom navigation menus.
         */
        register_nav_menus(array(
            'primary'   => __('Primary Menu', 'danielmb'),
            'footer' => __('Secondary Menu', 'danielmb')
        ));
    }
endif; // danielmb_setup
add_action('after_setup_theme', 'danielmb_setup');

/**
 * Format Main Menu Links
 */
function format_mainmenu_links($items, $args)
{
    if ($args->theme_location == 'primary') {
        $formated_links = str_replace('<a', '<a class="header__link"', $items);
        $formated_links = str_replace('<li', '<li class="header__item"', $formated_links);
        return $formated_links;
    }
    return $items;
}
add_filter('wp_nav_menu_items', 'format_mainmenu_links', 10, 2);


/**
 * Format Footer Menu Links
 */
function format_footermenu_links($items, $args)
{
    if ($args->theme_location == 'footer') {
        $formated_links = str_replace('<a', '<a class="footer__link"', $items);
        $formated_links = str_replace('<li', '<li class="footer__item"', $formated_links);
        return $formated_links;
    }
    return $items;
}
add_filter('wp_nav_menu_items', 'format_footermenu_links', 10, 2);

/**
 * Add Class to Footer Platforms Menu Links
 */
function add_class_to_format_footerplatformsmenu_links($atts, $item, $args)
{
    if ($args->menu == 'Footer Platforms Menu') {
        $atts['class'] = 'footer__link';
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'add_class_to_format_footerplatformsmenu_links', 10, 3);

/**
 * Add Class to Hero Platforms Menu Links
 */
function add_class_to_format_heroplatformsmenu_links($atts, $item, $args)
{
    if ($args->menu == 'Hero Platforms Menu') {
        $atts['class'] = 'hero__link';
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'add_class_to_format_heroplatformsmenu_links', 10, 3);

/*-------------------------------------------*
* Get the custom item menu classes and add them to the anchor element | InCreativeWeb
*------------------------------------------*/

function icw_move_custom_menu_item_class_to_anchor_element($atts, $item, $args, $depth)
{
    $custom_classes = get_post_meta($item->ID, '_menu_item_classes', true);
    if (! empty($custom_classes)) {
        $atts['class']  = empty($atts['class']) ? '' : $atts['class'];
        $atts['class'] .= ' ' . implode(' ', $custom_classes);
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'icw_move_custom_menu_item_class_to_anchor_element', 10, 4);

/*-------------------------------------------*
* Remove the custom classes from the list element | InCreativeWeb
*------------------------------------------*/

function icw_remove_custom_menu_item_class_from_li_element($classes, $item, $args, $depth)
{
    $custom_classes = get_post_meta($item->ID, '_menu_item_classes', true);
    $classes = array_diff($classes, $custom_classes);
    return $classes;
}
add_filter('nav_menu_css_class', 'icw_remove_custom_menu_item_class_from_li_element', 10, 4);

/**
 * Format Footer Platforms Menu Links
 */
function format_footerplatformsmenu_links($items, $args)
{
    if ($args->menu == 'Footer Platforms Menu') {
        $formated_links = str_replace('<li', '<li class="footer__item"', $items);
        return $formated_links;
    }
    return $items;
}
add_filter('wp_nav_menu_items', 'format_footerplatformsmenu_links', 10, 2);

/**
 * Format Hero Platforms Menu Links
 */
function format_heroplatformsmenu_links($items, $args)
{
    if ($args->menu == 'Hero Platforms Menu') {
        $formated_links = str_replace('<li', '<li class="hero__item"', $items);
        return $formated_links;
    }
    return $items;
}
add_filter('wp_nav_menu_items', 'format_heroplatformsmenu_links', 10, 2);

/**
 * Register and Enqueue Styles.
 */
function danielmb_register_styles()
{
    $theme_version = wp_get_theme()->get('Version');

    wp_enqueue_style('danielmb_styles', get_template_directory_uri() . '/css/style.css');
    wp_enqueue_style('danielmb-styles', get_stylesheet_uri(), array(), $theme_version);
}
add_action('wp_enqueue_scripts', 'danielmb_register_styles');

/**
 * Add Editor Styles.
 */
function danielmb_add_editor_styles()
{
    wp_enqueue_style('danielmb_styles', get_template_directory_uri() . '/css/style.css');
}
add_action('enqueue_block_editor_assets', 'danielmb_add_editor_styles');

/**
 * Register and Enqueue Scripts.
 */
function danielmb_register_scripts()
{
    $theme_version = wp_get_theme()->get('Version');

    wp_enqueue_script('danielmb-js', get_template_directory_uri() . '/scripts/scripts.js', array(), $theme_version, true);
}
add_action('wp_enqueue_scripts', 'danielmb_register_scripts');

function danielmb_settings_init()
{
    include(locate_template('danielmb-setup/header-options.php'));
}

function danielmb_features()
{
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'danielmb_features');

function danielmb_custom_post_type()
{
    register_post_type('project', array(
        'public' => true,

    ));
}
add_action('init', 'danielmb_custom_post_type');

/**
 * Allow SVG
 */
add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {

    global $wp_version;
    if ($wp_version !== '4.7.1') {
        return $data;
    }

    $filetype = wp_check_filetype($filename, $mimes);

    return [
        'ext'             => $filetype['ext'],
        'type'            => $filetype['type'],
        'proper_filename' => $data['proper_filename']
    ];
}, 10, 4);

/**
 * Registration of Hero Block
 */
function hero_block_register_block()
{
    // Register the editor style
    wp_register_style("hero-block-editor", get_template_directory_uri() . "/css/editor.css", array(), filemtime(get_template_directory() . '/css/editor.css'));

    // Register the editor script
    wp_register_script("hero-block-editor", get_template_directory_uri() . "/build/index.js", array("wp-blocks", "wp-editor", "wp-components"));

    // Register the block type and associate the scripts and styles
    register_block_type("hero-block/hero-block", array(
        'editor_script' => 'hero-block-editor',
        'editor_style' => 'hero-block-editor',
        'style' => 'hero-block',
    ));
}
add_action('init', 'hero_block_register_block');


/**
 * Registration of Intro Block
 */

function intro_block_register_block()
{
    // Register the editor style
    wp_register_style("intro-block-editor", get_template_directory_uri() . "/css/editor.css", array(), filemtime(get_template_directory() . '/css/editor.css'));

    // Register the editor script
    wp_register_script("intro-block-editor", get_template_directory_uri() . "/build/index.js", array("wp-blocks", "wp-editor", "wp-components"));

    // Register the block type and associate the scripts and styles
    register_block_type("intro-block/intro-block", array(
        'editor_script' => 'intro-block-editor',
        'editor_style' => 'intro-block-editor',
        'style' => 'intro-block',
    ));
}

add_action('init', 'intro_block_register_block');

/**
 * Registration of Tiles Block
 */
function tiles_block_register_block()
{
    // Register the editor style
    wp_register_style("tiles-block-editor", get_template_directory_uri() . "/css/editor.css", array(), filemtime(get_template_directory() . '/css/editor.css'));

    // Register the editor script
    wp_register_script("tiles-block-editor", get_template_directory_uri() . "/build/index.js", array("wp-blocks", "wp-editor", "wp-components"));

    // Register the block type and associate the scripts and styles
    register_block_type("tiles-block/tiles-block", array(
        'editor_script' => 'tiles-block-editor',
        'editor_style' => 'tiles-block-editor',
        'style' => 'tiles-block',
    ));
}
add_action('init', 'tiles_block_register_block');
