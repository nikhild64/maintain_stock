import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {Message} from 'primeng//api';

@Component({
  selector: 'app-whatsnew',
  templateUrl: './whatsnew.component.html',
  styleUrls: ['./whatsnew.component.scss'],
  providers: [MessageService]
})
export class WhatsnewComponent implements OnInit {
  msgs: Message[]=[];
  constructor(private messageService: MessageService) {
    this.msgs.push({severity:'info', summary:'What\'s New', detail:'Now you can choose custom theme for the app.'});
   }

  ngOnInit(): void {
  }

}
