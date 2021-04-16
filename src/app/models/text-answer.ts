import { AnswerWrapper } from "./answer-wrapper";
import { TextOption } from "./text-option";

export class TextAnswer {
 //   id : number | undefined;
    answerWrapper : AnswerWrapper | undefined;
    answerGiven : TextOption | undefined;
    answerText : String | undefined;

    constructor(answerWrapper?: AnswerWrapper, answerGiven?: TextOption) {
      //  this.id = id;
        this.answerWrapper = answerWrapper;
        this.answerGiven = answerGiven;
    }
}
