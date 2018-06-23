
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs';
//import * as moment from 'moment';
import { LeadsType, MessageType, LeadNotesType } from '../../models';
import { LeadNotesPage } from '../leadNotes/leadNotes';
import { LeadsService } from "../../providers/leads-service";

@Component({
  selector: 'page-lead',
  templateUrl: 'leads.html'
})
export class LeadsPage implements OnInit {
  leads: Observable<any[]>;//Observable<LeadsType[]>;// Observable<any[]>;//
  responseData: any;
  picture: string;

  constructor(private navCtrl: NavController, public leadsService: LeadsService, private toastCtrl: ToastController) {
    this.picture = 'https://randomuser.me/api/portraits/thumb/lego/1.jpg';
    this.leads = this.findleads();
    console.log(this.leads);
  }

  ngOnInit() {
//...some lines skipped...
      
  }

  showMessages(lead: LeadsType): void {
   // this.navCtrl.push(LeadNotesPage, { lead });
    this.leadsService.callLead(lead.phone);
  }

  //removeChat(lead: LeadsType): void {
  //  this.leads.remove({ _id: lead._id }).subscribe(() => {
  //  });

  private findleads(): Observable<any[]> {
    // private findleads(): any {
    console.log('Get leads');
    this.responseData = this.leadsService.getLeads();
    if (this.responseData) {
      return (this.responseData);
    }
    else {
      this.presentToast("Leads error!!");
    }
    return (this.responseData);

    //this.leadsService.getLeads().then((result) => {
    //  console.log('Find leads');
    //  this.responseData = result;
    //  console.log(this.responseData);
    //  if (this.responseData) {

    //  }
    //  else {
    //    this.presentToast("Leads error!!");
    //  }
    //  return Observable.of(this.responseData);
    //}, (err) => {
    //  this.presentToast("Leads Error!!");

    // }

  };


    //return Observable.of([
    //  {
    //    _id: '0',

    //    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    //    lastMessage: {
    //      content: 'You on your way?',
    //   //   createdAt: moment().subtract(1, 'hours').toDate(),
    //      type: MessageType.TEXT
    //    }
    //  },
    //  {

    //    picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
    //    lastMessage: {
    //      content: 'Hey, it\'s me',
    //     // createdAt: moment().subtract(2, 'hours').toDate(),
    //      type: MessageType.TEXT
    //    }
    //  },
    //  {

    //    picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
    //    lastMessage: {
    //      content: 'I should buy a boat',
    //    //  createdAt: moment().subtract(1, 'days').toDate(),
    //      type: MessageType.TEXT
    //    }
    //  },
    //  {

    //    picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
    //    lastMessage: {
    //      content: 'Look at my mukluks!',
    //    //  createdAt: moment().subtract(4, 'days').toDate(),
    //      type: MessageType.TEXT
    //    }
    //  },
    //  {

    //    picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
    //    lastMessage: {
    //      content: 'This is wicked good ice cream.',
    //    //  createdAt: moment().subtract(2, 'weeks').toDate(),
    //      type: MessageType.TEXT
    //    }
    //  }
    //]);
  


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

 
}

