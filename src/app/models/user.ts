import { CreditCard } from "./credit-card";
import { FacultyType } from "./faculty-type.enum";
import { GenderType } from "./gender-type.enum";
import { SurveyResponse } from "./surveyResponse";
import { Survey } from "./survey";
import { Tag } from "./tag";
import { Transaction } from "./transaction";

export class User {
    userId : number | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    birth_date: string | undefined;
    email: string | undefined;
    password: string | undefined;
    faculty: string | undefined;
    major: string | undefined;
    avatar: string | undefined;
    gender: string | undefined;
    incentive: number | undefined;
    milestone : number | undefined;

    mySurveys : Survey[] | undefined;
    surveyTaken: Survey[] | undefined;
    tags: Tag[] | undefined;
    creditCard: CreditCard | undefined;
    transactions: Transaction[] | undefined;
    surveyResponses: SurveyResponse[] | undefined;

    constructor(first_name?: string, last_name?: string, birth_date?: string, email?: string, password?: string, faculty?: string, major?: string, gender?: string) {
        this.incentive = 5.0;
        this.milestone = 100.0;
        this.first_name = first_name;
        this.last_name = last_name;
        this.birth_date = birth_date;
        this.email = email;
        this.password = password;
        this.faculty = faculty;
        this.major = major;
        this.gender = gender;
    }
}
