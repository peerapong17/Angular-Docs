import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
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
    path: 'router',
    component: RouterComponent,
  },
  {
    path: 'api',
    component: ApiHomeComponent,
  },
  {
    path: 'api/example',
    component: APIComponent,
  },
  {
    path: 'user/:id',
    component: UserinfomationComponent,
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
    ApiHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
