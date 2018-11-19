module.exports = [
    {
        path: '/',
        name: 'home',
        component: require('Presenter/Home.vue').default
    },
    {
        path: '/todo',
        name: 'todo',
        component: require('Presenter/Todo.vue').default
    }
]