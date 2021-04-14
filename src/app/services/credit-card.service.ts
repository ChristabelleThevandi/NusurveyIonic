import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionService } from '../services/session.service';
import { User } from '../models/user';
import { AddCreditCardReq } from '../models/add-credit-card-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  
  baseUrl: string = "/api/CreditCard";
  baseUrl2 : string = "/api/User";
  
  constructor(private httpClient: HttpClient, private sessionService: SessionService) 
	{ 

	}

  	deleteCreditCard(user: User | undefined) : Observable<any> {
		let url = "/removeCreditCard"
		console.log("calling remove credit card method");
		console.log(user);
		return this.httpClient.post<any>(this.baseUrl + url, user, httpOptions).pipe(
			catchError(this.handleError)
		);
	}

	updateCreditCard(addCreditCardReq: AddCreditCardReq) : Observable<any> {
		let url = "/addCreditCard"
		console.log("calling update credit card method");
		return this.httpClient.post<any>(this.baseUrl2 + url,addCreditCardReq , httpOptions).pipe(
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
