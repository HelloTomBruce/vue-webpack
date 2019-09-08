<template>
    <div class="app">
        <Logo/>
        <Title title="App"/>
        <div>
            <p>{{getCount}}</p>
            <button @click="add">Add</button>
        </div>
        <div>
            <router-link to="/Home">go Home</router-link>
            <router-link to="/About">go About</router-link>
        </div>
        <router-view></router-view>
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
.app {
    color: lightblue;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
}
</style>