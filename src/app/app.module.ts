import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { MessagesListComponent } from './pages/messages-list/messages-list.component';
import { MessagesDetailComponent } from './pages/messages-detail/messages-detail.component';

import { routes } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { MessagesListItemComponent } from './messages-list-item/messages-list-item.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ProfileViewComponent,
    ProfileEditComponent,
    BrowseComponent,
    MessagesListComponent,
    MessagesDetailComponent,
    MenuComponent,
    MessagesListItemComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
