<template>
  <div class="play-page">
    <h2>Typing Test</h2>
    <p>Time left: {{ timeLeft }}s</p>

    <div class="passage">
      <span v-for="(char, idx) in passage" :key="idx" :class="{
        correct: idx < typed.length && typed[idx] === char,
        incorrect: idx < typed.length && typed[idx] !== char
      }">
        {{ char }}
      </span>
    </div>

    <textarea v-model="typed" @input="checkInput" :disabled="timeLeft <= 0" placeholder="Start typing here..."
      autofocus></textarea>

    <button v-if="timeLeft <= 0" @click="restart">Try Again</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Session duration in seconds (could come from query or default 60)
const duration = 60

const timeLeft = ref(duration)
const passageList = [
  "The quick brown fox jumps over the lazy dog.",
  "Vue.js makes building interfaces simple and fun.",
  "Practice typing to improve your speed and accuracy."
]
const passage = ref("")
const typed = ref("")

let timer = null

// Pick a random passage
const pickPassage = () => {
  passage.value = passageList[Math.floor(Math.random() * passageList.length)]
}

const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      clearInterval(timer)
    }
  }, 1000)
}

const checkInput = () => {
  if (typed.value.length === passage.value.length || timeLeft.value <= 0) {
    clearInterval(timer)

    // Calculate results
    const totalChars = typed.value.length
    const correctChars = typed.value.split('').filter((c, i) => c === passage.value[i]).length
    const wpm = Math.round((correctChars / 5) / (duration / 60))
    const accuracy = Math.round((correctChars / totalChars) * 100 || 0)

    // Navigate to Results page with query params
    router.push({
      name: 'Results',
      query: { wpm, accuracy, totalChars }
    })
  }
}


const restart = () => {
  typed.value = ""
  timeLeft.value = duration
  pickPassage()
  startTimer()
}

onMounted(() => {
  pickPassage()
  startTimer()
})
</script>

<style scoped>
.play-page {
  text-align: center;
  padding: 2rem;
}

.passage {
  margin: 1rem 0;
  font-size: 1.2rem;
  line-height: 1.5;
  user-select: none;
}

.correct {
  color: green;
}

.incorrect {
  color: red;
}

textarea {
  width: 100%;
  max-width: 600px;
  height: 120px;
  font-size: 1rem;
  padding: 0.5rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
