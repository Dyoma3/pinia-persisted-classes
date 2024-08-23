export interface AlternativeRType {
  number: number;
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