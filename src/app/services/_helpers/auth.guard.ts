import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorageService, private router: Router, private userService: UserService){}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    if(this.tokenStorage.getToken()){
      const userRole = localStorage.getItem('ROLE');
      console.log("ittsss meee"+userRole)
      if (next.data.role && next.data.role.indexOf(userRole) === -1) {
        this.router.navigate(['/admin/dashboard']);
        return false;
      }
      return true
    }else {
      this.router.navigate(['/login'])
      return false
    }
  }

  

  
}
