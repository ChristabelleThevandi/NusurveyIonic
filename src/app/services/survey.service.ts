import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SessionService } from '../services/session.service';
import { Survey } from '../models/survey';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  baseUrl: string = "/api/User";
  baseUrlSurvey: string = "/api/Survey";

  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {
  }

  getRecommendation(user: User | undefined): Observable<Survey[]> {
    let url = "/getRecommendation";
    return this.httpClient.post<Survey[]>(this.baseUrl + url, user, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  getSurveyBySurveyId(surveyId: number | undefined): Observable<Survey> {
    let url = "/retrieveSurveyBySurveyId";
    return this.httpClient.get<Survey>(this.baseUrlSurvey + url + "/" + surveyId).pipe
      (
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }

}
