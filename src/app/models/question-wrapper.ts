import { AnswerWrapper } from "./answer-wrapper";
import { CheckboxOption } from "./checkbox-option";
import { MultipleChoiceOption } from "./multiple-choice-option";
import { Question } from "./question";
import { SliderOption } from "./slider-option";
import { Survey } from "./survey";
import { TextOption } from "./text-option";

export class QuestionWrapper {
    id : number | undefined;
    question : Question | undefined;
    mcq : MultipleChoiceOption[] | undefined;
    text : TextOption | undefined;
    slider : SliderOption | undefined;
    checkbox : CheckboxOption[] | undefined;
    survey : Survey | undefined;
    tempId : number | undefined;
    answerWrappers : AnswerWrapper[] | undefined;

    constructor() {
       // this.id = id;
    }
}
