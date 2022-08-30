import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { ContentComponent } from './content/content.component';
import {ServiceService} from "./services/service.service";
import {RouterModule, Routes} from "@angular/router";
import { ContentMainComponent } from './content/content-main/content-main.component';
import { CompletedComponent } from './content/completed/completed.component';

const appRoutes: Routes =[
  { path: '', component: ContentComponent},
  { path: 'completed', component: CompletedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigateComponent,
    ContentComponent,
    ContentMainComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
