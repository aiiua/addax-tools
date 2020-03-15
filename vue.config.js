const path = require('path')
const resolve = (dir) => {
    return path.join(__dirname, dir)
}

module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '常用工具导航'
        }
    },

    // 用chainWebpack做webpack高级配置；包括对loader的添加，修改；以及插件的配置
    chainWebpack: config => {
        // 解析连接符号
        config.resolve.symlinks(false)
        // 删除
        config.plugins.delete('prefetch')
        // 解析别名
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('styles', resolve('src/assets/styles'))
            .set('images', resolve('src/assets/images'))
    },

    css: {
        // 运行环境
        extract: false,
        // 启用 CSS modules for all css / pre-processor files(v3用modules v4用requireModuleExtension)
        requireModuleExtension: true,
        // css预处理器配置
        loaderOptions: {
            // pass options to css-loader
            css: {
                // 模块
                modules: {
                    // 定义编译后.class定制哈希类名
                    localIdentName: '[local]_[hash:base64:8]'
                },
                // 编译后成驼峰格式
                localsConvention: 'camelCaseOnly'
            },
            // pass options to less-loader
            less: {
                // js启用
                javascriptEnabled: true
            }
        }
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/styles/common/index.less')
            ]
        },
        lintStyleOnBuild: true
    }
}
