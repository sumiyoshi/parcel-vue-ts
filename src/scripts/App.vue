<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/counter">Counter</router-link> |
            <router-link to="/todo">Todo</router-link> |
        </div>
        <router-view/>
    </div>
</template>

<script type="ts">
    import "@scss/app.scss";
</script>