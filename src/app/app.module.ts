import { ContactService } from './contact.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ContactaddComponent } from './contactadd/contactadd.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ContactaddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: 'display', component: DisplayComponent},
      {path: 'contactadd', component: ContactaddComponent},
    ])
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
