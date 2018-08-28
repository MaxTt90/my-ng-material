import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { ContactManagerAppComponent } from './contact-manager-app.component';

const routes: Routes = [
  { path: '', component: ContactManagerAppComponent,
    children: [
      { path: '', component: MainContentComponent } ]
    },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToolbarComponent, MainContentComponent, SideNavComponent]
})
export class ContactManagerModule { }
