import { AnswerWrapper } from "./answer-wrapper";
import { Survey } from "./survey";
import { User } from "./user";

export class Response {
    id : number | undefined;
    answerWrappers : AnswerWrapper[] | undefined;
    survey : Survey | undefined;
    surveyee : User | undefined;

    constructor(id?: number, answerWrapper?: AnswerWrapper[], survey?: Survey, surveyee?: User) {
        this.id = id;
        this.answerWrappers = answerWrapper;
        this.survey = survey;
        this.surveyee = surveyee;
    }
}
