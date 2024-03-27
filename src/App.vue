<script setup>
import questionContainer from './components/questionContainer.vue'
import quizContainer from './components/quizContainer.vue'
import quizList from './data/quizes.json'
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <!-- Header section -->
  <header>
    <nav>
      <h1>Quiz <span>Game</span></h1>
      <RouterLink to="/"><button>All Quizes</button></RouterLink>

    </nav>
  </header>

  <body>

    <RouterView :allquizes="quizList" />
    <!-- <quizContainer :allquizes="quizList" /> -->
  </body>


</template>


<style scoped>
/* Header section */
nav h1 {
  color: aliceblue;
  font-style: italic;
  font-weight: 600;
  margin-right: 4rem;
}

h1 span {
  color: rgb(238, 168, 255);
  font-weight: 500;
  font-size: small;
}
</style>
