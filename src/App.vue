<template>
    <div class="app-container">
        <main class="app-container-main" :class="hasBottomNav ? 'has-bottom-nav' : ''">
            <router-view></router-view>
        </main>
        <mu-container class="footer" v-show="hasBottomNav">
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

const BottomNavList = [
    '/main/find',
    '/main/ranking',
    '/main/video',
    '/main/comment'
]

export default {
    name: 'App',
    data () {
        return {
            title: 'App Title'
        }
    },
    computed: {
        ...mapGetters(['getCount']),
        hasBottomNav () {
            return BottomNavList.indexOf(this.$route.path) !== -1
        }
    },
    components: {},
    methods: {
        ...mapActions(['add'])
    }
}
</script>

<style lang="less" scoped>
.app-container{
    width: 750px;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    color: lightblue;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    overflow: hidden;
    background: #efeff4;
    &-main {
        display: block;
        flex: 1;
        height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
        overflow-x: hidden; 
        &.has-bottom-nav {
            padding-bottom: 120px;
        }
    }
    .container.footer {
        padding: 0;
        position: fixed;
        bottom: 0;
        z-index: 100;
        .mu-bottom-nav {
            height: 120px;
        }
    }
}
</style>