<footer class="footer">
    <div class="container">
        <a href="/" class="footer__logo-link">
            <img src="<?php echo get_theme_file_uri('/images/logos/daniel-morales-logo.svg') ?>" alt="Daniel Morales B Logo" class="footer__logo-image" />
            <img src="<?php echo get_theme_file_uri('/images/logos/daniel-morales-logo-gold.svg') ?>" alt="Daniel Morales B Logo" class="footer__logo-image-gold" />
            <span class="sr-only">Home link</span>
        </a>
        <nav class="footer__nav-wrapper">
            <?php $args = array(
                "theme_location" => 'footer',
                "container" => '',
                'items_wrap' => '<ul class="footer__nav ">%3$s</ul>'
            );
            wp_nav_menu($args); ?>
            <?php
            $args = array(
                'menu' => 'Footer Platforms Menu',
                'container' => '',
                'items_wrap' => '<ul class="footer__nav footer__nav--platforms">%3$s</ul>',
                'menu_class' => 'custom-menu-class' // Add your custom class here
            );
            wp_nav_menu($args);
            ?>
        </nav>
    </div>

    <div class="footer__copyright-sitemap">
        <p>
            <a href="<?php echo site_url('/privacy-policy') ?>">Privacy Policy</a>
            |
            <span>&copy; <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?>. <?php echo __('All Rights Reserved.', 'redirectmedia'); ?></span>
        </p>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>