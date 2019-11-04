import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public router: Router
  ) { }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
        this.ngZone.run(() => {
          this.router.navigate(['products']);
        })
        localStorage.setItem('user', result.user.email);
        var token = result.user.getIdToken()
        .then(token => {
          localStorage.setItem('token', token);
        });
        
    }).catch((error) => {
        console.log(error)
    })
  }

  get isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return (token !== null ) ? true : false;
  }


  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['']);
    })
  }

}
