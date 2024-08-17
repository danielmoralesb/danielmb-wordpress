<?php
/*
Template Name: Hero Template
*/

get_header();
?>

<?php
$heros = new WP_Query(array(
    'posts_per_page' => 1,
    'post_type' => 'hero',
));

if ($heros->have_posts()) :
    while ($heros->have_posts()) : $heros->the_post();
        $hero_subtitle = get_post_meta(get_the_ID(), 'hero_subtitle', true);
        $hero_button_text = get_post_meta(get_the_ID(), 'hero_button_text', true);
?>
        <div class="container">
            <section class="hero">
                <div class="hero__media-wrapper">
                    <div class="hero__inner">
                        <div class="hero__text">
                            <h1><?php the_title(); ?></h1>
                            <h2><?php echo esc_html($hero_subtitle); ?></h2>
                            <p><?php the_content(); ?></p>
                            <button><?php echo esc_html($hero_button_text); ?></button>
                        </div>
                        <div class="hero__image">
                            <?php if (has_post_thumbnail()) {
                                the_post_thumbnail();
                            } ?>
                        </div>
                    </div>
                </div>
            </section>
        </div>
<?php endwhile;
endif;
wp_reset_postdata();
?>

<?php
get_footer();
?>