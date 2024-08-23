<script setup lang="ts">
const props = defineProps<{ id: number, number: number }>();
const { useQuestion } = useQuizStore();
const question = useQuestion(toRef(props, 'id'));
</script>
<template>
  <div>
    <p class="statement mb-4">{{ number }}. {{ question.statement }}</p>
    <div v-for="(a, i) in question.alternatives" :key="i" class="d-flex align-center mb-3">
      <p
        :class="{ letter: true, selected: a.selected }"
        @click="question.selectAlternative(a.letter)"
      >{{ a.letter }}</p>
      <p class="pl-3">{{ a.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.statement {
  font-size: 18px;
  font-weight: 600;
}
.letter {
  border-style: solid;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.selected {
  background-color: aquamarine;
}
</style>