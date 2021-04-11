import { QuestionWrapper } from "./question-wrapper";
import { TextAnswer } from "./text-answer";

export class TextOption {
    textOptionId : number | undefined;
    text : String | undefined;

    questionWrapper : QuestionWrapper | undefined;
    textAnswer : TextAnswer | undefined;

    constructor(text?: String) {
        this.text = text;
    }
}
