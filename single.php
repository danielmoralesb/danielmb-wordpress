<?php
get_header();
?>
<div class="container">
    <?php
    while (have_posts()) {
        the_post(); ?>
        <h3><?php the_title() ?></h3>
        <p><?php the_content() ?></p>
    <?php
    }
    ?>
</div>
<?php
get_footer();
?>