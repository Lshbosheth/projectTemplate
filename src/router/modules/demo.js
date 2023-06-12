import { LAYOUT } from '../constants'
export default [
  {
    path: '/demo',
    component: LAYOUT,
    redirect: '/demo/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/demo/index.vue'),
        meta: { title: '路由使用' }
      }
    ]
  }
]
