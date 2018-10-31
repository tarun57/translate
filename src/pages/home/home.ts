import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public title : string;
public description : string;
public language : string;
public APPLE : string;
public BALL : string;
public CAT : string;
public lang: string;
constructor( public platform  : Platform,
              public statusbar : StatusBar,
              public splashScreen : SplashScreen,
              public navCtrl 		  : NavController,
              private _translate 	  : TranslateService)
              { 
                   }
  changeLanguage() {
    this._translate.use(this.language);
    this._initialiseTranslation();
  }

_initialiseTranslation(){
     setTimeout(() =>
     {
        this.title 			  = this._translate.instant("home.heading");
        this.description 	= this._translate.instant("home.description");
        this.APPLE   = this._translate.instant("home.APPLE");
        this.BALL   = this._translate.instant("home.BALL");
        this.CAT    = this._translate.instant("home.CAT");
     }, 250);
  }
  
  switchLanguage() {
    this._translate.use(this.lang);
    this._initialiseTranslation();
  }


  Go(){
    this.navCtrl.push(UsersPage);
  }

}