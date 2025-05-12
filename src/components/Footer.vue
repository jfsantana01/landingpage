<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-info">
          <div class="footer-logo">Portfolio</div>
          <p class="footer-description">
            Criação de aplicativos web, funcionais e responsivos que
            proporcionam experiências excepcionais ao usuário
          </p>
        </div>

        <div class="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div class="footer-connect">
          <h3>Connect</h3>
          <div class="footer-social">
            <a
              href="https://www.linkedin.com/in/jorge-felix-885892154"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://github.com/jfsantana01" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
              </svg>
            </a>
            <!-- <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                />
              </svg>
            </a> -->
            <!-- <a href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a> -->
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ currentYear }} Portfolio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--surface);
  padding-top: 64px;
  border-top: 1px solid var(--border);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 40px;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.footer-description {
  max-width: 360px;
}

.footer-links h3,
.footer-connect h3 {
  font-size: 1.25rem;
  margin-bottom: 24px;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: var(--text-secondary);
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.footer-social a:hover {
  background-color: var(--primary);
  color: white;
  transform: translateY(-4px);
}

.footer-bottom {
  padding: 24px 0;
  border-top: 1px solid var(--border);
  text-align: center;
}

.copyright {
  color: var(--text-tertiary);
  font-size: 0.875rem;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-info {
    grid-column: span 2;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-info {
    grid-column: span 1;
  }

  .footer-description {
    max-width: 100%;
  }
}
</style>
