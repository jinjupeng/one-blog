<template>
  <div class="post-video">
    <el-row :gutter="20">
      <el-col :span="16">
        <video-player
          class="video-player-box"
          :options="playerOptions"
        >
        </video-player>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import * as API from '@/api/video/'

export default {
  name: 'ShowVideo',
  components: {
    videoPlayer
  },
  data() {
    return {
      video: {},
      playerOptions: {
        fluid: true,
        autoplay: false,
        sources: [{
          type: 'video/mp4',
          src: ''
        }]
      }
    }
  },
  beforeMount() {
    this.load()
  },
  methods: {
    load() {
      API.getVideo(this.$route.params.id).then((res) => {
        this.video = res.data
        this.playerOptions.sources[0].src = this.video.url
      })
    }
  }
}
</script>

<style>
</style>
