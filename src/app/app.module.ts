import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LeadsPage } from '../pages/leads/leads';
import { LeadNotesPage } from '../pages/leadNotes/leadNotes';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Welcome} from '../pages/welcome/welcome';
import { Login} from '../pages/login/login';
import { Signup} from '../pages/signup/signup';
import { HttpModule } from "@angular/http";
import { AuthService } from '../providers/auth-service/auth-service';
import { LeadsService } from "../providers/leads-service";


@NgModule({
  declarations: [
    MyApp,
    LeadsPage,
    LeadNotesPage,
    ContactPage,
    HomePage,
    Welcome,
    Login,
    Signup,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LeadsPage,
    LeadNotesPage,
    ContactPage,
    HomePage,
    Welcome,
    Login,
    Signup,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    LeadsService
  ]
})
export class AppModule {}
