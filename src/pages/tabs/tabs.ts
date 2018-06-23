import { Component } from '@angular/core';

import { LeadsPage } from '../leads/leads';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LeadsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
