import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactManagerAppComponent } from './contact-manager/contact-manager-app.component';
import { ContactManagerModule } from './contact-manager/contact-manager.module';

const routes: Routes = [
  { path: 'contactmanager', loadChildren: './contact-manager/contact-manager.module#ContactManagerModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: '**', redirectTo: 'contactmanager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ContactManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
