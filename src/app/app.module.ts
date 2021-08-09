import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { RouterComponent } from './router/router.component';
import { APIComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { UserinfomationComponent } from './user-infomation/userinfomation.component';
import { NavbarSectionComponent } from './navbar-section/navbar-section.component';
import { ApiHomeComponent } from './api-home/api-home.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { InputFormGroupComponent } from './input-form-group/input-form-group.component';
import { ImageComponent } from './image/image.component';
import { PrimeComponent } from './prime/prime.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todo',
    component: TodosComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'formgroup',
    component: FormGroupComponent,
  },
  {
    path: 'router',
    component: RouterComponent,
  },
  {
    path: 'api',
    component: ApiHomeComponent,
  },
  {
    path: 'image',
    component: ImageComponent,
  },
  {
    path: 'api/example',
    component: APIComponent,
  },
  {
    path: 'user/:id',
    component: UserinfomationComponent,
  },
  {
    path: 'prime',
    component: PrimeComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavBarComponent,
    HomeComponent,
    FormComponent,
    RouterComponent,
    APIComponent,
    UserinfomationComponent,
    NavbarSectionComponent,
    ApiHomeComponent,
    FormGroupComponent,
    InputFormGroupComponent,
    ImageComponent,
    PrimeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
