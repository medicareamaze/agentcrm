import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {AuthService} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  
  resposeData : any;
  userData = {"login":"", "password":""};

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){
   if(this.userData.login && this.userData.password){
        this.authService.postData(this.userData, "@login").then((result) =>{
          this.resposeData = result;      
          console.log(this.resposeData);
          this.authService.getUser(this.resposeData.token,'@users/'+this.userData.login).then((res)=>{
            if(this.resposeData.token) {
                localStorage.setItem('userToken',this.resposeData.token);
                localStorage.setItem('userData',JSON.stringify(res));
                this.navCtrl.push(TabsPage);
            }
            else{
              this.presentToast("Please enter valid username and password");
            }
          }, (err)=>{
            this.presentToast("Please enter valid username and password");
            
          });
        }, (err) => {
              //Connection failed message
              this.presentToast("Please enter valid username and password");
        });
    }
    else{
      this.presentToast("Enter username and password");
    }
  
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}