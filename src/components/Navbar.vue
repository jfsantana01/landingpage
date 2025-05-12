<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="container navbar-container">
      <a href="#" class="logo">Portfolio</a>

      <button class="menu-toggle" aria-label="Toggle menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="['nav-links', { active: isMenuOpen }]">
        <ul>
          <li v-for="link in links" :key="link.name">
            <a :href="link.href" @click="closeMenu">{{ link.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const links = [
  { name: "Home", href: "#hero" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Sobre", href: "#about" },
  { name: "Contato", href: "#contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 16px 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background-color: var(--background);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px var(--shadow);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.nav-links ul {
  display: flex;
  list-style: none;
  gap: 32px;
}

.nav-links a {
  color: var(--text-primary);
  font-weight: 500;
  position: relative;
  transition: color 0.2s ease;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary);
}

.nav-links a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
}

.menu-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    z-index: 101;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--background);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .nav-links ul {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .nav-links a {
    font-size: 1.5rem;
  }

  .menu-toggle.active span:first-child {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:last-child {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}
</style>
