<script setup lang="ts">
import quizData from './lib/quizData';

const quizStore = useQuizStore();
const { quiz } = quizStore;
</script>

<template>
  <v-app>
    <div class="centered-display my-10">
      <h1>OOP in Vue</h1>
      <v-btn class="mt-7 mb-2" @click="quiz.load(quizData)">Load quiz</v-btn>
      <h2>{{ quiz.name }}</h2>
      <p class="mb-10">*Questions are decoupled from the quiz instance to be used in other components</p>
      <div style="width: 500px">
        <question-display
          v-for="(q, i) in quiz.questions"
          :key="i"
          :id="q.id"
          :number="i + 1"
          class="mb-7"
        />
      </div>
    </div>
    <div class="index ml-5 mt-5">
      <p>Selected</p>
      <p class="mb-2">(from quiz.questions)</p>
      <div v-for="(q, i) in quiz.questions" :key="i" class="d-flex">
        <p class="w mr-3">{{ q.id }} {{ q.getSelectedAlternative() }}</p>
        <p class="pointer" @click="q.clear()">clear</p>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.centered-display {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.index {
  position: fixed;
  top: 0px;
  left: 0px;
}
.pointer {
  cursor: pointer;
}
.w {
  width: 40px;
}
</style>
