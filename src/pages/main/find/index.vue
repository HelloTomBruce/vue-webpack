<template>
    <mu-container class="find-page">
        <mu-carousel>
            <mu-carousel-item v-for="(item, index) in bannerList" :key="index" @click="linkToDetail(item)">
                <img :src="item.imageUrl">
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
    padding: 56px;
    .mu-carousel {
        height: 600px;
        img {
            width: 100%;
            height: 100%;
        }
        .mu-carousel-button.mu-icon-button {
            width: 100px;
            height: 100px;
            margin-top: -50px;
        }
        .mu-carousel-indicators {
            height: 100px;
        }
        .mu-carousel-indicator-button {
            width: 70px;
            height: 70px;
        }
        .mu-carousel-indicators {
            .mu-carousel-indicator-icon {
                width: 30px;
                height: 30px;
            }
        }
        .mu-carousel-svg-icon {
            width: 70px;
            height: 70px;
        }
    }
}
</style>