import { AnswerWrapper } from "./answer-wrapper";
import { MultipleChoiceOption } from "./multiple-choice-option";

export class MultipleChoiceAnswer {
    id : number | undefined;
    answerWrapper : AnswerWrapper | undefined;
    optionChosen : MultipleChoiceOption | undefined;

    constructor(id?: number, answerWrapper?: AnswerWrapper, optionChosen?: MultipleChoiceOption) {
        this.id = id;
        this.answerWrapper = answerWrapper;
        this.optionChosen = optionChosen;
    }
}
