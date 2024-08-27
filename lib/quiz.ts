import { type QuizRType, LetterEnum } from "~/types";
import Question from "./question";

interface SAType {
  [n: number]: LetterEnum | null;
}

export default class Quiz {
  constructor() {
    this.id = 0;
    this._createdAt = '';
    this.loaded = false;
    this.name = '';
    this.questions = <Question[]>[];
  }

  get createdAt() {
    return this._createdAt === '' ? null : new Date(this._createdAt);
  }

  public id: number;
  public _createdAt: string;
  public loaded: boolean;
  public name: string;
  public questions: Question[];

  public load(q: QuizRType) {
    this.id = q.id;
    this._createdAt = q.createdAt;
    this.name = q.name;
    this.questions = q.questions.map((question) => new Question(question));
  }

  public getQuestion(id: number): Question | null {
    const q = this.questions.find((_q) => _q.id === id);
    return q || null;
  }

  public getSelectedAlternatives() {
    const out: SAType = {};
    this.questions.forEach((q, i) => {
      out[i] = q.getSelectedAlternative();
    });

    return out
  }
}
