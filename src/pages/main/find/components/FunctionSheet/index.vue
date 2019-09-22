<template>
    <div class="function-sheet">
        <div class="function-sheet-item" v-for="(item, index) in list" :key="index">
            <div class="function-sheet-item-icon">
                <mu-icon size="32" :value="item.icon"></mu-icon>
            </div>
            <div class="function-sheet-item-title">
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FunctionSheet',
    data () {
        return {
            list: [
                {
                    icon: 'today',
                    title: '每日推荐'
                },
                {
                    icon: 'queue_music',
                    title: '歌单'
                },
                {
                    icon: 'equalizer',
                    title: '排行榜'
                },
                {
                    icon: 'radio',
                    title: '电台'
                },
                {
                    icon: 'subscriptions',
                    title: '直播'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.function-sheet {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding: 60px 0;
    border-bottom: 1px solid #fff;
    &-item {
        padding: 0 56px;
        color: #2196f3;
        &:first-child {
            padding-left: 0;
        }
        &:last-cihld {
            padding-right: 0;
        }
        &-title {
            white-space: nowrap;
        }
    }
}
</style>