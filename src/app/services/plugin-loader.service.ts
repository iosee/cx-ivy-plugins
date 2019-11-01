import { Injectable, Injector } from '@angular/core';
import { CX_PLUGIN_REGISTER } from '../plugins/plugin.register';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PluginLoaderService {

  constructor(
    // private router: Router,
    private injector: Injector
  ) { }

  async loadPluginModule(moduleKey: string): Promise<any> {
    const { load, moduleName } = CX_PLUGIN_REGISTER[moduleKey];
    const module = await load();
    console.log(`load ${moduleName}: `, module);
    // if (module instanceof NgModuleFactory) {
    //   // if ViewEngine
    //   return module;
    // } else {
    //   try {
    //     // if Ivy
    //     const compiledModule = await this.compiler.compileModuleAsync(module);
    //     console.log(`compiled module ${moduleName}: `, compiledModule);
    //     return compiledModule;
    //   } catch (err) {
    //     throw err;
    //   }
    // }
    return module[moduleName];
  }

  loadPlugin(pluginName: string): Promise<void> {
    const router = this.injector.get(Router);
    // this.pluginLoader.loadPluginModule('pluginC').then(moduleFactory => {
    //   try {
    console.log(router.config);
    router.config[0].children = [{
      path: `${pluginName}-path-1234`,
      loadChildren: () => CX_PLUGIN_REGISTER[pluginName].load().then(m => m[CX_PLUGIN_REGISTER[pluginName].moduleName])
    }];
    router.resetConfig(router.config);
    // } catch (err) {
    //   throw err;
    // }
    // });
    // setTimeout(() => {
    //   router.config[0].children = [];
    //   router.resetConfig(router.config);
    // }, 1);
    return new Promise(((resolve, reject) => resolve()));
  }
}
