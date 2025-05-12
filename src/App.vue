<template>
  <div class="app-container" :class="{ 'dark-mode': isDark }">
    <button @click="toggleTheme" class="theme-toggle" aria-label="Toggle theme">
      <svg
        v-if="isDark"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { usePreferredDark } from "@vueuse/core";

const isDark = ref(false);
const isPreferredDark = usePreferredDark();

onMounted(() => {
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDark.value = savedTheme === "dark";
  } else {
    isDark.value = isPreferredDark.value;
  }
  applyTheme();
});

watch(isDark, () => {
  applyTheme();
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
});

const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const toggleTheme = () => {
  console.log("click");
  isDark.value = !isDark.value;
};
</script>

<style>
.app-container {
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-mode {
  background-color: #121212;
  color: #f5f5f7;
}

.theme-toggle {
  position: fixed;
  top: 20px;
  right: 55px;
  z-index: 9999;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
