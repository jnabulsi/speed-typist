<template>
  <div class="metrics-container">
    <pre>{{ metricsData }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'



const metricsData = ref(`




http_requests_total{method="GET", route="/"} 152
http_requests_total{method="GET", route="/play"} 98
http_requests_total{method="GET", route="/results"} 85


http_request_duration_seconds_p95{route="/"} 0.05
http_request_duration_seconds_p95{route="/play"} 0.12
`)
</script>

<style scoped>
.metrics-container {
  padding: 1rem;
  background-color: #f4f4f4;
  color: #333;
}


pre {
  font-family: monospace;
  font-size: 1rem;
  white-space: pre-wrap; 
}
</style>