<template>
    <div class="new-song-sheet">
        <div class="new-song-sheet-title">
            新碟
        </div>
        <div class="new-song-sheet-list">
            <div class="new-song-sheet-item" v-for="(item, index) in albumList" :key="index">
                <div class="new-song-sheet-item-cover">
                    <img :src="item.picUrl"/>
                </div>
                <div class="new-song-sheet-item-title">
                    {{item.name}}
                </div>
                <div class="new-song-sheet-item-author">
                    {{item.artist.alias[0]}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import request from '@/api/request'
import API from '@/api/url'

export default {
    name: "NewAlbumSheet",
    data () {
        return {
            albumList: []
        }
    },
    created () {
        this.getNewAlbum()
    },
    methods: {
        getNewAlbum () {
            let url = API.newAlbum
            let params = {
                limit: 3
            }
            request.get(url ,params).then(res => {
                this.albumList = res.data.albums
            })
        }
    }
}
</script>

<style lang="less" scoped>
.new-song-sheet {
    padding-top: 60px;
    &-title {
        padding-bottom: 30px;
        color: #333;
        font-weight: 500;
        font-size: 70px;
        text-align: left;
    }
    &-list {
        display: inline-flex;
        width: 100%;
        flex-flow: row wrap;
        justify-content: space-around;
    }
    &-item {
        position: relative;
        flex: 1;
        min-width: 30%;
        padding: 10px 20px;
        color: #333;
        &:nth-child(1), &:nth-child(4) {
            padding-left: 0;
        }
        &:nth-child(3), &:nth-child(6) {
            padding-right: 0;
        }
        &-cover {
            width: 100%;
            height: 370px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        &-title {
            margin: 20px 0 0px;
            line-height: 70px;
            max-height: 130px;
            overflow: hidden;
            font-size: 30px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-author {
            text-align: left;
            font-size: 26px;
            font-weight: 400;
            color: #aaa;
        }
    }
}
</style>