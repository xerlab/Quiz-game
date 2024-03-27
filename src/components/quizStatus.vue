<template>
  <div class="quiz-title">{{ quizname }}</div>
  <div class="current-status">
    <div class="questions">
      <div class="progressbar">
        <div :style="{ width: `${(currIndex * 100 / numquestions)}%` }" class="progress"></div>
      </div>
      <div class="questions-number">
        <p>Questions: <span>{{ numquestions }}</span></p>
        <p>Remaining: <span>{{ numquestions - currIndex }}</span></p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
const props = defineProps(['quizname', 'numquestions', 'currIndex'])
// const progress = computed(() => (props.currIndex * 100 / props.numquestions))
// console.log("current progress " + progress.value)
</script>


<style scoped>
p span {
  font-weight: 600;
  color: rgb(137, 136, 136);
}
</style>