<?php
function allegra_theme_scripts() {
    wp_enqueue_style( 'allegra-upload-cf7', get_template_directory_uri() . 'css/allegra-upload-cf7.css' );
    wp_enqueue_script( 'allegra-upload-js', get_template_directory_uri() . '/js/allegra-uploader-min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'allegra-upload-custom-js', get_template_directory_uri() . '/js/allegra-upload-cf7.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'allegra_theme_scripts' );


include ('inc/allegra-upload-cf7.php');