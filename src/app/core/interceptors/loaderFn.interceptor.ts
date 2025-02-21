import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable, finalize } from "rxjs";

export const SPINNER_INTERCEPTOR_FN = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const SPINNER = inject(NgxSpinnerService);
  let peticiones = 0

  SPINNER.show();
  peticiones++;

  return next(req)
    .pipe(
      finalize(() => {
        peticiones--;

        if (peticiones === 0)
          SPINNER.hide();
      })
    )
}