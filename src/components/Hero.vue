<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";

const titleWords = ref(["Developer", "Designer", "Creator"]);
const currentWordIndex = ref(0);

// Rotating text animation
onMounted(() => {
  const interval = setInterval(() => {
    gsap.to(".rotating-word", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        currentWordIndex.value =
          (currentWordIndex.value + 1) % titleWords.value.length;
        gsap.fromTo(
          ".rotating-word",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      },
    });
  }, 3000);

  return () => clearInterval(interval);
});
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="hero-background"></div>
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          Full-Stack
          <span class="rotating-word">{{ titleWords[currentWordIndex] }}</span>
          <span class="highlight-text">Building Digital Experiences</span>
        </h1>
        <p class="hero-subtitle">
          Criação de aplicativos web, funcionais e responsivos que
          proporcionam experiências excepcionais ao usuário
        </p>
        <div class="hero-buttons">
          <a href="#portfolio" class="btn btn-primary">Ver Portfolio</a>
          <a href="#contact" class="btn btn-secondary">Entre em contato</a>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div class="scroll-text">Scroll down</div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  min-height: 700px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 90% 10%,
      var(--primary-light),
      transparent 60%
    ),
    radial-gradient(circle at 20% 80%, var(--secondary-light), transparent 40%);
  opacity: 0.1;
  z-index: -1;
}

.hero-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 80px;
}

.hero-content {
  max-width: 700px;
}

.hero-title {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
}

.rotating-word {
  font-weight: 700;
  color: var(--primary);
  min-height: 4.4rem;
  display: block;
}

.highlight-text {
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-top: 8px;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 540px;
  margin-bottom: 40px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid var(--text-primary);
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 6px;
  height: 6px;
  background: var(--text-primary);
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s ease infinite;
}

.scroll-text {
  margin-top: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

@keyframes scroll {
  0% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .rotating-word {
    min-height: 3.3rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .rotating-word {
    min-height: 2.75rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .scroll-indicator {
    display: none;
  }
}
</style>
