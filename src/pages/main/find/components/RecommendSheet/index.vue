<template>
    <div class="recommend-sheet">
        <div class="recommend-sheet-title">
            推荐歌单    
        </div>
        <div class="recommend-sheet-list">
            <div class="recommend-sheet-item" v-for="(item, index) in list" :key="index">
                <div class="recommend-sheet-item-cover">
                    <img :src="item.picUrl"/>
                </div>
                <div class="recommend-sheet-item-info">
                    <mu-icon size="16" value="play_arrow"></mu-icon>
                    {{item.playCount | filterCount}}
                </div>
                <div class="recommend-sheet-item-title">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import request from '@/api/request'
import API from '@/api/url'
export default {
    name: 'RecommendSheet',
    data () {
        return {
            list: []
        }
    },
    created () {
        this.getRecommendList()
    },
    methods: {
        getRecommendList () {
            let params = {
                limit:  6
            }
            request.get(API.recommentPlayList, params).then(res => {
                this.list = res.data.result
            })
        }
    },
    filters: {
        filterCount (count) {
            if ( count > 10000) {
                return Math.floor(count / 10000) + '万'
            } else if (count > 1000) {
                return Math.floor(count / 1000) + '千'
            } else if (count > 100) {
                return Math.floor(count / 100) + '百'
            }
        }
    }
}
</script>

<style lang="less" scoped>
.recommend-sheet {
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
        &-info {
            position: absolute;
            top: 20px;
            right: 30px;
            display: inline-flex;
            align-items: center;
            color: #fff;
            font-size: 28px;
            .mu-icon {
                margin-right: 10px;
            }
        }
        &-title {
            margin: 20px 0 30px;
            line-height: 70px;
            max-height: 130px;
            overflow: hidden;
            font-size: 30px;
        }
    }
}
</style>