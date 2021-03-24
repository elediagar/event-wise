import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Router } from '@angular/router';
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import Swal from 'sweetalert2';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    logOut$: Observable<boolean>;

    constructor(
        private router: Router,
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    console.log(evt.body);
                    if (evt.body.error === "el token está caducado") {
                        localStorage.removeItem('token_event')
                        Swal.fire({
                            title: 'Lo sentimos, la sesión ha caducado',
                            confirmButtonText: `Continuar`,
                        })
                            .then(result => {
                                this.router.navigate(['/login'])
                            })
                    } else {
                        return evt.body.error
                    }
                }
            }),
            catchError((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    //log error 
                }
                return of(err);
            }));



    }




}