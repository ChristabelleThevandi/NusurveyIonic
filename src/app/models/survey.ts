import { User } from "./user";
import { Tag } from "./tag";
import { QuestionWrapper } from "./question-wrapper";
import { Response } from "./response";
import { FacultyType } from "./faculty-type.enum";
import { Transaction } from "./transaction";

export class Survey {
    surveyId : number | undefined;
    expiry_date : Date | undefined;
    surveyOpen : boolean | undefined;
    description : String | undefined;
    title : String | undefined;
    max_surveyees : number | undefined;
    price_per_response : 0.1;
    reward : number | undefined;

    creator : User | undefined;
    surveyees: User[] | undefined;
    tags : Tag[] | undefined;
    questionWrappers : QuestionWrapper[] | undefined;
    responses : Response[] | undefined;
    faculties : FacultyType[] | undefined;
    transactions : Transaction[] | undefined;

    constructor() {
        this.surveyOpen = true;
    }
}

