export interface GameVaultPluginModule {
  metadata: GameVaultPluginModuleMetadataV1;
}

export interface GameVaultPluginModuleMetadataV1 {
  // Name of the Plugin.
  name: string;
  // Your Name, Email,Username or Company of the author.
  author: string;
  // Version of the Plugin, e.g. "1.0.0".
  version?: string;
  // Describe what the Plugin does and use how to use it.
  description?: string;
  // Website or Github URL of the Plugin.
  website?: string;
  // License Name or License URL of the Plugin.
  license?: string;
  // Some keywords to describe the Plugin.
  keywords?: string[];
  // Dependencies of the Plugin. (Plugins needed to use this Plugin)
  dependencies?: GameVaultPluginModuleMetadataV1[];
}