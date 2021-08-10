import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _tokenkey = 'currentUser'; //storing the token in localstorage when the user is logged in successfully
  private _user$ : BehaviorSubject<string>;
  constructor(private http: HttpClient) { 
    let parsedToken = parseJwt(localStorage.getItem(this._tokenkey));

    if(parsedToken){//when the token is parsed
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date(); //UX issue, don't want to imply the user is logged in until she makes a first backend call
      if(expires) {
        localStorage.removeItem(this._tokenkey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(parsedToken && parsedToken.unique_name); //behaviorsubject always has value
  }
 
}
