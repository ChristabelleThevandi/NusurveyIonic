import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SessionService } from '../services/session.service';
import { Transaction } from '../models/transaction';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl: string = "/api/Transaction";

  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {
  }

  retrieveAllTransactions(email: string | undefined): Observable<Transaction[]> {
    let url = "/retrieveAllTransaction";
    return this.httpClient.get<Transaction[]>(this.baseUrl + url + "/" + email).pipe
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
