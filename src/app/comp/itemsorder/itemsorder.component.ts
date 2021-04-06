import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Iitem } from 'src/app/interface/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-itemsorder',
  templateUrl: './itemsorder.component.html',
  styleUrls: ['./itemsorder.component.scss'],
})
export class ItemsorderComponent implements OnInit, OnDestroy {
  @ViewChild('dt1') dt1: any;
  userUid?: string;
  tableData: Iitem[] = [];
  loading = true;
  finalSub = new Subject<null>();
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
        .getLessStockItems()
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
