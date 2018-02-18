import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { MessagesListComponent } from './pages/messages-list/messages-list.component';
import { MessagesDetailComponent } from './pages/messages-detail/messages-detail.component';

export const routes: Routes = [
  { path: 'login',            component: LoginComponent},
  { path: 'signup',           component: SignupComponent},
  { path: 'home',             component: HomeComponent},
  { path: 'forgot-password',  component: ForgotPasswordComponent},
  { path: 'profile',          component: ProfileViewComponent},
  { path: 'profile/edit',     component: ProfileEditComponent},
  { path: 'browse',           component: BrowseComponent},
  { path: 'messages',         component: MessagesListComponent},
  { path: 'messages/:id',     component: MessagesDetailComponent},
];
