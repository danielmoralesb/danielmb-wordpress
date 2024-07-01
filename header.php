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
                <ul class="header__nav">
                    <li class="header__item">
                        <a href="<?php echo site_url('/about-us') ?>" class="header__link" title="About Us">
                            <span>About</span>
                        </a>
                    </li>
                    <li <?php if (get_post_type() == 'post') echo 'class=""'  ?>>
                        <a href="<?php echo site_url('/blog') ?>" class="header__link" title="About Us">
                            <span>Posts</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- <nav class="main-navigation">
                <ul>
                    <li <?php if (is_page('about-us') or wp_get_post_parent_id(0) == '13') echo 'class="current-menu-item"' ?>><a href="<?php echo site_url('/about-us') ?>">About Us</a></li>
                    <li><a href="#">Programs</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Campuses</a></li>
                    <li <?php if (get_post_type() == 'post') echo 'class="current-menu-item"' ?>><a href="<?php echo site_url('/blog') ?>">Blog</a></li>
                </ul>
            </nav> -->
        </div>
    </header>