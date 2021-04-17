import { AnswerWrapper } from "./answer-wrapper";
import { CheckboxOption } from "./checkbox-option";

export class CheckboxAnswer {
   // id : number | undefined;
    answerWrapper : AnswerWrapper | undefined;
    optionsGiven : CheckboxOption[] | undefined;
    numChecked : number | undefined;

    constructor(answerWrapper?: AnswerWrapper, optionsGiven?: CheckboxOption[]) {
      //  this.id = id;
        this.answerWrapper = answerWrapper;
        this.optionsGiven = optionsGiven;
    }
}
