# Example Plugins for GameVault Backend

This repository provides easy to understand examples of gamevault-backend plugins to guide you in creating GameVault plugins.

Check out each plugin file to understand its functioning.

To activate a plugin on your GameVault Server, set `PLUGIN_ENABLED` to `true` and include the raw URL of the plugin's source in the `PLUGIN_SOURCES` list in your server configuration.

For example:
```env
PLUGIN_ENABLED=true
PLUGIN_SOURCES="https://raw.githubusercontent.com/Phalcode/gamevault-backend-example-plugins/master/plugins/gamevault-chuck-norris-joke-fetcher-plugin.js"
```
