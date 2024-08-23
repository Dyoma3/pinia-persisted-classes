import { type QuizRType, LetterEnum } from "~/types"

const quizData: QuizRType = {
  id: 1,
  name: 'Math Quiz',
  createdAt: '',
  questions: [
    { id: 1, statement: 'How much is 1 + 1?', alternatives: [
      { letter: LetterEnum.A, selected: false, text: '1' },
      { letter: LetterEnum.B, selected: false, text: '2' },
      { letter: LetterEnum.C, selected: false, text: '3' },
      { letter: LetterEnum.D, selected: false, text: '4' },
    ]},
    { id: 2, statement: 'How much is 2 + 1?', alternatives: [
      { letter: LetterEnum.A, selected: false, text: '1' },
      { letter: LetterEnum.B, selected: false, text: '2' },
      { letter: LetterEnum.C, selected: false, text: '3' },
      { letter: LetterEnum.D, selected: false, text: '4' },
    ]},
    { id: 3, statement: 'How much is 3 + 1?', alternatives: [
      { letter: LetterEnum.A, selected: false, text: '0' },
      { letter: LetterEnum.B, selected: false, text: '1' },
      { letter: LetterEnum.C, selected: false, text: '3' },
      { letter: LetterEnum.D, selected: false, text: '4' },
    ]},
    { id: 4, statement: 'How much is 4 + 1?', alternatives: [
      { letter: LetterEnum.A, selected: false, text: '2' },
      { letter: LetterEnum.B, selected: false, text: '3' },
      { letter: LetterEnum.C, selected: false, text: '4' },
      { letter: LetterEnum.D, selected: false, text: '5' },
    ]},

  ],
};

export default quizData;
