export class Question {
    id: number;
    title: string;
    type: string;
    correctAnswerId: number;
    answers: Array<Answer>;
}

export class Answer {
    answerId: number;
    active?: boolean;
    image?: string;
    name?: string;
}
