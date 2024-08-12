<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header class="header ">
        <div class="header__container">
            <div class="header__logo-wrapper">
                <div class="header__logo">
                    <a href="/" class="header__logo-link">
                        <img src="<?php echo get_theme_file_uri('/images/logos/daniel-morales-logo.svg') ?>" alt="Daniel Morales B Logo" class="header__logo-image" />
                        <img src="<?php echo get_theme_file_uri('/images/logos/daniel-morales-logo-gold.svg') ?>" alt="Daniel Morales B Logo" class="header__logo-image-gold" />
                        <span class="sr-only">Home link</span>
                    </a>
                </div>
                <button class="header__toggle">
                    <span class="sr-only">Toggle Nav</span>
                </button>
            </div>
            <nav class="header__nav-wrapper">
                <?php
                $args = array(
                    "theme_location" => 'primary',
                    "container" => '',
                    'items_wrap' => '<ul class="header__nav">%3$s</ul>'
                );
                wp_nav_menu($args) ?>
            </nav>
        </div>
    </header>