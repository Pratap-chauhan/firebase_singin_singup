import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { LocationStore } from '../state/reducer/reducer';
import { Store , StoreModule } from "@ngrx/store";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes }  from '@angular/router';
import { MapComponent } from './map/map.component';
import { CurrentlocationService} from './currentlocation.service';
import { TopbarComponent } from './topbar/topbar.component';
import { ProsComponent } from './pros/pros.component';
import { appRoutes } from './route';
import * as firebase from 'firebase';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    MapComponent,
    TopbarComponent,
    ProsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    //StoreModule.forRoot({LocationStore}),
    ToastrModule.forRoot(),
    BrowserAnimationsModule 
  ],
  providers: [CurrentlocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
