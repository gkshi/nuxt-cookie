class NuxtCookie {
  constructor (options) {
    this.prefix = options.prefix || ''
    this.serverSideCookie = options.serverSideCookie || null
    this.defaultOptions = {
      path: '/',
      'max-age': 10,
      samesite: 'lax',
      ...options.defaultOptions
    }
  }

  set (name, value, daysOrOptions = {}) {
    if (process.server) {
      return
    }
    name = `${this.prefix}${name}`
    let options = daysOrOptions
    if (Number.isInteger(daysOrOptions)) {
      options = { expires: daysOrOptions }
    }
    options = { ...this.defaultOptions, ...options }
    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
    for (const optionKey in options) {
      updatedCookie += '; ' + optionKey
      const optionValue = options[optionKey]
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue
      }
    }
    document.cookie = updatedCookie
  }

  get (name = '') {
    let cookie = null
    try {
      cookie = document.cookie
    } catch (e) {
      cookie = this.serverSideCookie
    }
    if (!cookie) {
      return null
    }
    name = `${this.prefix}${name}`
    const matches = cookie.match(new RegExp(
      // eslint-disable-next-line no-useless-escape
      '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ))
    return matches ? decodeURIComponent(matches[1]) : null
  }

  delete (name, options) {
    let opts = { expires: -1 }
    if (options !== undefined) {
      opts = Object.assign(options, opts)
    }
    this.set(name, '', opts)
  }
}

export default {
  install (Vue, options) {
    Vue.prototype.$cookie = new NuxtCookie(options)
  }
}
