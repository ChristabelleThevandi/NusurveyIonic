import { CheckboxAnswer } from "./checkbox-answer";
import { MultipleChoiceAnswer } from "./multiple-choice-answer";
import { QuestionWrapper } from "./question-wrapper";
import { SurveyResponse } from "./surveyResponse";
import { SliderAnswer } from "./slider-answer";
import { TextAnswer } from "./text-answer";

export class AnswerWrapper {
  //  id: number | undefined;
    questionWrapper: QuestionWrapper | undefined;
    checkboxAnswer: CheckboxAnswer | undefined;
    multipleChoiceAnswer: MultipleChoiceAnswer | undefined;
    sliderAnswer: SliderAnswer | undefined;
    textAnswer: TextAnswer | undefined;
    surveyResponse: SurveyResponse | undefined;
    questionWrapperId: number | undefined;

    constructor(questionWrapper?: QuestionWrapper, checkboxAnswer?: CheckboxAnswer, multipleChoiceAnswer?: MultipleChoiceAnswer,
        sliderAnswer?: SliderAnswer, textAnswer?: TextAnswer) {
           // this.id = id;
            this.questionWrapper = questionWrapper;
            this.checkboxAnswer = checkboxAnswer;
            this.multipleChoiceAnswer = multipleChoiceAnswer;
            this.sliderAnswer = sliderAnswer;
            this.textAnswer = textAnswer;
    }
}
