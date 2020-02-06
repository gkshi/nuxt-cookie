# nuxt-cookie

> Nuxt.js plugin works with browser and server side cookie.

&nbsp;

### Installation

1. Install plugin via npm or yarn  

```yarn add --dev nuxt-cookie```

2. Create plugins/nuxt-cookie.js  

```javascript
// @/plugins/nuxt-cookie.js
import Vue from 'vue'
import nuxtCookie from 'nuxt-cookie'

Vue.use(nuxtCookie, {
  prefix: 'name_prefix_' // optional
})
```

3. Include plugin in nuxt.config.js

```javascript
export default {
  plugins: [
    '@/plugins/nuxt-cookie'
  ]
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
