import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {catchError, of, throwError} from "rxjs";

@Component({
    selector: 'app-rethrow-error',
    templateUrl: './rethrow-error.component.html',
    styleUrls: ['./rethrow-error.component.scss']
})
export class RethrowErrorComponent {
    userIdSearch = new FormControl('', [Validators.required]);
    userSearchResult: string = '';
    noUserFound = "";

    constructor(private httpClient: HttpClient) {
    }

    searchHandle() {
        this.httpClient.get(`http://localhost:3000/users/${this.userIdSearch.value}`)
            .pipe(
                catchError(err => {
                    this.userSearchResult = `No user found for id ${this.userIdSearch.value}`;
                    return throwError(() => err)
                })
            )
            .subscribe((x: any) => {
                this.userSearchResult = `user id: ${x.id}; username: ${x.username}; country: ${x.country}`;
            });
    }
}
