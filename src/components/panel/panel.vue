<style lang="less">
    @import './index.less';
</style>

<template>
    <div class="addax-panel">
        <div class="addax-panel-header">
            <h2>{{title}}</h2>
        </div>
        <div class="addax-panel-body">
            <Row :gutter="24">
                <template v-for="item in data">
                    <Col :key="item.id" :xs="12" :sm="8" :md="8" :lg="8" :xl="8" :xxl="6">
                        <div class="addax-panel-item" :key="item.id">
                            <a :href="item.href" target="_blank">
                                <Icon :custom="`iconfont icon-${item.icon}`" :size="32"></Icon>
                                <h3>{{item.title}}</h3>
                                <p class="opacity-8">{{item.subtitle}}</p>
                            </a>
                        </div>
                    </Col>
                </template>
            </Row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddaxPanel',

    props: {
        title: {
            type: String,
            default: '默认标题'
        },

        data: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>
