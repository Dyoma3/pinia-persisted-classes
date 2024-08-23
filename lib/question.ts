import {  type AlternativeRType, type QuestionRType, LetterEnum } from '~/types';

export default class Question {
  constructor(q: QuestionRType) {
    this.id = q.id;
    this.alternatives = q.alternatives;
    this.statement = q.statement;
  }

  public id: number;
  public alternatives: AlternativeRType[];
  public statement: string;

  public selectAlternative(l: LetterEnum) {
    this.alternatives.forEach((a) => {
      // Selecting an already selected will unselect it
      if (a.selected) a.selected = false;
      else a.selected = a.letter === l
    });
  }

  public getSelectedAlternative(): LetterEnum | null {
    const a = this.alternatives.find((_a) => _a.selected);
    return a?.letter || null;
  }
}
