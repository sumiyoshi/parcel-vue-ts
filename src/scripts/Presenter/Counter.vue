<template>
    <div>
        <p>カウント：{{ counter.count }}</p>
        <button class="up" @click="onClickCountUp">countUp</button>
        <button class="down" @click="onClickCountDown">countDown</button>
    </div>
</template>

<script type="ts">
    import CountUseCase from "@ts/Domain/UseCase/CountUseCase";
    import Translator from "@ts/Domain/Translator";
    export default  {
        data() {
            return {
                counter: Translator.counter()
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