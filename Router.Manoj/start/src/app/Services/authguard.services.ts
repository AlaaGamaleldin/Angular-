import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{
    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | Observable<boolean> | Promise<boolean>
  {
    if(this.authService.IsAuthenticated()){
        return true;
    }else{
        this.router.navigate(['/Login']);
        return false;
    }
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | Observable<boolean> | Promise<boolean>
  {
   return this.canActivate(childRoute, state);
  }
}