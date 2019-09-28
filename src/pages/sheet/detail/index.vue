<template>
    <mu-container class="sheet-detail">
        <div class="sheet-detail-desc">
            <div class="sheet-detail-desc-left">
                <img :src="details.coverImgUrl"/>
            </div>
            <div class="sheet-detail-desc-right">
                <div class="sheet-detail-desc-title">
                    {{details.name}}    
                </div>
                <div class="sheet-detail-desc-creator">
                    <img class="sheet-detail-desc-creator-img" :src="details.creator.avatarUrl"/>
                    <span class="sheet-detail-desc-creator-name">{{details.creator.nickname}}</span>
                </div>
                <div class="sheet-detail-desc-desc">
                    {{details.description}}
                </div>
            </div>
        </div>
        <div class="sheet-detail-count">
            <div class="sheet-detail-count-item">
                <mu-icon size="26" value="comment"></mu-icon>
                <span>{{details.commentCount}}</span>
            </div>   
            <div class="sheet-detail-count-item">
                <mu-icon size="26" value="share"></mu-icon>
                <span>{{details.shareCount}}</span>
            </div>
            <div class="sheet-detail-count-item">
                <mu-icon size="26" value="cloud_download"></mu-icon>
                <span>下载</span>
            </div>
            <div class="sheet-detail-count-item">
                <mu-icon size="26" value="check_circle"></mu-icon>
                <span>多选</span>
            </div>
        </div>
        <div class="sheet-detail-list">
            <div class="sheet-detail-list-info">
                <div class="sheet-detail-list-info-left">
                    <mu-icon size="22" class="play-icon" value="play_circle_outline"></mu-icon>
                    <span>播放全部</span>
                    <span class="total-count">(共{{details.trackCount}}首)</span>
                </div>
                <mu-button small color="red" class="collect-btn">
                    <mu-icon value="add"></mu-icon>
                    收藏({{details.subscribedCount}})
                </mu-button>
            </div>
            <div class="sheet-detail-list-item" @click="linkToPlay(index)"
                v-for="(item, index) in details.tracks" :key="index">
                <div class="sheet-detail-list-item-left">
                    <span class="sheet-detail-list-item-sort">
                        {{index + 1}}
                    </span>    
                    <div class="sheet-detail-list-item-info">
                        <div class="sheet-detail-list-item-name">{{item.name}}</div>
                        <div class="sheet-detail-list-item-user">{{item.ar[0].name}}</div>
                    </div>
                </div>
                <div class="sheet-detail-list-item-operate">
                    <mu-icon v-if="item.mv" size="16" value="music_video"></mu-icon>
                    <mu-icon size="16" value="more_vert"></mu-icon>
                </div>
            </div>
        </div>
        <div class="sheet-detail-sub-list">
            <div class="sheet-detail-sub-list-img">
                <img :src="item.avatarUrl" v-for="(item, index) in details.subscribers.slice(0, 6)" :key="index"/>
            </div>  
            <div class="sheet-detail-sub-list-tip">
                {{details.subscribedCount | filterCount}}人收藏    
            </div>      
        </div>
    </mu-container>
</template>

<script>
import request from '@/api/request'
import API from '@/api/url'
import Title from '@/components/Title'
export default {
    name: 'SheetDetailPage',
    data () {
        return {
            id: '',
            details: {
                creator: {},
                tracks:  [],
                subscribers: []
            }
        }
    },
    components: {
        Title
    },
    created () {
        this.id = this.$route.query.id
        this.getDetail()
    },
    methods: {
        getDetail () {
            let params = {
                id:  this.id
            }
            request.get(API.sheetDetail, params).then(res => {
                this.details = res.data.playlist
            })
        },
        linkToPlay (index) {
            let id = this.details.trackIds[index].id
            this.$router.push(`/play/music?id=${id}`)
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

<style lang="less">
.sheet-detail {
    width: 750px;
    box-sizing: border-box;
    background: rgb(143, 178, 201);
    &.container {
        padding: 0;
    }
    &-desc {
        display: inline-flex;
        padding: 28px;
        width: 100%;
        flex-flow: row nowrap;
        align-items: flex-start;
        &-left {
            width: 250px;
            height: 250px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        &-right {
            flex: 1;
            height: 250px;
            padding: 10px 0 0 30px;
            text-align: left;
            overflow: hidden;
        }
        &-title {
            line-height: 45px;
            overflow: hidden;
            font-size: 36px;
            font-weight: 500;
            color: #fff;
        }
        &-creator {
            padding-top: 10px;
            &-img {
                width: 35px;
                height: 35px;
                margin-right: 10px;
                border-radius: 50%;
                vertical-align: text-bottom;
            }
            &-name {
                font-size: 26px;
                color: #fff;
            }
        }
        &-desc {
            padding-top: 20px;
            font-size: 24px;
            color: #fff;
        }
    }
    &-count {
        display: inline-flex;
        width: 100%;
        align-items: center;
        padding: 28px 0;
        &-item {
            padding: 0 20px;
            flex: 1;
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: #fff;
        }
    }
    &-list {
        padding: 20px 28px;
        background: #fff;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        &-info {
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            color: #333;
            font-size: 28px;
            &-left {
                display: inline-flex;
                align-items: center;
            }
            .play-icon {
                margin-right: 20px;
            }
            .total-count {
                margin-left: 5px;
                font-size: 20px;
                color: #7fb49a;
            }
            .collect-btn {
                float: right;
                align-self: flex-end;
                font-size: 20px;
            }
        }
        &-item {
            width: 100%;
            margin-bottom: 30px;
            display: inline-flex;
            align-items: center;
            flex-flow: row nowrap;
            justify-content: space-between;
            font-size: 24px;
            color: #333;
            text-align: left;
            &-left {
                display: inline-flex;
                flex: 1;
                align-items: center;
             }
            &-sort {
                margin-right: 25px;
                margin-left: 15px;
                color: #7f849a;
            }
            &-name {
                max-width: 550px;
                font-size: 26px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            &-user {
                color: #7f849a;
                font-size: 20px;
            }
            &-operate {
                .mu-icon {
                    margin-left: 20px;
                    vertical-align: middle;
                }
            }
        }
    }
    &-sub-list {
        padding: 0px 28px;
        display: inline-flex;
        width: 100%;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        &-img {
            text-align: left;
            img {
                width: 70px;
                height: 70px;
                margin-right: 20px;
                border-radius: 50%;
            }
        }
        &-tip {
            font-size: 20px;
            color: #7f849a;
        }
    }
}
</style>