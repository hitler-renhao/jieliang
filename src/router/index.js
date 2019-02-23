import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Login from '@/components/Login'
import VipCenter from '@/components/VipCenter'
import OptometryHistory from '@/components/OptometryHistory'
import OptometryDetail from '@/components/OptometryDetail'
import PointsDetail from '@/components/PointsDetail'
import Personal from '@/components/Personal'
import Error from '@/components/404'

Vue.use(Router)

Vue.use(ElementUI);

export default new Router({
  mode:'hash',
  routes: [
    { path: '/Login', name: 'Login', component: Login },
    { path: '/VipCenter', name: 'VipCenter', component: VipCenter },
    { path: '/OptometryHistory', name: 'OptometryHistory', component: OptometryHistory },
    { path: '/OptometryDetail', name: 'OptometryDetail', component: OptometryDetail },
    { path: '/PointsDetail', name: 'PointsDetail', component: PointsDetail },
    { path: '/Personal', name: 'Personal', component: Personal },
    { path: '*', name: 'Error', component: Error, hidden: true }
  ]
})
