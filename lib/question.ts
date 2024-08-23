import {  type AlternativeRType, type QuestionRType } from '~/types';

export default class Question {
  constructor(q: QuestionRType) {
    this.id = q.id;
    this.alternatives = q.alternatives;
    this.statement = q.statement;
  }

  public id: number;
  public alternatives: AlternativeRType[];
  public statement: string;

}