<template>
    <h1 class="title">{{title}}</h1>
</template>

<script>
export default {
    name: 'TitleComponent',
    data () {
        return {}
    },
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" scoped>
.title {
    color: lightblue;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
}
</style>