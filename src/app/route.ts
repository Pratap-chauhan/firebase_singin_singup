import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProsComponent } from './pros/pros.component';
import { MapComponent } from './map/map.component';
import { SignupComponent } from './signup/signup.component';


export const appRoutes : Routes = [
    {
      path : '' , component:LoginComponent
    },
    {
      path : "dashboard" , component:DashboardComponent
    },
    {
      path : "map" , component:MapComponent
    },
    {
      path : "pros" , component:ProsComponent
    },
    {
      path : "SignUp" , component:SignupComponent
    },
      {
      path : "LogIn" , component:SignupComponent
    },
    {
      path : "**" , component: LoginComponent
    },
    
  ];