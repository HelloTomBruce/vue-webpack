<template>
    <div class="recommend-sheet">
        <div class="recommend-sheet-title">
            推荐歌单    
        </div>
        <div class="recommend-sheet-list">
            <div class="recommend-sheet-item" @click="linkToDetail(item.id)" v-for="(item, index) in list" :key="index">
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
        },
        linkToDetail (id) {
            this.$router.push(`/sheet/detail?id=${id}`)
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
    padding-top: 30px;
    &-title {
        padding-bottom: 15px;
        color: #333;
        font-weight: 500;
        font-size: 35px;
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
        padding: 5px 10px;
        color: #333;
        &:nth-child(1), &:nth-child(4) {
            padding-left: 0;
        }
        &:nth-child(3), &:nth-child(6) {
            padding-right: 0;
        }
        &-cover {
            width: 100%;
            height: 185px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }
        }
        &-info {
            position: absolute;
            top: 10px;
            right: 15px;
            display: inline-flex;
            align-items: center;
            color: #fff;
            font-size: 24px;
            .mu-icon {
                margin-right: 5px;
            }
        }
        &-title {
            margin: 10px 0 15px;
            line-height: 35px;
            max-height: 65px;
            overflow: hidden;
            font-size: 24px;
        }
    }
}
</style>