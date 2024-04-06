import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRouterMetaTags from '@bachdgvn/vue-router-meta-tags'
import Layout from '@/layout/Index.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: { name: 'Blog' },
    children: [
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/Blog/Index.vue'),
        meta: {
          title: `Blog`
        }
      },
      {
        path: 'create',
        name: 'Create',
        component: () => import('@/views/Create/Index.vue'),
        meta: {
          title: `Blog - Create`
        }
      },
      {
        path: 'blog/:id',
        name: 'BlogID',
        component: () => import('@/views/Blog/_id.vue'),
        meta: {
          title: `Blog - Read`
        }
      },
      {
        path: 'update/:id',
        name: 'Update',
        component: () => import('@/views/Update/_id.vue'),
        meta: {
          title: `Blog - Update`
        }
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    meta: {
      title: `Blog - 404`
    },
    hidden: true
  },
  {
    path: '*',
    redirect: { name: '404' },
    hidden: true
  }
]

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    routes
  })

const router = createRouter()

router.beforeEach(VueRouterMetaTags.update)

export default router
