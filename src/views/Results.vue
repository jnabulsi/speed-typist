<template>
  <div class="results-page">
    <h2>Results</h2>
    <p>WPM: {{ wpm }}</p>
    <p>Accuracy: {{ accuracy }}%</p>
    <p>Total characters typed: {{ totalChars }}</p>
    <button @click="retry">Try Again</button>
    <button @click="goHome">Home</button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Read results from query params
const wpm = route.query.wpm || 0
const accuracy = route.query.accuracy || 0
const totalChars = route.query.totalChars || 0

const retry = () => router.push({ name: 'Play' })
const goHome = () => router.push({ name: 'Home' })
</script>
