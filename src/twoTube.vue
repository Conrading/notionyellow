<template lang="html">
  <container :title="title">
    <div class="title">
      <h1>HidaMari Cooking: Holloween Cookie</h1>
    </div>
    <div class="videoFrame" style="width:1285px;height:400px;border:0px solid #000;">
      <div class="videoFrameLeft" style="float:left;width:640px;height:370px;border:0px solid #000;">
    <youtube video-id="nPK0QU_u7F4"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"
    ></youtube></div>
      <div class="videoFrameRight" style="float:right;width:640px;height:370px;border:0px solid #000;">
    <youtube video-id="nPK0QU_u7F4"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 30, autoplay: 1 }"
      :mute="true"
    ></youtube></div>    
    </div>

    <div class="imageFrame" style="width:1285px;height:400px;border:0px solid #000;">
      <div class="imageLeft" style="float:left;width:640px;height:370px;border:0px solid #000;">
        <b-img center v-bind="cakeImage" src="./IMG_9102.png" alt="Image 1"></b-img></div>
      <div class="imageRight" style="float:right;width:640px;height:370px;border:0px solid #000;">
        <b-img center v-bind="cakeImage" src="./IMG_9104.png" alt="Image 2"></b-img></div>
    </div>
    
    
    
    <div class="introductiontitle">
      <h1>レシピはYouTubeにあります。</h1>
    </div>

    <div class="introduction" style="width:1285px;height:300px;border:0px solid #000;">
      <div class="introductionleft" style="float:left;width:240px;height:240px;border:0px solid #000;">
      
    <h3>Special Offering</h3>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=nPK0QU_u7F4" target="_blank" rel="noopener">YouTube</a></li>      
      <li><a href="https://www.instagram.com/p/B3wjiEmg2Y6/" target="_blank" rel="noopener">Instagram</a></li>
    </ul>
      </div>
      <div class="introductionright" style="float:right;width:1040px;height:300px;border:0px solid #000;">
        <h5>ハロウィンに向けてクッキー缶を作りました.</h5> 
          <h5>味はかぼちゃ、紫いも、抹茶、ココアの4種類.</h5>
          <h5>型抜きクッキーなので簡単に作れます.</h5>
          <h5>余った生地でストラップと市松模様も.</h5>
          <h5>スタンプクッキー型と缶はcottaで購入.</h5>
          <h5>かぼちゃパウダー、紫いもパウダーはcotta、富澤商店、ママパンなどで購入できます.</h5>
      </div>
    </div>
  </container>
</template>

<script>
import Vue from 'vue'
//import YouTubePlayer from 'youtube-player'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
//global.YouTubePlayer = YouTubePlayer;

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);


export default {
    props: ['title'],
    data () {
        return {
          cakeImage: { blank: false, blankColor: '#777', width: 400, height: 400, class: 'm1'}
        }
    },

};

</script>

<style lang="css">
.title {
  margin: auto;
  width: 900px;
  height: 70px;
  vertical-align: middle;
  padding: 10px;
  background: rgb(198, 204, 209);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  font-family: lato-bold;
  font-size: 20px;
  color: rgb(230, 21, 83);
}
.videoFrame { 
  margin: auto;
  vertical-align: middle;
}
.videoFrameLeft {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
.videoFrameRight {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
.imageFrame {
  margin: auto;
  vertical-align: middle;
}
.imageLeft{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
.imageRight{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
.introductiontitle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
.introduction {  
  margin: auto;
  vertical-align: middle;
}

</style>

