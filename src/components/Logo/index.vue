<template>
    <div class="logo">
        <img src="@/assets/img/logo.png" class="logo-img"/>
    </div>
</template>

<script>
export default {
    name: 'LogoComponent',
    data () {
        return {}
    }
}
</script>

<style lang="less" scoped>
.logo {
    text-align: center;
    &-img {
        width: 200px;
        height: 200px;
    }
}
</style>