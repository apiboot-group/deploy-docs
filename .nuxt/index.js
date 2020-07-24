import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_271edc58 from 'nuxt_plugin_plugin_271edc58' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_workbox_22653d86 from 'nuxt_plugin_workbox_22653d86' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_79c1909e from 'nuxt_plugin_nuxticons_79c1909e' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_http_1ce23226 from 'nuxt_plugin_http_1ce23226' // Source: ./http.js (mode: 'all')
import nuxt_plugin_docsplugin095cf4a3_1e195e8f from 'nuxt_plugin_docsplugin095cf4a3_1e195e8f' // Source: ./docs.plugin.095cf4a3.js (mode: 'all')
import nuxt_plugin_pluginserver_d72ee1dc from 'nuxt_plugin_pluginserver_d72ee1dc' // Source: ./color-mode/plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_2eaf1d8a from 'nuxt_plugin_pluginclient_2eaf1d8a' // Source: ./color-mode/plugin.client.js (mode: 'client')
import nuxt_plugin_init_5aefaeb1 from 'nuxt_plugin_init_5aefaeb1' // Source: ../plugins/init.js (mode: 'all')
import nuxt_plugin_directives_d0867c0c from 'nuxt_plugin_directives_d0867c0c' // Source: ../plugins/directives (mode: 'all')
import nuxt_plugin_intersectionobserverclient_6b6d967c from 'nuxt_plugin_intersectionobserverclient_6b6d967c' // Source: ../plugins/intersection-observer.client.js (mode: 'client')
import nuxt_plugin_vueobservevisibilityclient_42d89e44 from 'nuxt_plugin_vueobservevisibilityclient_42d89e44' // Source: ../plugins/vue-observe-visibility.client.js (mode: 'client')
import nuxt_plugin_gaclient_594060ae from 'nuxt_plugin_gaclient_594060ae' // Source: ../plugins/ga.client.js (mode: 'client')
import nuxt_plugin_adblockclient_6cd502f2 from 'nuxt_plugin_adblockclient_6cd502f2' // Source: ../plugins/adblock.client.js (mode: 'client')
import nuxt_plugin_newsletterclient_653877cd from 'nuxt_plugin_newsletterclient_653877cd' // Source: ../plugins/newsletter.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"nuxtjs.org"},{"hid":"author","name":"author","content":"alexchopin"},{"hid":"description","name":"description","content":"Nuxt.js official website"},{"hid":"theme-color","name":"theme-color","content":"#41B883"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"nuxtjs.org"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"nuxtjs.org"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Nuxt.js official website"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.google-analytics.com"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fdocsearch.js\u002F2\u002Fdocsearch.min.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.3ebd472c.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.c20795.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.c20795.png","sizes":"512x512"}],"script":[{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fdocsearch.js\u002F2\u002Fdocsearch.min.js","async":true,"defer":true},{"hid":"nuxt-color-mode-script","innerHTML":"!function (){\"use strict\";var e=window,t=document,s=t.documentElement,n=[\"dark\",\"light\"],a=function(e){for(var s=e+\"=\",n=t.cookie.split(\";\"),a=0;a\u003Cn.length;a++){for(var o=n[a];\" \"===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(s))return o.substring(s.length,o.length)}return null}(\"nuxt-color-mode\")||\"light\",o=\"system\"===a?i():a;function r(e){var t=e+\"-mode\";s.classList?s.classList.add(t):s.className+=\" \"+t}function c(t){return e.matchMedia(\"(prefers-color-scheme\"+t+\")\")}function i(){if(e.matchMedia&&\"not all\"!==c(\"\").media)for(var t of n)if(c(\":\"+t).matches)return t;return\"light\"}r(o),e[\"__NUXT_COLOR_MODE__\"]={preference:a,value:o,getColorScheme:i,addClass:r,removeClass:function(e){var t=e+\"-mode\";s.classList?s.classList.remove(t):s.className=s.className.replace(new RegExp(t,\"g\"),\"\")}}}();\n","pbody":true}],"bodyAttrs":{"class":["font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"]},"style":[],"__dangerouslyDisableSanitizersByTagID":{"nuxt-color-mode-script":["innerHTML"]},"title":"nuxtjs.org","htmlAttrs":{"lang":"zh"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_271edc58 === 'function') {
    await nuxt_plugin_plugin_271edc58(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_22653d86 === 'function') {
    await nuxt_plugin_workbox_22653d86(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_79c1909e === 'function') {
    await nuxt_plugin_nuxticons_79c1909e(app.context, inject)
  }

  if (typeof nuxt_plugin_http_1ce23226 === 'function') {
    await nuxt_plugin_http_1ce23226(app.context, inject)
  }

  if (typeof nuxt_plugin_docsplugin095cf4a3_1e195e8f === 'function') {
    await nuxt_plugin_docsplugin095cf4a3_1e195e8f(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_d72ee1dc === 'function') {
    await nuxt_plugin_pluginserver_d72ee1dc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_2eaf1d8a === 'function') {
    await nuxt_plugin_pluginclient_2eaf1d8a(app.context, inject)
  }

  if (typeof nuxt_plugin_init_5aefaeb1 === 'function') {
    await nuxt_plugin_init_5aefaeb1(app.context, inject)
  }

  if (typeof nuxt_plugin_directives_d0867c0c === 'function') {
    await nuxt_plugin_directives_d0867c0c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_intersectionobserverclient_6b6d967c === 'function') {
    await nuxt_plugin_intersectionobserverclient_6b6d967c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueobservevisibilityclient_42d89e44 === 'function') {
    await nuxt_plugin_vueobservevisibilityclient_42d89e44(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_gaclient_594060ae === 'function') {
    await nuxt_plugin_gaclient_594060ae(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_adblockclient_6cd502f2 === 'function') {
    await nuxt_plugin_adblockclient_6cd502f2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_newsletterclient_653877cd === 'function') {
    await nuxt_plugin_newsletterclient_653877cd(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
