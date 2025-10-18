<template>
  <div class="home-page">
    <h1>Speed-Typist</h1>
    <p>
      Test your typing speed and accuracy! Click below to start a typing session.
    </p>
    <button @click="startTyping">Start Typing Test</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function startTyping() {
  router.push({ name: 'Play' }) // assuming your Play screen route is named 'Play'
}
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 6px;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #45a049;
}
</style>
