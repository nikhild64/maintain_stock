import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PrimeNGConfig } from 'primeng/api';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ak-stocks';
  constructor(private themeService: ThemeService,private primengConfig: PrimeNGConfig){
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
}
}
