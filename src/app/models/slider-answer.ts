import { AnswerWrapper } from "./answer-wrapper";
import { SliderOption } from "./slider-option";

export class SliderAnswer {
   // id : number | undefined;
    answerWrapper : AnswerWrapper | undefined;
    optionGiven : SliderOption | undefined;

    constructor(answerWrapper?: AnswerWrapper, optionGiven?: SliderOption) {
     //   this.id = id;
        this.answerWrapper = answerWrapper;
        this.optionGiven = optionGiven;
    }
}
