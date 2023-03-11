import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RetryErrorComponent} from "./retry-error/retry-error.component";
import {CatchErrorComponent} from "./catch-error/catch-error.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'retry-error', component: RetryErrorComponent},
    {path: 'catch-error', component: CatchErrorComponent},
    {path: 'retry-error', component: RetryErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
