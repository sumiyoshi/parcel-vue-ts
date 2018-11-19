import Vue from 'vue'
import App from 'App.vue'

//region ElementUI
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {locale})
//endregion

//region Router
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: require('../router')
})
//endregion

//region DI Container
import Container from '@ts/Domain/Gateway/Container'
Container.set(require('../container'))
//endregion

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


