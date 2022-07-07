import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'login',
		component: LoginComponent,
		pathMatch: "full"
	},
	{
		path: 'admin',
		component: AdminComponent,
		pathMatch: "full",
		canActivate: [ AuthGuard ],
		data: {
			role: "admin"
		}
	},
  	{
		path: 'user',
		component: UserComponent,
		pathMatch: "full",
		canActivate: [ AuthGuard ],
		data: {
			role: "user"
		}
	},
	{
		path: 'user/posts',
		component: UserPostComponent,
		pathMatch: "full",
		canActivate: [ AuthGuard ],
		data: {
			role: "user"
		}
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
