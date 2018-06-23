import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

let apiUrl = 'http://localhost:8089/';
//let apiUrl = 'http://192.168.1.120:8080/medicareamaze/';


@Injectable()
export class LeadsService {

  constructor(public http: Http) {
    console.log('Hello Leads Provider');
  }

  public callLead(phone:string) {

    console.log('get leads api');

   

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      
      this.http.get(apiUrl + 'api/twiliocall/phone/' + phone)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  public getLeads(){

    console.log('get leads api');

    let ret: Observable<any[]>;

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");

      this.http.get(apiUrl + 'api/medicanja/leads', { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
    //// return AuthApiPromise
    //this.http.get(apiUrl + 'api/medicanja/leads')
    //  .toPromise()
    //  .then((res) => {
    //    console.log('leads promise');
    //    console.log(res);
    //    resolve(res.json());
    //   // let ret = res;
    //   // return res;
    //  })
    //  .catch((err) => {
    //    console.log('leads err');
    //    console.log(err);
    //    return (err);
    //  });
    //return ret;
  }

}
