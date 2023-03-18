import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {retry} from "rxjs";

@Component({
    selector: 'app-retry-error',
    templateUrl: './retry-error.component.html',
    styleUrls: ['./retry-error.component.scss']
})
export class RetryErrorComponent {
    userIdSearch = new FormControl('', [Validators.required]);
    userSearchResult: string = '';
    noUserFound = "";

    constructor(private httpClient: HttpClient) {
    }

    searchHandle() {
        this.httpClient.get(`http://localhost:3000/users/${this.userIdSearch.value}`)
            .pipe(
                retry({count: 2, delay: 200, resetOnSuccess: true})
            )
            .subscribe({
                next: (x: any) => this.userSearchResult = `user id: ${x.id}; username: ${x.username}; country: ${x.country}`,
                error: (error) => this.userSearchResult = error.error.message
            });
    }
}
