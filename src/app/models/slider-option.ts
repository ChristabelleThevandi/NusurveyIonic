import { QuestionWrapper } from "./question-wrapper";
import { SliderAnswer } from "./slider-answer";

export class SliderOption {
    sliderOptionId : number | undefined;
    minRange : number | undefined;
    maxRange : number | undefined;
    minLabel : String | undefined;
    maxLabel : String | undefined;

    questionWrapper : QuestionWrapper | undefined;
    sliderAnswer : SliderAnswer | undefined;

    constructor(minRange?: number, maxRange?: number, minLabel?: String, maxLabel?: String) {
        this.minRange = minRange;
        this.maxRange = maxRange;
        this.minLabel = minLabel;
        this.maxLabel = maxLabel;
    }
}
