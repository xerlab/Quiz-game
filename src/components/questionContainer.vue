<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import quizStatus from '@/components/quizStatus.vue'

const router = useRouter();

const props = defineProps(['allquizes'])

const route = useRoute();
const Id = route.params.quizId;
console.log("currentquizId :" + Id)
const currentQuiz = ref(props.allquizes[Id - 1])
const currentIndex = ref(1)
const score = ref(0)
const finalScore = ref('')
const buttonText = ref('Skip Question')
const numquestions = currentQuiz.value.questions.length

function nextQuestion(choice) {
  if (currentIndex.value < 3) {
    score.value += choice.isCorrect === true ? 1 : 0
    currentIndex.value++
  } else if (buttonText.value === 'Show Results') {
    finalScore.value = `${score.value} / ${(currentIndex.value - 1)}`
    router.push({
      name: 'finalresults',
      params: { score: finalScore.value },
    });
    console.log('current socre is ' + finalScore.value)
  } else {
    buttonText.value = 'Show Results'
    currentIndex.value++
  }
}

</script>

<template>

  <quizStatus :quizname="currentQuiz.name" :numquestions="numquestions" :currIndex="currentIndex - 1" />

  <div v-for="question in currentQuiz.questions" :key="question.id">
    <div v-if="question.id === currentIndex" class="question-container">
      <p>The current question is :</p>
      <br>
      <h2>{{ question.text }}</h2>
      <br>
      <div class="choices-container">
        <div v-for="choice in question.options" :key="choice.id" class="choice" @click="nextQuestion(choice)">
          <div class="choice-label">{{ choice.label }}</div>
          <div class="answer">{{ choice.text }}</div>
        </div>
      </div>
    </div>
  </div>


  <!-- Footer section -->
  <footer>
    <button :style="{ backgroundColor: buttonText === 'Show Results' && 'red' }" @click="nextQuestion">{{
    buttonText }}</button>
  </footer>
</template>

<style>
.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem;
  height: 35rem;
}

.question-container h2 {
  font-weight: 600;
  font-size: 2.3rem;
}

.choices-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 85rem;
  margin: 1rem;
  padding: 2rem;
  height: 30rem;
}

.question-container p {
  color: rgb(183, 157, 180);
}

.choice {
  padding: 2.5rem;
  width: 15rem;
  height: fit-content;
  background-color: rgb(255, 255, 255);
  border-radius: 1.2rem;
  font-size: 1.2rem;
  box-shadow: 0.1rem 0.1rem 0.9rem rgb(203, 203, 203);
  transition: 0.3s;
  position: relative;
}

.choice:hover {
  box-shadow: 0.1rem 0.1rem 0.5rem rgb(173, 173, 173);
  background-color: rgb(251, 227, 255);
  color: rgb(78, 51, 103);
}


.choice-label {
  color: rgb(207, 207, 207);
  font-size: 2rem;
  font-weight: 600;
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  transition: 0.3s;
}

.choice:hover .choice-label {
  color: rgb(161, 87, 150);
}

.answer {
  font-weight: 500;
  color: rgb(41, 37, 45);
}

/* Footer section */
footer {
  display: flex;
  justify-content: end;
  margin-right: 3rem;
}
</style>