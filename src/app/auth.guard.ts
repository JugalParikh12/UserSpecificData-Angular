import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _route=inject(Router)
  let issloggedin=localStorage.getItem('isLoggedIn')
  if(issloggedin=='false'){
    alert("Not Authenticate user");
    _route.navigate(['login'])
    return false;
  }
  return true;
};
