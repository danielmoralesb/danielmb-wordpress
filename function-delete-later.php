<?php

/**
 * DanielMB's functions and definitions
 *
 * @package danielmb
 * @since danielmb 1.0
 */

// Hook into the 'add_meta_boxes' action
add_action('add_meta_boxes', 'hero_add_meta_box');

function hero_add_meta_box()
{
    add_meta_box(
        'hero_meta_box', // ID
        'Hero Details', // Title
        'hero_meta_box_callback', // Callback
        'hero', // Screen (custom post type)
        'normal', // Context
        'high' // Priority
    );
}

//Meta box display callback
function hero_meta_box_callback($post)
{
    // Add a nonce field so we can check for it later.
    wp_nonce_field('hero_save_meta_box_data', 'hero_meta_box_nonce');

    // Retrieve existing values from the database.
    $hero_subtitle = get_post_meta($post->ID, 'hero_subtitle', true);
    $hero_button_text = get_post_meta($post->ID, 'hero_button_text', true);

    // Display the form fields
    echo '<label for="hero_subtitle">Subtitle</label>';
    echo '<input type="text" id="hero_subtitle" name="hero_subtitle" value="' . esc_attr($hero_subtitle) . '" size="25" />';

    echo '<label for="hero_button_text">Button Text</label>';
    echo '<input type="text" id="hero_button_text" name="hero_button_text" value="' . esc_attr($hero_button_text) . '" size="25" />';
}

//Hook into the 'save_post' action to save the meta box data
add_action('save_post', 'hero_save_meta_box_data');

function hero_save_meta_box_data($post_id)
{
    // Check if our nonce is set.
    if (!isset($_POST['hero_meta_box_nonce'])) {
        return;
    }

    // Verify that the nonce is valid.
    if (!wp_verify_nonce($_POST['hero_meta_box_nonce'], 'hero_save_meta_box_data')) {
        return;
    }

    // If this is an autosave, our form has not been submitted, so we don't want to do anything.
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check the user's permissions.
    if (isset($_POST['post_type']) && 'page' == $_POST['post_type']) {
        if (!current_user_can('edit_page', $post_id)) {
            return;
        }
    } else {
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
    }

    // Sanitize and save the data
    if (isset($_POST['hero_subtitle'])) {
        $hero_subtitle = sanitize_text_field($_POST['hero_subtitle']);
        update_post_meta($post_id, 'hero_subtitle', $hero_subtitle);
    }

    if (isset($_POST['hero_button_text'])) {
        $hero_button_text = sanitize_text_field($_POST['hero_button_text']);
        update_post_meta($post_id, 'hero_button_text', $hero_button_text);
    }
}


add_action('init', 'create_hero_post_type');
function create_hero_post_type()
{
    $labels = array(
        'name' => _x('Heroes', 'Post type general name', 'textdomain'),
        'singular_name' => _x('Hero', 'Post type singular name', 'textdomain'),
        'menu_name' => _x('Heroes', 'Admin Menu text', 'textdomain'),
        'name_admin_bar' => _x('Hero', 'Add New on Toolbar', 'textdomain'),
        'add_new' => __('Add New', 'textdomain'),
        'add_new_item' => __('Add New Hero', 'textdomain'),
        'new_item' => __('New Hero', 'textdomain'),
        'edit_item' => __('Edit Hero', 'textdomain'),
        'view_item' => __('View Hero', 'textdomain'),
        'all_items' => __('All Heroes', 'textdomain'),
        'search_items' => __('Search Heroes', 'textdomain'),
        'parent_item_colon' => __('Parent Heroes:', 'textdomain'),
        'not_found' => __('No heroes found.', 'textdomain'),
        'not_found_in_trash' => __('No heroes found in Trash.', 'textdomain'),
        'featured_image' => _x('Hero Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'textdomain'),
        'set_featured_image' => _x('Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'textdomain'),
        'remove_featured_image' => _x('Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'textdomain'),
        'use_featured_image' => _x('Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'textdomain'),
        'archives' => _x('Hero archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'textdomain'),
        'insert_into_item' => _x('Insert into hero', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'textdomain'),
        'uploaded_to_this_item' => _x('Uploaded to this hero', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'textdomain'),
        'filter_items_list' => _x('Filter heroes list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'textdomain'),
        'items_list_navigation' => _x('Heroes list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'textdomain'),
        'items_list' => _x('Heroes list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'textdomain'),
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'hero'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'comments'),
    );

    register_post_type('hero', $args);
}
