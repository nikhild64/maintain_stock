import { Injectable } from '@angular/core';
import { Iitem } from '../interface/interfaces';
import { map, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LogService } from './log.service';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  dummyData: Iitem[] = [];
  userUid?: string;
  userEmail?: string;

  itemsCollection: AngularFirestoreCollection<Iitem> = this.afs.collection<Iitem>(
    'items'
  );
  itemsCollectiondemo: AngularFirestoreCollection<Iitem> = this.afs.collection<Iitem>(
    'items'
  );

  constructor(
    private afs: AngularFirestore,
    private firestoreauth: AngularFireAuth,
    private router: Router,
    private logService: LogService
  ) {
    firestoreauth.user.subscribe((data) => {
      this.userEmail = data?.email as string;

      this.userUid = data?.uid;
      this.itemsCollection = this.afs.collection<Iitem>(`${data?.uid}`);
    });
  }

  addItem(item: Iitem): Observable<boolean> {
    this.logService.addTxLog(
      (this.userUid as string) || 'Starting',
      'UPDATE',
      'addScreen',
      (`${JSON.stringify(item)}` as string) || 'Starting'
    );

    this.itemsCollection.add(item).then((data) => {});
    return of(true);
  }
  addLogFromAddScreen(): void {
    this.logService.addTxLog(
      (this.userUid as string) || 'Starting',
      'GET',
      'addScreen',
      (this.userEmail as string) || 'Starting'
    );
  }

  getData(from: string): Observable<Iitem[]> | null {
    this.logService.addTxLog(
      this.userUid as string,
      'GET',
      from,
      this.userEmail as string
    );
    if (!this.userUid) {
      return null;
    } else {
      this.itemsCollection = this.afs.collection<any>(`${this.userUid}`);
      return this.itemsCollection.snapshotChanges().pipe(
        map((data) => data.map((v) => ({ id: v.payload.doc.id, ...v.payload.doc.data() })))
      );
    }
  }
  getLessStockItems(): Observable<Iitem[]> | undefined {
    return this.getData('lessStock')?.pipe(
      map((data) => {
        const tempList: Iitem[] = [];

        data.forEach((item) => {
          if (item.quantity <= 5) {
            tempList.push(item);
          }
        });
        return tempList;
      })
    );
  }
  updateQuantity(quantity: number, id: string): Promise<void> {
    this.logService.addTxLog(
      (this.userUid as string) || 'Starting',
      'UPDATE',
      (`${this.userUid}/${id}/${quantity}` as string) || 'Starting',
      (this.userEmail as string) || 'Starting'
    );

    return this.afs.doc(`${this.userUid}/${id}`).update({  quantity });
  }
}
