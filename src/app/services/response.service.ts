import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SessionService } from '../services/session.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SurveyResponse } from '../models/surveyResponse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  baseUrl: string = "/api/Response";

  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {
  }

  createResponse(response: SurveyResponse | undefined): Observable<any> {
   
    let url = "/createResponse"
    console.log(response);
    return this.httpClient.put<any>(this.baseUrl + url, response, httpOptions).pipe
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
