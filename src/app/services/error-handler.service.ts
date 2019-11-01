import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector, private zone: NgZone) { }

  handleError(error: any): void {
    const router = this.injector.get(Router);
    console.log(`catched error`, error);
    this.zone.run(() => {
      router.navigate(['.']).then(a => {
        /**
         * 1. Throw error on special type in RouterModuleConfig
         * 2. Save route to navigate
         * 3. Wait till all modules are loaded
         * 4. navigate back to saved route
          */

        console.log('navigated', router.config);
      });
    });
  }
}
