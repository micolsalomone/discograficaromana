<script>
  import { base } from "$app/paths";

  const homeHref = `${base}/`;
</script>

<footer id="contatti" class="site-footer">
  <div class="container footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href={homeHref} class="brand-link">
          <img src={`${base}/images/logo.png`} alt="Discografica Romana" class="footer-logo" />
        </a>
        <p class="footer-desc">
          Un collettivo creativo che unisce studi di registrazione, produttori di vinili, artisti indipendenti e realtà culturali.
        </p>
        <div class="socials">
          <a
            href="https://instagram.com/discograficaromana"
            class="social-btn"
            aria-label="Instagram di Discografica Romana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-contact">
        <h3>Contatti</h3>
        <ul class="contact-list">
          <li class="contact-item">
            <!-- map pin -->
            <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor"/></svg>
            <span>Via del Pigneto 40<br/>00176 Roma, Italia</span>
          </li>
          <li class="contact-item">
            <!-- mail icon -->
            <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 8.5v7a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 8l-9 6L3 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <a href="mailto:info@discograficaromana.it" class="link">info@discograficaromana.it</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="copyright">© 2025 Discografica Romana. Tutti i diritti riservati.</p>
    </div>
  </div>
</footer>