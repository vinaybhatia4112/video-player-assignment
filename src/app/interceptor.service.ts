import {Injectable} from '@angular/core';
import {tap} from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    //how to update the request Parameters
    const updatedRequest = request.clone({
      headers: request.headers.set("Source", "Web")
        .set("Accept", "application/json, text/plain, */*")
        .set("Refer", "http://localhost:4200/")
    });

    console.log("Before making api call: ");
    return next.handle(updatedRequest).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log("api call success :");
          }
        },
        error => {
          if (event instanceof HttpResponse) {
            console.log("api call error :");
          }
        }
      )
    );
  }

}
