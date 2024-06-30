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
                    <li key={index} class={`header__item ${isActive(nav.url)}`}>
                        <a href={nav.url} class="header__link" title={nav.name}>
                            <span>{nav.name}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <header class="site-header">
        <div class="container">
            <h1 class="school-logo-text float-left">
                <a href="<?php echo site_url('/') ?>"><strong>Fictional</strong> University</a>
            </h1>
            <span class="js-search-trigger site-header__search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
            <i class="site-header__menu-trigger fa fa-bars" aria-hidden="true"></i>
            <div class="site-header__menu group">
                <nav class="main-navigation">
                    <!-- <?php
                            wp_nav_menu(array(
                                'theme_location' => 'headerMenuLocation'
                            ));
                            ?> -->
                    <ul>
                        <li <?php if (is_page('about-us') or wp_get_post_parent_id(0) == '13') echo 'class="current-menu-item"' ?>><a href="<?php echo site_url('/about-us') ?>">About Us</a></li>
                        <li><a href="#">Programs</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Campuses</a></li>
                        <li <?php if (get_post_type() == 'post') echo 'class="current-menu-item"' ?>><a href="<?php echo site_url('/blog') ?>">Blog</a></li>
                    </ul>
                </nav>
                <div class="site-header__util">
                    <a href="#" class="btn btn--small btn--orange float-left push-right">Login</a>
                    <a href="#" class="btn btn--small btn--dark-orange float-left">Sign Up</a>
                    <span class="search-trigger js-search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
                </div>
            </div>
        </div>
    </header>