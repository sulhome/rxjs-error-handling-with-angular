import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, of} from "rxjs";
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-catch-error',
    templateUrl: './catch-error.component.html',
    styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent {
    userIdSearch = new FormControl('', [Validators.required]);
    userSearchResult: string = '';
    noUserFound = "";

    constructor(private httpClient: HttpClient) {
    }

    searchHandle() {
        this.httpClient.get(`http://localhost:3000/users/${this.userIdSearch.value}`)
            .pipe(
                catchError(err => {
                    this.userSearchResult = `No user found for id ${this.userIdSearch.value}`
                    return of({})
                })
            )
            .subscribe((x: any) => {
                if (x && x.id) {
                    this.userSearchResult = `user id: ${x.id}; username: ${x.username}; country: ${x.country}`;
                }
            });
    }
}
