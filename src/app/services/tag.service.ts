import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionService } from '../services/session.service';
import { User } from '../models/user';
import { Tag } from '../models/tag';
import { UpdateTagReq } from '../models/update-tag-req';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class TagService {

	baseUrl1: string = "/api/User";
	baseUrl2: string = "/api/Tag";
	constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

	updateTag(updateTagReq: UpdateTagReq): Observable<any> {
		let url = "/updateTag"
		console.log("calling update tag method");
		console.log(updateTagReq);
		return this.httpClient.post<any>(this.baseUrl1 + url, updateTagReq, httpOptions).pipe(
			catchError(this.handleError)
		);
	}

	retrieveAllTags(): Observable<Tag[]> {
		let url = "/retrieveAllTags"
		console.log("calling update tag method");
		return this.httpClient.get<Tag[]>(this.baseUrl2 + url).pipe(
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
