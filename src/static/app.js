import Vue from 'vue'
import App from 'App.vue'
import router from './router'

//region ElementUI
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {locale})
//endregion

//region DI Container
import Container from '@ts/Domain/Gateway/Container'
Container.bind('TodoRepository', require('@ts/Infrastructure/Store/TodoStore').default)
//endregion

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


