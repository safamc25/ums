import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './userPipe/search.pipe';
import { FilterPipe } from './userPipe/filter.pipe';
import { SortPipe } from './userPipe/sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    UsersComponent,
    AllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    SearchPipe,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
    
  ]
})
export class UsersModule { }
