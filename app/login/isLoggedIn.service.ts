/**
 * Created by ilya on 29/01/2017.
 */
import {Token} from './token';

export function isLoggedin() {
  let isLogged= JSON.parse(localStorage.getItem('isLoggedIn'));
  console.log('client '+(localStorage.getItem('user'))+' token logged '+isLogged);
  //TODO back end request to session checks user logged in to backend
  return isLogged.value === "true";
}

export function checkPermissions(permission: string) {
  let theToken= <Token>JSON.parse(localStorage.getItem('user'));
  //TODO back end request to session checks user permissions to backend
  console.log('client '+(localStorage.getItem('user'))+' token type'+theToken);
  let permissions  =  theToken.permissions;
  for(let value in permissions){
    if(value.valueOf() === permission){
      return true;
    }
  }
  return false;
}

export function getTokenFromBrowser() :Token {
  let theToken= <Token>JSON.parse(localStorage.getItem('user'));
  return theToken;
}

