import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RetryErrorComponent} from "./retry-error/retry-error.component";
import {CatchErrorComponent} from "./catch-error/catch-error.component";
import {RethrowErrorComponent} from "./rethrow-error/rethrow-error.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'rethrow-error', component: RethrowErrorComponent},
    {path: 'catch-error', component: CatchErrorComponent},
    {path: 'retry-error', component: RetryErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
