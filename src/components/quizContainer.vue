<script setup>
import { RouterLink, RouterView } from 'vue-router';
const props = defineProps(['allquizes'])
console.log(props.allquizes)
</script>

<template>
  <div class="subjects-container">
    <div v-for="quiz in allquizes" :key="id" class="subject">
      <RouterLink :to="`/quiz/${quiz.id}`">
        <img :src="quiz.img" alt="">
        <div class="quiz-details">
          <h3>{{ quiz.name }}</h3>
          <p>{{ quiz.questions.length }} Questions</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.subjects-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3rem;
  height: fit-content;
}

.subject {
  width: 20rem;
  height: 16.5rem;
  background-image: linear-gradient(-120deg,
      rgb(161, 71, 246),
      rgb(48, 28, 66));
  border-radius: 1.1rem;
  overflow: hidden;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.subject img {
  width: 100%;
  height: 12.3rem;
  transition: 0.2s;
  filter: grayscale(0);
}

.subject img:hover {
  filter: grayscale(90%);
}

.quiz-details {
  padding-left: 1.5rem;
  padding-top: 0.35rem;
}

.quiz-details p,
h3 {
  padding: 0.1rem;
  padding-bottom: 0.3rem;
  color: aliceblue;
}

.quiz-details p {
  font-size: 0.8rem;
}
</style>

<script setup>
</script>