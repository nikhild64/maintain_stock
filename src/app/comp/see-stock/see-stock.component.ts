import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { until } from 'selenium-webdriver';
import { Iitem } from 'src/app/interface/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-see-stock',
  templateUrl: './see-stock.component.html',
  styleUrls: ['./see-stock.component.scss'],
})
export class SeeStockComponent implements OnInit, OnDestroy {
  @ViewChild('dt1') dt1: any;
  finalSub = new Subject<null>();
  tableData: Iitem[] = [];
  loading = true;
  userUid?: string;
  constructor(
    private dataService: DataService,
    private firestoreauth: AngularFireAuth
  ) {}
  ngOnDestroy(): void {
    this.finalSub.next();
    this.finalSub.unsubscribe();
  }

  ngOnInit(): void {
    this.firestoreauth.user.pipe(takeUntil(this.finalSub)).subscribe((data) => {
      this.userUid = data?.uid;
      this.dataService
        .getData('seeStock')
        ?.pipe(takeUntil(this.finalSub))
        .subscribe((d) => {
          this.tableData = d;
          this.loading = false;
        });
    });
  }
  applyFilterGlobal($event: any, stringVal: string): void {
    this.dt1.filterGlobal(
      ($event.target as HTMLInputElement).value,
      'contains'
    );
  }
}
