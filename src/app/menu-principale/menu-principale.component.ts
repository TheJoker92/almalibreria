import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/IUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu-principale',
  templateUrl: './menu-principale.component.html',
  styleUrls: ['./menu-principale.component.scss']
})
export class MenuPrincipaleComponent implements OnInit {

  tabGestiti: any = {'libri': false, 'autori': false, 'prestiti': false}

  constructor(public userService: UserService) {}

  ngOnInit(): void {
  }

  manangeActiveTab(tabAttivo: string) {
    for(let tab of Object.keys(this.tabGestiti)) {
      this.tabGestiti[tab] = tab == tabAttivo
    }
  }

}
