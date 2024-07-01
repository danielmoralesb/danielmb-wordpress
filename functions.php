<?php

function danielmb_files()
{
    wp_enqueue_style('danielmb_styles', get_theme_file_uri('/css/style.css'));
}
add_action('wp_enqueue_scripts', 'danielmb_files');

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
