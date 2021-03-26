import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { EventService } from '../services/event.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(
        private router: Router,
        private eventService: EventService
    ) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (localStorage.getItem('token_event')) {
            this.eventService.checkTocken()
            return true;
        } else {
            Swal.fire({
                title: 'Para poder crear eventos debes iniciar sesión',
                confirmButtonText: `Continuar`,
            })
                .then(result => {
                    this.router.navigate(['/login'])
                })
            return false;
        }
    }

}