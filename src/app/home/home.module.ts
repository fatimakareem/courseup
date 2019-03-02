import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from "./home.component";
import {HomeSliderEidtDialogComponent} from "./home.component";
import {CommonModule} from "@angular/common";


import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {RatingModule} from "ng2-rating";

import { MatDialogModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import { SlickModule } from 'ngx-slick';

const homeRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HomeComponent}
];


@NgModule({
  declarations: [
    HomeComponent,
    HomeSliderEidtDialogComponent 
  ],

  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule,
    RatingModule,MatDialogModule,
    MatInputModule,
    SlickModule,
    FormsModule,
    // ReactiveFormsModule,
    // MatIconModule,
  ],
  providers: [],
  exports: [HomeSliderEidtDialogComponent],
  entryComponents: [
    HomeSliderEidtDialogComponent
  ]

})

export class HomeModule {

}

