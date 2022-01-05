/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\MyCode\\gnimiah-blog-reco\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-15b99ca4",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-15b99ca4").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-45dca2ca",
    path: "/blogs/category1/2018/121501.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-45dca2ca").then(next)
    },
  },
  {
    name: "v-093f3f0a",
    path: "/blogs/category1/2019/092101.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-093f3f0a").then(next)
    },
  },
  {
    name: "v-b1cd81ac",
    path: "/blogs/category2/2016/121501.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b1cd81ac").then(next)
    },
  },
  {
    name: "v-34e0ef55",
    path: "/about/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("About", "v-34e0ef55").then(next)
    },
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-6a7bdb6a",
    path: "/blogs/category2/2017/092101.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6a7bdb6a").then(next)
    },
  },
  {
    name: "v-2374da86",
    path: "/blogs/other/guide.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2374da86").then(next)
    },
  },
  {
    name: "v-37f35198",
    path: "/docs/theme-reco/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-37f35198").then(next)
    },
  },
  {
    path: "/docs/theme-reco/index.html",
    redirect: "/docs/theme-reco/"
  },
  {
    name: "v-4bc3e1d7",
    path: "/docs/theme-reco/api.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4bc3e1d7").then(next)
    },
  },
  {
    name: "v-744727ad",
    path: "/docs/theme-reco/plugin.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-744727ad").then(next)
    },
  },
  {
    name: "v-198d4412",
    path: "/docs/theme-reco/theme.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-198d4412").then(next)
    },
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-1368f264",
    path: "/tag/tag1/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-1368f264").then(next)
    },
    meta: {"pid":"tags","id":"tag1"}
  },
  {
    path: "/tag/tag1/index.html",
    redirect: "/tag/tag1/"
  },
  {
    name: "v-1368f226",
    path: "/tag/tag2/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-1368f226").then(next)
    },
    meta: {"pid":"tags","id":"tag2"}
  },
  {
    path: "/tag/tag2/index.html",
    redirect: "/tag/tag2/"
  },
  {
    name: "v-1368f1e8",
    path: "/tag/tag3/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-1368f1e8").then(next)
    },
    meta: {"pid":"tags","id":"tag3"}
  },
  {
    path: "/tag/tag3/index.html",
    redirect: "/tag/tag3/"
  },
  {
    name: "v-1368f1aa",
    path: "/tag/tag4/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-1368f1aa").then(next)
    },
    meta: {"pid":"tags","id":"tag4"}
  },
  {
    path: "/tag/tag4/index.html",
    redirect: "/tag/tag4/"
  },
  {
    name: "v-5ce69b3a",
    path: "/categories/category1/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-5ce69b3a").then(next)
    },
    meta: {"pid":"categories","id":"category1"}
  },
  {
    path: "/categories/category1/index.html",
    redirect: "/categories/category1/"
  },
  {
    name: "v-5ce69b59",
    path: "/categories/category2/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-5ce69b59").then(next)
    },
    meta: {"pid":"categories","id":"category2"}
  },
  {
    path: "/categories/category2/index.html",
    redirect: "/categories/category2/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]