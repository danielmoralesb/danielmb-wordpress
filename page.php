<?php
get_header();
?>
<div class="container">
    <nav class="hero__nav-wrapper">
        <?php
        $args = array(
            'menu' => 'Hero Platforms Menu',
            'container' => '',
            'items_wrap' => '<ul class="hero__nav">%3$s</ul>'
        );
        wp_nav_menu($args) ?>
    </nav>
    <?php while (have_posts()) {
        the_post() ?>
        <h1><?php the_title() ?></h1>
        <p><?php the_content() ?></p>
    <?php
    }
    ?>
</div>
<?php
get_footer();
?>