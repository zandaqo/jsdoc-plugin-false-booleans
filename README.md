This plugin for JSDoc 3 sets the default values of boolean params to `false` unless another value is specified in the comments.

# Install
```
npm i jsdoc-plugin-false-booleans
```
and add to the list of plugins in your JSDoc configuration file:
```
{
    "plugins": ["./node_modules/jsdoc-plugin-named-defaults/false-booleans.js"]
}
```
# Example
```javascript
/**
* @param {boolean} [later] whether to do start doing stuff a bit later
* @param {boolean} [async] whether to do stuff asynchronously
*/
function doStuff(later, async) {

}
```
the plugin will set `false` as the default value for both `later` and `async` params in the resulting documentation.
