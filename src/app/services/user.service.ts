import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from '../services/session.service';
import { User } from '../models/user';



const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
	providedIn: 'root'
})
export class UserService {
	baseUrl: string = "/api/User";



	constructor(private httpClient: HttpClient,
		private sessionService: SessionService) {
	}



	userLogin(username: string | undefined, password: string | undefined): Observable<User> {
		return this.httpClient.get<User>(this.baseUrl + "/userLogin?username=" + username + "&password=" + password).pipe
			(
				catchError(this.handleError)
			);
	}

	userRegister(user: User | undefined): Observable<User> {
		return this.httpClient.put<User>(this.baseUrl, user, httpOptions).pipe
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
