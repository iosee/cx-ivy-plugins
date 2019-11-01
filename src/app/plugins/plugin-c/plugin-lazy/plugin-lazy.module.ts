import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PluginLazyComponent } from './plugin-lazy/plugin-lazy.component';



@NgModule({
  declarations: [PluginLazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'yahooo',
      component: PluginLazyComponent
    }])
  ]
})
export class PluginLazyModule {
  constructor() {
    console.log(`PluginLazyModule INITIALIZED`);
  }
}
