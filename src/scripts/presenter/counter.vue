<template>
    <div>
        <p>
            {{ greeting }}
        </p>
    </div>
</template>

<script type="ts">
    export default {
        data() {
            return {greeting: 'カウンター'};
        }
    };
</script>

<style scoped lang="scss">

</style>