import { type StateTree } from 'pinia';
import { quizSerializer } from '../variablesSerializers';

export const quizStoreSerializer = {
  serialize(value: StateTree): string {
    return JSON.stringify(value);
  },
  deserialize(value: string): StateTree {
    const out = JSON.parse(value);
    out.quiz = quizSerializer.deserialize(out.quiz);
    return out;
  },
};
