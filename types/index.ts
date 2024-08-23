export enum LetterEnum {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export interface AlternativeRType {
  letter: LetterEnum;
  selected: boolean;
  text: string;
}

export interface QuestionRType {
  id: number;
  statement: string;
  alternatives: AlternativeRType[];
}

export interface QuizRType {
  id: number;
  createdAt: string;
  name: string;
  questions: QuestionRType[];
}
