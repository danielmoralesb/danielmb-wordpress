<?php
//Header Scripts
function display_headerscripts()
{
?>
    <textarea name="danielmb_header_scripts" id="danielmb_header_scripts" rows="10" cols="50" /><?php echo get_option('danielmb_header_scripts'); ?></textarea>
<?php
}
function display_bodyscripts()
{
?>
    <textarea name="danielmb_body_scripts" id="danielmb_body_scripts" rows="10" cols="50" /><?php echo get_option('danielmb_body_scripts'); ?></textarea>
<?php
}
function display_footerscripts()
{
?>
    <textarea name="danielmb_footer_scripts" id="danielmb_footer_scripts" rows="10" cols="50" /><?php echo get_option('danielmb_footer_scripts'); ?></textarea>
<?php
}


add_settings_section('danielmb_theme_scripts', __('Theme Scripts', 'brandingcup'), null, 'danielmb_options');
//header scripts
register_setting('danielmb_options', 'danielmb_header_scripts');
add_settings_field('danielmb_header_scripts', __('Header Scripts', 'brandingcup'), 'display_headerscripts', 'danielmb_options', 'danielmb_theme_scripts', ['label_for' => 'danielmb_header_scripts']);

//Body scripts
register_setting('danielmb_options', 'danielmb_body_scripts');
add_settings_field('danielmb_body_scripts', __('Body Scripts', 'brandingcup'), 'display_bodyscripts', 'danielmb_options', 'danielmb_theme_scripts', ['label_for' => 'danielmb_body_scripts']);

//Footer scripts
register_setting('danielmb_options', 'danielmb_footer_scripts');
add_settings_field('danielmb_footer_scripts', __('Footer Scripts', 'brandingcup'), 'display_footerscripts', 'danielmb_options', 'danielmb_theme_scripts', ['label_for' => 'danielmb_footer_scripts']);
?>