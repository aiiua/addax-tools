<template>
    <div id="app" class="addax-layout">
        <div class="addax-layout-container">
            <div class="addax-layout-sider">
                <div class="addax-sider-image">
                    <img src="./assets/images/08.png" alt="">
                </div>
                <h1>常用工具导航</h1>
                <p class="opacity-8">一个常用工具导航，帮你最快到达目的地</p>
                <div class="footer-link">
                    <a href="http://www.miitbeian.gov.cn" target="_blank">宁ICP备17001712号</a>
                </div>
            </div>
            <div class="addax-layout-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="less">
@import '~@/assets/styles/theme.less';
</style>

<script>

export default {
    name: 'app'
}
</script>
