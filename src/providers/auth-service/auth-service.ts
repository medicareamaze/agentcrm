import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://medicareamaze.medicareamaze.com/';
//let apiUrl = 'http://192.168.1.120:8080/medicareamaze/';


@Injectable()
export class AuthService {

  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Accept","application/json");
      headers.append("Content-Type","application/json");

      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
  renewToken(token, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Accept","application/json");
      headers.append("Content-Type","application/json");
      headers.append("Authorization","Bearer "+ token);

      this.http.post(apiUrl + type, '', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
  getUser(token, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Accept","application/json");
      headers.append("Content-Type","application/json");
      headers.append("Authorization","Bearer "+ token);

      this.http.get(apiUrl + type, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}
