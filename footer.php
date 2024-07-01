<footer class="footer">
    <div class="container">
        <a href="/" class="footer__logo-link">
            <img src="<?php echo get_theme_file_uri('/images/logos/daniel-morales-logo.svg') ?>" alt="Daniel Morales B Logo" class="footer__logo-image" />
            <img src="<?php echo get_theme_file_uri('/images/logos/daniel-morales-logo-gold.svg') ?>" alt="Daniel Morales B Logo" class="footer__logo-image-gold" />
            <span class="sr-only">Home link</span>
        </a>
        <nav class="footer__nav-wrapper">
            <ul class="footer__nav">
                <li key={index} class="footer__item">
                    <a href="" # class="footer__link" title="title"><span>page name</span></a>
                </li>
            </ul>
            <ul class="footer__nav footer__nav--platforms">
                <li key={index} class="footer__item">
                    <a href={platform.url} class="btn btn--secondary btn--icon btn--icon--resume-gold" title="platform.name" target="_blank" rel="noreferrer">platform.name</a>
                    <a href={platform.url} class="footer__link" title="platform.name" target="_blank" rel="noreferrer"><span class="sr-only">"platform.name"</span></a>
                </li>
            </ul>
        </nav>
        <div class="footer__copyright-sitemap">
            <p>
                <a href="<?php echo site_url('/privacy-policy') ?>">Privacy Policy</a>
                |
                <a href="/sitemap.xml">Site Map</a>
                |
                <span>Copyright&#169; 2024 Daniel Morales B</span>
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>