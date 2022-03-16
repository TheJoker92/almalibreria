import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.scss']
})
export class LibriComponent implements OnInit {


  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {
  }

}
