import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('login') login?: NgForm;
  display = false;
  signup = false;
  content = '';
  loading=false;
  constructor(private firestoreAuth: AngularFireAuth, private router: Router) {
    firestoreAuth.signOut();
  }
  ngOnInit(): void { }
  googleLogin(): void {
    this.loading=true;
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.firestoreAuth.signInWithPopup(provider).then(
      (d) => {
        this.loading=false;
        this.router.navigate(['/add-stock']);
      },
      (error) => {
        this.loading=false;
        this.content = error.message;
        this.display = true;
      }
    );
  }
  loginForm(): void {
    this.loading=true;
    if (this.login?.valid) {
      if (this.signup) {
        this.firestoreAuth
          .createUserWithEmailAndPassword(
            this.login?.value.username,
            this.login?.value.password
          )
          .then(
            (data) => {
              this.loading=false;
              this.router.navigate(['/add-stock']);
            },
            (error) => {
              this.loading=false;
              this.content = error.message;
              this.display = true;
            }
          );
      }
      else {
        this.firestoreAuth
          .signInWithEmailAndPassword(
            this.login?.value.username,
            this.login?.value.password
          )
          .then(
            (data) => {
              this.loading=false;
              this.router.navigate(['/add-stock']);
            },
            (error) => {
              this.loading=false;
              this.content = error.message;
              this.display = true;
            }
          );
      }
    } else {
      this.loading=false;
      this.content = 'The username and password are required fields';
      this.display = true;
    }
  }
}
