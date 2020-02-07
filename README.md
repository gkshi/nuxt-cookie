# nuxt-cookie

> Nuxt.js plugin works with browser and server side cookie.

&nbsp;

### Installation

1. Install plugin via npm or yarn  

```yarn add --dev nuxt-cookie```

2. Include plugin in nuxt config  

```javascript
// nuxt.config.js
export default {
  plugins: [
    'node_modules/nuxt-cookie'
  ],

  // optional config
  nuxtCookie: {
    prefix: 'projectname_',
    defaultOptions: {} // such as path, expired, samesite etc
  }
}
```


&nbsp;


### Basic usage

```javascript
// in vue component
this.$cookie.get('cookie_name_without_prefix')
this.$cookie.set('cookie_name_without_prefix', 'value', options)
this.$cookie.delete('cookie_name_without_prefix')  

// also available in context
context.app.$cookie.get('cookie_name_without_prefix')
context.app.$cookie.set('cookie_name_without_prefix', 'value', options)
context.app.$cookie.delete('cookie_name_without_prefix')
```
