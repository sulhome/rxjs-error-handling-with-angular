import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { RethrowErrorComponent } from './rethrow-error/rethrow-error.component';
import { RetryErrorComponent } from './retry-error/retry-error.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CatchErrorComponent,
    RethrowErrorComponent,
    RetryErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
