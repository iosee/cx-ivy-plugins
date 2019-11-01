import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PluginCComponent } from './plugin-c/plugin-c.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [PluginCComponent],
  imports: [
    CommonModule,
    MatInputModule,
    RouterModule
  ]
})
export class PluginCModule {
  constructor(private router: Router) {
    console.log(`pluginRouter: `, this.router.config);

    this.router.config.push({
      path: 'plugin',
      component: PluginCComponent,
      children: [{
        path: '',
        loadChildren: () => import('./plugin-lazy/plugin-lazy.module').then(module => module.PluginLazyModule)
      }]
    });
    console.log(`PluginCModule INITIALIZED`);
  }
}
