import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  checkAuth(): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return this.router.parseUrl('/login');
  }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    return this.checkAuth();
  }

  canActivateChild(): boolean | UrlTree | Observable<boolean | UrlTree> {
    return this.checkAuth();
  }
}
