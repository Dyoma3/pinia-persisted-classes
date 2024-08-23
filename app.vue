<script setup lang="ts">
import quizData from './lib/quizData';

const quizStore = useQuizStore();
const { quiz, useQuestion } = quizStore;

quiz.load(quizData);

const selAlts = computed(() => quiz.getSelectedAlternatives());
</script>

<template>
  <v-app>
    <div class="centered-display my-10">
      <h1>OOP in Vue</h1>
      <h2>{{ quiz.name }}</h2>
      <p class="my-10">*Questions are decoupled from the quiz instance to be used in other components</p>
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
      <p v-for="(sa, i) in Object.entries(selAlts)" :key="i">{{ sa[0] }}: {{ sa[1] }}</p>
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
</style>
