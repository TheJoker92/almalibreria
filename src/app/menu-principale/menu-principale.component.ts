import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principale',
  templateUrl: './menu-principale.component.html',
  styleUrls: ['./menu-principale.component.scss']
})
export class MenuPrincipaleComponent implements OnInit {

  tabGestiti: any = {'libri': false, 'autori': false, 'prestiti': false}

  constructor() { }

  ngOnInit(): void {
  }

  manangeActiveTab(tabAttivo: string) {
    for(let tab of Object.keys(this.tabGestiti)) {
      this.tabGestiti[tab] = tab == tabAttivo
    }
  }

}
