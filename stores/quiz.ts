import Quiz from "~/lib/quiz";
import Question from "~/lib/question";

import { cloneDeep } from 'lodash';

export const useQuizStore = defineStore(
  'quiz',
  () => {
    const quiz = reactive(new Quiz());

    function useQuestion(id: Ref<number>): Question {
      const _q = quiz.getQuestion(id.value);

      if (!_q) throw new Error(`Question with id: ${id} not found`);


      const question = reactive(cloneDeep(_q))


      // Update question when id changes
      watch(id, (v) => {
        const _q = quiz.getQuestion(v);
        if (!_q) throw new Error(`Question with id: ${id} not found`);
        Object.assign(question, _q);
      });

      // Update question when quiz.questions[i] changes
      watch(
        () => {
          const i = quiz.questions.findIndex((_q) => _q.id === id.value);
          return quiz.questions[i];
        },
        (v) => Object.assign(question, v),
        { deep: true },
      );

      // Update quiz.questions[i] when question changes
      watch(
        question,
        (v) => {
          const i = quiz.questions.findIndex((_q) => _q.id === id.value);
          Object.assign(quiz.questions[i], v);
        },
        { deep: true },
      )

      return question;
    }

    return { quiz, useQuestion };
  },
  { persist: true },
);
