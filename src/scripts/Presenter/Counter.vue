<template>
    <div>
        <p>カウント：{{ counter.count }}</p>
        <button @click="onClickCountUp">countUp</button>
        <button @click="onClickCountDown">countDown</button>
    </div>
</template>

<script type="ts">
    import CountUseCase from "@ts/Domain/UseCase/CountUseCase";
    export default  {
        data() {
            return {
                counter: {count: 0}
            };
        },
        methods: {
            onClickCountUp() {
                CountUseCase.countUp(this.counter)
            },
            onClickCountDown() {
                CountUseCase.countDown(this.counter)
            }
        }
    };
</script>

<style scoped lang="scss">

</style>