<template>
    <div class="play-music">
        <div class="play-music-cover">
            <img :src="playing.cover"/>
        </div>
        <div class="play-music-lrc">
            <div class="play-music-lrc-item" v-for="(item, index) in playing.lrc" :key="index">
                {{item.str}}
            </div>    
        </div>
        <div class="play-music-ele">
            <audio :src="playing.url" :autoplay="false" controls/>
        </div>
    </div>
</template>

<script>
import request from '@/api/request'
import API from '@/api/url'
import { createNamespacedHelpers, mapState } from 'vuex'
const { mapActions } = createNamespacedHelpers('play')
export default {
    name: "PlayMusicPage",
    data () {
        return {
            id: ''
        }
    },
    computed: {
        ...mapState({
            playing: state => state.play.playing
        })
    },
    created () {
        this.id = this.$route.query.id
        if (this.id) {
            this.getDetail()
            this.getSongUrl()
            this.getLyric()
        }
    },
    methods: {
        ...mapActions(['setPlay', 'setPlayingUrl', 'setPlayingLyric']),
        getDetail () {
            this.setPlay(this.id)
        },
        getSongUrl () {
            this.setPlayingUrl(this.id)
        },
        getLyric () {
            this.setPlayingLyric(this.id)
        }
    }
}
</script>

<style lang="less" scoped>
.play-music {
    position: relative;
    width: 750px;
    height: 100%;
    padding: 100px 0 0;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
    &-cover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.4;
        img {
            height: 100%;
        }
    }
    &-lrc {
        flex: 1;
        padding: 20px 0;
        overflow-y: auto;
        overflow-x: hidden; 
        color: #fff;
        font-size: 26px;
        z-index: 2;
        &-item {
            padding: 0 28px;
            word-break: break-all;
        }
    }
    &-ele {
        margin: 50px 0;
        height: 100px;
        audio {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>