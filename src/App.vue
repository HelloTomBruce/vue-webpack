<template>
    <div class="app-container">
        <main class="app-container-main">
            <router-view></router-view>
        </main>
        <mu-container>
            <mu-bottom-nav>
                <mu-bottom-nav-item title="查快递" icon="search" to="/main/search"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="寄快递" icon="local_shipping" to="/main/send"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="更多" icon="widgets" to="/main/widgets"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="我" icon="person" to="/main/mine"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Title from '@/components/Title'
import Logo from '@/components/Logo'

export default {
    name: 'App',
    data () {
        return {
            title: 'App Title'
        }
    },
    computed: {
        ...mapGetters(['getCount'])
    },
    components: {
        Title,
        Logo
    },
    methods: {
        ...mapActions(['add'])
    }
}
</script>

<style lang="less" scoped>
.app-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    color: lightblue;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    overflow: hidden;
    &-main {
        display: block;
        flex: 1;
    }
}
</style>