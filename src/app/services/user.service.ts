import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from '../services/session.service';
import { User } from '../models/user';
import { LoginReq } from '../models/login-req';



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
		let url = "/login";
		let loginReq : LoginReq = new LoginReq(username,password);
		console.log(loginReq);
		return this.httpClient.post<User>(this.baseUrl + url, loginReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}

	userRegister(user: User | undefined): Observable<number> {
		let url = "/register"
		return this.httpClient.put<number>(this.baseUrl + url, user, httpOptions).pipe
			(
				catchError(this.handleError)
			);
	}

	updateProfile(user: User | undefined) : Observable<any> {
		let url = "/updateProfile"
		console.log("Masuk sini");
		console.log(user);
		return this.httpClient.post<any>(this.baseUrl + url, user, httpOptions).pipe(
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
