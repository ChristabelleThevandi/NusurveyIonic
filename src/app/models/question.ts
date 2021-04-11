import { QuestionWrapper } from "./question-wrapper";
import { QuestionType } from "./question-type.enum";

export class Question {
    questionId : number | undefined;
    title : String | undefined;
    image : String | undefined;
    questionNumber : number | undefined;
    typeStr : String | undefined;
    mcq : boolean | undefined;
    checkbox : boolean | undefined;
    slider : boolean | undefined;
    text : boolean | undefined;

    type : QuestionType | undefined;
    questionWrapper : QuestionWrapper | undefined;

    constructor() {
        this.type = QuestionType.MCQ;
        this.typeStr = "Mcq";
    }
}
