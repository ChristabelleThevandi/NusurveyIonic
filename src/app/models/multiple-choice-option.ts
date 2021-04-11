import { QuestionWrapper } from "./question-wrapper";
import { MultipleChoiceAnswer } from "./multiple-choice-answer";

export class MultipleChoiceOption {
    mcqOptionId : number | undefined;
    content : String | undefined;
    tempId : number | undefined;

    questionWrapper : QuestionWrapper | undefined;
    multipleChoiceAnswer : MultipleChoiceAnswer | undefined;

    constructor(content?: String) {
        this.content = content;
    }
}
