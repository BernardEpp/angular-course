import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNkRvHufqrH3J03hvGNm_gOOljoNMxNkk",
  authDomain: "my-dev-app-89ad8.firebaseapp.com",
  projectId: "my-dev-app-89ad8",
  storageBucket: "my-dev-app-89ad8.appspot.com",
  messagingSenderId: "864813674664",
  appId: "1:864813674664:web:3c884db94e1a57899fd29d"
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
