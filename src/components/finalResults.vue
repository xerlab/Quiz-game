<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const route = useRoute()
const score = ref(route.params.score)
console.log(score.value)
</script>

<template>
  <div class="finalscore">
    <div class="score-card">
      <p>Your score is</p>
      <h1>{{ score }}</h1>
    </div>
  </div>
</template>

<style scoped>
.finalscore {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.score-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background-color: rgb(255, 248, 233);
  padding: 4rem;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.9rem rgb(203, 203, 203);
}

p {
  font-size: 1rem;
  color: rgb(133, 133, 133);
  margin-bottom: 2rem;
}


h1 {
  font-size: 4rem;
  font-weight: 100;
}
</style>