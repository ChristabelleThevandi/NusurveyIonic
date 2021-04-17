import { QuestionWrapper } from "./question-wrapper";
import { CheckboxAnswer } from './checkbox-answer';

export class CheckboxOption {
    checkboxOptionId : number | undefined;
    content : String | undefined;
    tempId : number | undefined;
    isSelected : boolean | undefined;
    
    questionWrapper : QuestionWrapper | undefined;
    checkboxAnswer : CheckboxAnswer | undefined;

    constructor(content?: String) {
        this.content = content;
    }
}
