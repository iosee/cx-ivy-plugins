import { BrowserModule } from '@angular/platform-browser';
import { APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppPreloadStrategyService } from './services/app-preload-strategy.service';
import { CxViewportComponent } from './components/viewport/viewport.component';
import { PluginLoaderService } from './services/plugin-loader.service';
import { ErrorHandlerService } from './services/error-handler.service';

export function loadPluginsFactory(pluginLoaderService: PluginLoaderService) {
  return () => {
    return pluginLoaderService.loadPlugin('pluginC');
  };
}

@NgModule({
  declarations: [
    AppComponent,
    CxViewportComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([{
      path: '',
      component: CxViewportComponent
    }], {
      preloadingStrategy: AppPreloadStrategyService
    })
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: loadPluginsFactory,
    multi: true,
    deps: [PluginLoaderService]
  }, {
    provide: ErrorHandler,
    useClass: ErrorHandlerService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
