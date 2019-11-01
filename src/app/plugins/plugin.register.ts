
export interface CxPluginManifest {
  load: () => any;
  moduleName: string;
}

export const CX_PLUGIN_REGISTER: { [key: string]: CxPluginManifest } = {
  pluginC: {
    load: () => import('./plugin-c/plugin-c.module'),
    moduleName: 'PluginCModule'
  }
};
