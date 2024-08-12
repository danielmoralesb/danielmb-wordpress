<?php
get_header();
?>


<?php
$homepageHeros = new WP_Query(array(
    'posts_per_page' => 1,
    'post_type' => 'hero',
    'tax_query' => array(
        array(
            'taxonomy' => 'category',
            'field' => 'slug',
            'terms' => 'home'
        )
    )
));
// $imgurl = wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'thumbnail');
// $imgurl = wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'thumbnail');
// $images = $document->getElementsByTagName('img');

while ($homepageHeros->have_posts()) {
    $homepageHeros->the_post(); ?>
    <div class="container">
        <section class="hero">
            <div class="hero__media-wrapper">
                <div class="hero__inner">
                    <div class="hero__text">
                        <h1><?php the_title(); ?></h1>
                        <!-- <h1><span class="block--xs">Daniel</span> <span class="block--xs">Morales</span></h1> -->
                    </div>
                    <div class="hero__image">
                        <!-- <?php echo wp_get_attachment_image($attachment->ID, 'large'); ?> -->
                        <!-- <img src="/static/media/hero-daniel@2x.025fbcd229e8f39cff33.png" class="hero-home" alt="Daniel Morales" title="Daniel Morales"> -->
                    </div>
                </div>
                <div class="hero__description">
                    <?php echo get_the_content() ?>
                    <?php echo get_the_date() ?>
                </div>
            </div>
        </section>
    </div>
    <div class="event-summary">
        <!-- <a class="event-summary__date t-center" href="<?php the_permalink(); ?>">
            <span class="event-summary__month"><?php the_time('M'); ?></span>
            <span class="event-summary__day"><?php the_time('d'); ?></span>
        </a> -->

    </div>
<?php
} ?>
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
</div>

<?php
get_footer();
?>