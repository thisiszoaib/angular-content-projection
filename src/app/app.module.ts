import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataViewComponent } from './data-view/data-view.component';
import { ActionButtonComponent } from './action-button/action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DataViewComponent,
    ActionButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
