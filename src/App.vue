<template>
    <div class="app">
        <Logo/>
        <Title title="App"/>
        <div>
            <p>{{getCount}}</p>
            <mu-button @click="add">
                <mu-icon value="add"></mu-icon>
                Add
            </mu-button>
        </div>
        <div>
            <mu-ripple class="link-ripple" color="yellow" :opacity="0.7">
                <router-link to="/Home">go Home</router-link>
            </mu-ripple>
            <mu-ripple class="link-ripple" color="yellow" :opacity="0.7">
                <router-link to="/About">go About</router-link>
            </mu-ripple>
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
    .link-ripple {
        position: relative;
        margin-top: 20px;
        width: 120px;
        height: 50px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 16px;
        background-color: #2196f3;
        border-radius: 4px;
        color: #fff;
    }
}
</style>