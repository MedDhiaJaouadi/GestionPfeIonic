import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
const firebaseConfig = {
  apiKey: "AIzaSyApdHylVpXOwHLvGny1Scv-SVHcR2lHCZc",
  authDomain: "gestionpfe-2605d.firebaseapp.com",
  projectId: "gestionpfe-2605d",
  storageBucket: "gestionpfe-2605d.appspot.com",
  messagingSenderId: "151131294621",
  appId: "1:151131294621:web:268cdf1ed87d9364917d74"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule,AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
