<template lang="html">
  <div id="container">
    <div class="tagetSale">
      <h3>Test Notion</h3>
    </div>
    <div class="videoFrame" style="width:1285px;height:400px;border:0px solid #000;">
      <div class="videoFrameLeft" style="float:left;width:640px;height:370px;border:0px solid #000;">
    <youtube :video-id="videoIDLeft"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"
    ></youtube></div>
      <div class="videoFrameRight" style="float:right;width:640px;height:370px;border:0px solid #000;">
    <youtube :video-id="videoIDRight"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"   
    ></youtube></div>    
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
import getYouTubeID from 'get-youtube-id'

export default {
    props: ['title'],
    data () {
        return {
            videoIDRight: '',
            videoIDLeft: '',
        }
    },
    props: {
      youtubeLink: {
        type: String,
        default: () => ""
      }
    },

};

</script>

<style lang="css">
.tagetSale {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
.videoFrame { 
  margin: auto;
  vertical-align: middle;
}

</style>

