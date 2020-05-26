<template>
    <mu-container class="find-page">
        <mu-carousel>
            <mu-carousel-item v-for="(item, index) in bannerList" :key="index" @click="linkToDetail(item)">
                <img :src="item.pic">
            </mu-carousel-item>
        </mu-carousel>
        <FunctionSheet/>
        <RecommendSheet/>
        <NewAlbumSheet/>
    </mu-container>
</template>

<script>
import request from '@/api/request'
import API from '@/api/url'
import FunctionSheet from './components/FunctionSheet'
import RecommendSheet from './components/RecommendSheet'
import NewAlbumSheet from './components/NewAlbumSheet'
export default {
    name: 'FindPage',
    data () {
        return {
            bannerList: []
        }
    },
    components: {
        FunctionSheet,
        RecommendSheet,
        NewAlbumSheet
    },
    created () {
        this.getBannerList()
    },
    methods: {
        getBannerList () {
            let params = {
                type: 2
            }
            request.get(API.bannerList, params).then(res => {
                this.bannerList = res.data.banners
            })
        },
        linkToDetail (detail) {
            let { typeTitle } = detail
        }
    }
}
</script>

<style lang="less">
.container.find-page {
    width: 750px;
    padding: 28px;
    box-sizing: border-box;
    .mu-carousel {
        height: 300px;
        img {
            width: 100%;
            height: 100%;
        }
        .mu-carousel-button.mu-icon-button {
            width: 50px;
            height: 50px;
            margin-top: -25px;
        }
        .mu-carousel-indicators {
            height: 50px;
        }
        .mu-carousel-indicator-button {
            width: 35px;
            height: 35px;
        }
        .mu-carousel-indicators {
            .mu-carousel-indicator-icon {
                width: 15px;
                height: 15px;
            }
        }
        .mu-carousel-svg-icon {
            width: 35px;
            height: 35px;
        }
    }
}
</style>