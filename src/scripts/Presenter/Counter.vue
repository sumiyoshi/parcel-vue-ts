<template>
    <div>
        <p>カウント：{{ count }}</p>
        <button @click="onClickCountUp">countUp</button>
        <button @click="onClickCountDown">countDown</button>
    </div>
</template>

<script type="ts">

    import Counter from "@ts/Domain/Entity/Counter";
    import CountUseCase from "@ts/Domain/UseCase/CountUseCase";

    export default {
        data() {
            return {
                counter: null,
                count: 0
            };
        },
        created() {
            this.count = 0;
            this.counter = new CountUseCase(new Counter);
        },
        methods: {
            onClickCountUp() {
                this.counter.up();
                this.count = this.counter.count()
            },
            onClickCountDown() {
                this.counter.down();
                this.count = this.counter.count()
            }
        }
    };
</script>

<style scoped lang="scss">

</style>