<template>
    <div class="app-container">
        <main class="app-container-main">
            <router-view></router-view>
        </main>
        <mu-container class="footer">
            <mu-bottom-nav>
                <mu-bottom-nav-item title="发现" icon="search" to="/main/find"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="榜单" icon="equalizer" to="/main/ranking"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="视频" icon="music_video" to="/main/video"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="评论" icon="message" to="/main/comment"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
    components: {},
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
    background: #efeff4;
    &-main {
        display: block;
        flex: 1;
        height: 100%;
        box-sizing: border-box;
        padding-bottom: 300px;
        overflow-y: auto;
        overflow-x: hidden; 
    }
    .container.footer {
        padding: 0;
        position: fixed;
        bottom: 0;
        z-index: 100;
    }
}
</style>