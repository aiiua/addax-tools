<template>
    <div class="addax-home">
        <Panel title="格式转换" :data="transform" />
        <Panel title="图片处理" :data="images" />
        <Panel title="音视频处理" :data="audio" />
    </div>
</template>

<script>

import Panel from 'components/panel'

export default {
    name: 'Home',

    components: {
        Panel
    },

    data () {
        return {
            transform: [
                {
                    id: 'm4a-mp3',
                    icon: 'yingyetubiao',
                    title: 'M4A到MP3转换器',
                    subtitle: '在线免费转换您的m4a文件',
                    href: 'https://convertio.co/zh/m4a-mp3/'
                },
                {
                    id: 'flv-mp4',
                    icon: 'bofangtubiao',
                    title: 'FLV 转换成 MP4',
                    subtitle: '在线且免费的 FLV 至 MP4 转换器',
                    href: 'https://convertio.co/zh/flv-mp4/'
                }
            ],
            images: [
                {
                    id: 'koutu',
                    icon: 'zhixiangtubiao',
                    title: '在线抠图',
                    subtitle: '在线替换图片背景',
                    href: 'https://www.gaoding.com/koutu'
                },
                {
                    id: 'compose',
                    icon: 'Upantubiao',
                    title: 'GIF合成',
                    subtitle: '在线生成GIF动态图片合成软件',
                    href: 'https://tool.gifhome.com/compose/'
                }
            ],
            audio: [
                {
                    id: 'cut-audio',
                    icon: 'bofangantubiao',
                    title: '音频截取',
                    subtitle: 'Audio Cutter Online Edit your music with ease',
                    href: 'https://clideo.com/cut-audio'
                },
                {
                    id: 'bearaudiotool',
                    icon: 'labtubiao',
                    title: '在线MP3剪切',
                    subtitle: '一个免费的在线MP3剪辑器，你可以直接在浏览器里剪切，裁剪，合并，分割你的音频文件',
                    href: 'https://www.bearaudiotool.com/zh/'
                },
                {
                    id: 'add-subtitles-to-video',
                    icon: 'sankuaitubiao',
                    title: '视频在线加字幕',
                    subtitle: 'Add Subtitles to Video Subtitle a video manually or with an SRT file',
                    href: 'https://clideo.com/add-subtitles-to-video'
                }
            ]
        }
    }
}
</script>
