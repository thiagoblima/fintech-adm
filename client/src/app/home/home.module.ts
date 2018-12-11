// Core
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from '../includes/header/header.component';
import { NavComponent } from '../includes/nav/nav.component';
import { HomeComponent } from './home.component';
import { SearchComponent } from '../includes/search/search.component';

// Home Router
import { HomeRoutingModule } from './home-routing.module';

// Angular Material
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    HomeRoutingModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    HomeComponent,
    SearchComponent
]
})

export class HomeModule { }
