<template>
  <section id="portfolio" class="section portfolio-section animate-section">
    <div class="container">
      <h2 class="section-title">Projetos em destaque</h2>
      <p class="section-subtitle">
        Uma seleção do meu trabalho profissional em desenvolvimento e design web
      </p>

      <div class="portfolio-grid">
        <div
          v-for="item in portfolioItems"
          :key="item.id"
          class="portfolio-item"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: item.id * 150 },
          }"
        >
          <div class="portfolio-card">
            <div class="portfolio-image">
              <img :src="item.image" :alt="item.title" />
              <div class="portfolio-overlay">
                <a
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                  >Ver Projeto</a
                >
              </div>
            </div>
            <div class="portfolio-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="portfolio-tags">
                <span v-for="(tag, index) in item.tags" :key="index">{{
                  tag
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

const portfolioItems = ref([
  {
    id: 2,
    title: "Delicias GE",
    description:
      "Uma plataforma completa para controle de pagamentos de produtos alimentícios gourmet e vitrine digital.",
    image: "https://images.pexels.com/photos/271458/pexels-photo-271458.jpeg",
    url: "https://deliciasge.com.br/",
    tags: ["payment-management", "Food", "Responsive"],
  },
  {
    id: 3,
    title: "OneAgile",
    description:
      "Site corporativo da OneAgile, apresentando serviços e experiência em metodologias ágeis.",
    image:
      "https://images.pexels.com/photos/6804091/pexels-photo-6804091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://oneagile.com.br/",
    tags: ["Corporate", "Services", "Branding"],
  },
  {
    id: 1,
    title: "My OneAgile",
    description:
      "Uma plataforma moderna para o gerenciamento ágil de treinamentos e a colaboração eficiente entre equipes.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    url: "https://my.oneagile.com.br/",
    tags: ["Vue.js", "Agile", "Dashboard"],
  },
]);
</script>

<style scoped>
.portfolio-section {
  background-color: var(--surface);
}

.section-title {
  text-align: center;
  margin-bottom: 16px;
}

.section-subtitle {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
}

.portfolio-card {
  background-color: var(--card);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px var(--shadow);
}

.portfolio-image {
  position: relative;
  overflow: hidden;
  height: 240px;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-card:hover .portfolio-image img {
  transform: scale(1.05);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-content {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.portfolio-content h3 {
  margin-bottom: 12px;
  font-size: 1.25rem;
}

.portfolio-content p {
  margin-bottom: 16px;
  flex-grow: 1;
}

.portfolio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.portfolio-tags span {
  background-color: var(--surface);
  color: var(--text-secondary);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
