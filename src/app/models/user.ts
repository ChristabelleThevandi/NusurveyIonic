import { CreditCard } from "./credit-card";
import { FacultyType } from "./faculty-type.enum";
import { GenderType } from "./gender-type.enum";
import { Response } from "./response";
import { Survey } from "./survey";
import { Tag } from "./tag";
import { Transaction } from "./transaction";

export class User {
    userId : number | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    birth_date: Date | undefined;
    email: string | undefined;
    password: string | undefined;
    faculty: FacultyType | undefined;
    major: string | undefined;
    avatar: string | undefined;
    gender: GenderType | GenderType.MALE;
    incentive: number | undefined;
    milestone : number | undefined;

    mySurveys : Survey[] | undefined;
    surveyTaken: Survey[] | undefined;
    tags: Tag[] | undefined;
    creditCard: CreditCard | undefined;
    transactions: Transaction[] | undefined;
    responses: Response[] | undefined;

    constructor(userId?: number, first_name?: string, last_name?: string, birth_date?: Date, email?: string, password?: string, faculty?: FacultyType, major?: string, gender?: GenderType) {
        this.incentive = 5.0;
        this.milestone = 100.0;
        this.userId = userId;
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
