<template>
  <section id="about" class="section about-section animate-section">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <h2>Sobre Mim</h2>
          <p class="lead">
            Sou um desenvolvedor full-stack apaixonado por criar experiências
            web intuitivas e envolventes.
          </p>
          <p>
            Com expertise em metodologias ágeis e tecnologias web modernas, sou
            especialista em desenvolver aplicações responsivas que solucionam
            problemas reais de negócios. Ampla experiência com bancos de dados
            relacionais (MySQL, PostgreSQL). Conhecimento em metodologias ágeis
            (Scrum, Kanban) para gerenciamento de projetos. Capacidade de
            realizar testes unitários, integração contínua e deploy.
          </p>
          <p>
            Trabalhei em diversos projetos, desde plataformas de pagamentos até
            ferramentas de gestão, sempre com foco em desempenho, acessibilidade
            e experiência do usuário.
          </p>

          <div class="skills-container">
            <h3>Minhas Habilidades</h3>
            <div class="skills-list">
              <div
                v-for="(skill, index) in skills"
                :key="index"
                class="skill-item"
                v-motion
                :initial="{ width: '0%' }"
                :visible="{
                  width: skill.level + '%',
                  transition: { delay: index * 100, duration: 800 },
                }"
              >
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    :style="`width: ${skill.level}%`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="about-image">
          <div class="image-container">
            <img src="../assets/images/jorge.jpg" alt="Professional portrait" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

const skills = ref([
  { name: "Frontend Development", level: 75 },
  { name: "UI/UX Design", level: 55 },
  { name: "Backend Development", level: 90 },
  { name: "Agile Methodology", level: 95 },
  { name: "Project Management", level: 85 },
]);
</script>

<style scoped>
.about-section {
  position: relative;
  overflow: hidden;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.about-content {
  max-width: 540px;
}

.lead {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.skills-container {
  margin-top: 40px;
}

.skills-container h3 {
  margin-bottom: 24px;
}

.skill-item {
  margin-bottom: 24px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.skill-name {
  font-weight: 500;
}

.skill-percentage {
  color: var(--primary);
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background-color: var(--surface);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--primary-light));
  border-radius: 4px;
  transition: width 1s ease;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-container {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 3/4;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 40px var(--shadow);
  position: relative;
}

.image-container::before {
  content: "";
  position: absolute;
  top: -10px;
  right: -10px;
  width: 100px;
  height: 100px;
  border-radius: 16px;
  background-color: var(--accent);
  z-index: -1;
}

.image-container::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: -10px;
  width: 100px;
  height: 100px;
  border-radius: 16px;
  background-color: var(--primary);
  z-index: -1;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-content {
    max-width: 100%;
    order: 2;
  }

  .about-image {
    order: 1;
  }

  .image-container {
    max-width: 320px;
  }
}

@media (max-width: 480px) {
  .image-container::before,
  .image-container::after {
    width: 80px;
    height: 80px;
  }
}
</style>
