import { createRouter, createWebHistory } from 'vue-router'
import quizContainer from '../components/quizContainer.vue'
import questionContainer from '@/components/questionContainer.vue'
import finalResults from '@/components/finalResults.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: quizContainer,
      props:false
    },
    {
      path:'/quiz/:quizId',
      name: 'quiz',
      component: questionContainer
    },
    {
      path:'/finalResults/:score',
      name: 'finalresults',
      component: finalResults
    },
  ]
})

export default router
