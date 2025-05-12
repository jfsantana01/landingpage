<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Portfolio from '../components/Portfolio.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isLoaded = ref(false)

onMounted(() => {
  // Initial animation sequence
  const tl = gsap.timeline({
    onComplete: () => {
      isLoaded.value = true
      initScrollAnimations()
    }
  })
  
  tl.to('.loading-overlay', {
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    ease: 'power2.out'
  })
  .from('.hero-content', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.2')
})

const initScrollAnimations = () => {
  // Animate sections on scroll
  gsap.utils.toArray('.animate-section').forEach((section: any) => {
    gsap.from(section, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.5
      }
    })
  })
  
  // Portfolio items staggered animation
  gsap.from('.portfolio-item', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.portfolio-section',
      start: 'top 70%'
    }
  })
}
</script>

<template>
  <div>
    <div class="loading-overlay"></div>
    <Navbar />
    <Hero />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background);
  z-index: 9999;
  pointer-events: none;
}
</style>