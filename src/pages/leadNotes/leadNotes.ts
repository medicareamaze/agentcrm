import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
//import * as moment from 'moment';
import { LeadsType, LeadNotesType, MessageType } from '../../models';

//import { LeadNoteslist } from 'api/collections';

@Component({
  selector: 'page-leadNotes',
  templateUrl: 'leadNotes.html'
})

export class LeadNotesPage implements OnInit {

  selectedLead: LeadsType;
  name: string;
  picture: string;
  leadnotes: Observable<LeadNotesType[]>;
  // LeadNoteslist: Observable<LeadNotesType[]>;  
  message: string = '';
  autoScroller: MutationObserver;
  scrollOffset = 0;

  constructor(
    navParams: NavParams,
    private el: ElementRef
  ) {
    this.selectedLead = <LeadsType>navParams.get('lead');
    this.name = this.selectedLead.name;
    this.picture = this.selectedLead.picture;
  }

  private get leadNotesPageContent(): Element {
    return this.el.nativeElement.querySelector('.leadnotes-page-content');
  }

  private get leadNotesList(): Element {
    return this.leadNotesPageContent.querySelector('.leadnotes');
  }

  private get scroller(): Element {
    return this.leadNotesList.querySelector('.scroll-content');
  }

  ngOnInit() {
    this.autoScroller = this.autoScroll();

    let isEven = false;

    //this.leadnotes = LeadNotesType.find(
     
    //});
}


  ngOnDestroy() {
    this.autoScroller.disconnect();
  }

  autoScroll(): MutationObserver {
    const autoScroller = new MutationObserver(this.scrollDown.bind(this));

    autoScroller.observe(this.leadNotesList, {
      childList: true,
      subtree: true
    });

    return autoScroller;
  }

  scrollDown(): void {
    // Scroll down and apply specified offset
    this.scroller.scrollTop = this.scroller.scrollHeight - this.scrollOffset;
    // Zero offset for next invocation
    this.scrollOffset = 0;
  }

  onInputKeypress({ keyCode }: KeyboardEvent): void {
    if (keyCode === 13) {
   //   this.sendTextMessage();
    }
  }

  //sendTextMessage(): void {
  //  // If message was yet to be typed, abort
  //  if (!this.message) {
  //    return;
  //  }

  //  MeteorObservable.call('addMessage', MessageType.TEXT,
  //    this.selectedLead._id,
  //    this.message
  //  ).zone().subscribe(() => {
  //    // Zero the input field
  //    this.message = '';
  //  });
  //}

}


