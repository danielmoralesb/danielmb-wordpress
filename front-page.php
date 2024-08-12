<?php
get_header();
?>


<?php
$homepageHeros = new WP_Query(array(
    'posts_per_page' => 1,
    'post_type' => 'hero',
    //'post_title' => 'Daniel Morales'
    // 'tax_query' => array(
    //     array(
    //         'taxonomy' => 'category',
    //         'field' => 'slug',
    //         'terms' => 'home',
    //         'post_title' => 'Daniel Morales'
    //     )
    // )
));
// $imgurl = wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'thumbnail');
// $imgurl = wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'thumbnail');
// $images = $document->getElementsByTagName('img');

while ($homepageHeros->have_posts()) {
    $homepageHeros->the_post(); ?>
    <!-- <h1><?php echo get_post_meta($post->ID, 'post_title', true); ?></h1> -->

    <div class="container">
        <?php echo get_template_part('core/paragraph'); ?>
        <section class="hero">
            <div class="hero__media-wrapper">
                <div class="hero__inner">
                    <div class="hero__text">
                        <!-- <h1><?php the_title(); ?></h1> -->
                        <!-- <h1><span class="block--xs">Daniel</span> <span class="block--xs">Morales</span></h1> -->
                    </div>
                    <div class="hero__image">
                        <!-- <?php echo wp_get_attachment_image($attachment->ID, 'large'); ?> -->
                        <!-- <img src="/static/media/hero-daniel@2x.025fbcd229e8f39cff33.png" class="hero-home" alt="Daniel Morales" title="Daniel Morales"> -->
                    </div>
                </div>
                <div class="hero__description">
                    <?php echo get_the_content() ?>
                    <!-- <?php echo get_the_date() ?> -->
                </div>
            </div>
            <nav class="hero__nav-wrapper">
                <?php
                $args = array(
                    'menu' => 'Hero Platforms Menu',
                    'container' => '',
                    'items_wrap' => '<ul class="hero__nav">%3$s</ul>'
                );
                wp_nav_menu($args) ?>
            </nav>
        </section>
    </div>
<?php
} ?>

<?php
get_footer();
?>