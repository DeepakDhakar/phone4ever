import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { VerifyEmailComponent } from "./verify-email/verify-email.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { ProblemDetailsComponent } from './problem-details/problem-details.component';

var config = {
  apiKey: "AIzaSyB6ikaA5uvSRVuHGqpoYObetsXWdHI3CTQ",
  authDomain: "myjtcproject.firebaseapp.com",
  databaseURL: "https://myjtcproject.firebaseio.com",
  projectId: "myjtcproject",
  storageBucket: "myjtcproject.appspot.com",
  messagingSenderId: "548939019789",
  appId: "1:548939019789:web:2ffd0a5f1f3e633d950744",
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    ProblemDetailsComponent
  ],
  entryComponents: [],

  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    // AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
