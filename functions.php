<?php

function danielmb_files()
{
    wp_enqueue_style('danielmb_styles', get_theme_file_uri('/css/style.css'));
    // wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    // wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Roboto:300,400,500,700&display=swap');
    // wp_enqueue_script('fictional_university_main_js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0 ', true);
}
add_action('wp_enqueue_scripts', 'danielmb_files');

function danielmb_features()
{
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'danielmb_features');
