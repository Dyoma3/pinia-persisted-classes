import Question from "~/lib/question";
import type Quiz from "~/lib/quiz";
import { z } from 'zod';
import { LetterEnum } from '~/types/index';

// These schemas are based on the data that is persisted in the store
// It is not necessarily the same as the data from the API
// or from the objects of the classes

export const alternativeSchema = z.object({
  letter: z.nativeEnum(LetterEnum),
  selected: z.boolean(),
  text: z.string(),
});

export const questionSchema = z.object({
  id: z.number(),
  alternatives: z.array(alternativeSchema),
  statement: z.string(),
});

export const quizSchema = z.object({
  id: z.number(),
  _createdAt: z.string().datetime(),
  loaded: z.boolean(),
  name: z.string(),
  questions: z.array(questionSchema),
});



export const quizSerializer = {
  serialize(quiz: Quiz) {
    // Circular references must be undefined in order to avoid
    // infinite loop in JSON.stringify
    return JSON.stringify(quiz);
  },
  deserialize(data: any) {
    const quiz = quizSchema.parse(data);
    const questions = quiz.questions.map((q) => questionSerializer.deserialize(q));
    return { ...quiz, questions };
  },
};
export const questionSerializer = {
  serialize(question: Question) {
    return JSON.stringify(question);
  },
  deserialize(data: any) {
    return new Question(questionSchema.parse(data));
  },
};
