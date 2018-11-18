<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/todo">Todo</router-link>
            |
        </div>
        <router-view/>
    </div>
</template>

<script type="ts">
    import "@scss/app.scss";

    import TodoStore from "@ts/Infrastructure/Store/TodoStore";
    import Container from "@ts/Domain/Gateway/Container"

    if (process.env.NODE_ENV !== "test") {
        Container.bind("TodoRepository", TodoStore);
    }

</script>