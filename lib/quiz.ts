import { type QuizRType } from "~/types";
import Question from "./question";

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
    q.questions.forEach((question) => this.questions.push(new Question(question)));
  }

  public getQuestion(id: number): Question | null {
    const q = this.questions.find((_q) => _q.id === id);
    return q || null;
  }
}
