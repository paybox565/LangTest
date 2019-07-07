export class Question {
    id: number;
    title: string;
    type: string;
    correctAnswerId: number;
    answers: Array<QuestionImage>;
}

export class QuestionImage {
    answerId: number;
    image?: string;
    name?: string;
}
