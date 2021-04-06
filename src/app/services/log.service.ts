import { Injectable } from '@angular/core';
import { AngularFireDatabase, DatabaseSnapshot } from '@angular/fire/database';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor(private db: AngularFireDatabase) {}
  addTxLog(userid: string, type: string, tx: string, email: string): void {
    const transactionRef = this.db.list('transactionlogs');

    const date = new Date().toUTCString();
    transactionRef.push({
      dated: date,
      userid,
      type,
      tx,
      email,
    });
  }
}
