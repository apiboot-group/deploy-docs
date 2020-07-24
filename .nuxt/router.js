import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ba765a9a = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _82c32268 = () => interopDefault(import('../pages/design.vue' /* webpackChunkName: "pages/design" */))
const _44cc5df2 = () => interopDefault(import('../pages/resources.vue' /* webpackChunkName: "pages/resources" */))
const _244b1184 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _1c06642d = () => interopDefault(import('../pages/sponsor-nuxtjs.vue' /* webpackChunkName: "pages/sponsor-nuxtjs" */))
const _41724f9e = () => interopDefault(import('../pages/support.vue' /* webpackChunkName: "pages/support" */))
const _5529252a = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _3bafea50 = () => interopDefault(import('../pages/themes.vue' /* webpackChunkName: "pages/themes" */))
const _f595f470 = () => interopDefault(import('../pages/video-courses.vue' /* webpackChunkName: "pages/video-courses" */))
const _bde39d2a = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _960bdb98 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _65731934 = () => interopDefault(import('../pages/_section.vue' /* webpackChunkName: "pages/_section" */))
const _11ac6040 = () => interopDefault(import('../pages/_section/release-notes.vue' /* webpackChunkName: "pages/_section/release-notes" */))
const _e0537122 = () => interopDefault(import('../pages/_section/_slug.vue' /* webpackChunkName: "pages/_section/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _ba765a9a,
    name: "blog"
  }, {
    path: "/design",
    component: _82c32268,
    name: "design"
  }, {
    path: "/resources",
    component: _44cc5df2,
    name: "resources"
  }, {
    path: "/shop",
    component: _244b1184,
    name: "shop"
  }, {
    path: "/sponsor-nuxtjs",
    component: _1c06642d,
    name: "sponsor-nuxtjs"
  }, {
    path: "/support",
    component: _41724f9e,
    name: "support"
  }, {
    path: "/team",
    component: _5529252a,
    name: "team"
  }, {
    path: "/themes",
    component: _3bafea50,
    name: "themes"
  }, {
    path: "/video-courses",
    component: _f595f470,
    name: "video-courses"
  }, {
    path: "/blog/:slug",
    component: _bde39d2a,
    name: "blog-slug"
  }, {
    path: "/",
    component: _960bdb98,
    name: "index"
  }, {
    path: "/:section",
    component: _65731934,
    name: "section",
    children: [{
      path: "release-notes",
      component: _11ac6040,
      name: "section-release-notes"
    }, {
      path: ":slug?",
      component: _e0537122,
      name: "section-slug"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
