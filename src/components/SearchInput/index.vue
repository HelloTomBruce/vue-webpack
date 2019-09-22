<template>
    <mu-paper :z-depth="2" class="search-input">
        <mu-text-field v-model="keyword" label=""
            action-icon="search" placeholder="请输入快递单号" @change="change"
        ></mu-text-field>
    </mu-paper>
</template>

<script>
export default {
    name: 'SearchInput',
    data () {
        return {
            keyword: ''
        }
    },
    props: {
        onChange: {
            type: Function,
            default: () => {}
        }
    },
    methods: {
        change (keyword) {
            this.onChange(keyword)
        }
    }
}
</script>

<style lang="less" scoped>
.search-input {
    padding: 0 28px;
    background: #fff;
    border-radius: 8px;
    .mu-input {
        margin: 0;
    }
}
</style>