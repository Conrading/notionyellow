<template lang="html">
  <container :title="title">
    <div id="title">
      <h1>The Novel: Ultimate China Union</h1>
    </div>
    <div id="1" style="width:1285px;height:370px;border:0px solid #000;">
      <div id="2" style="float:left;width:640px;height:370px;border:0px solid #000;">
    <youtube video-id="SKP4V0SvOx8"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"
    ></youtube></div>
      <div id="3" style="float:right;width:640px;height:370px;border:0px solid #000;">
    <youtube video-id="f3-m2w3_OTM"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"
    ></youtube></div>
    </div>
    <div id="introductiontitle">
      <h1>Book Introduction</h1>
    </div>
    <h3>Special Offering</h3>
    <ul>
      <li><a href="https://www.pubu.com.tw/ebook/118916" target="_blank" rel="noopener">Read It On-Line</a></li>
      <li><a href="https://www.books.com.tw/products/0010743324" target="_blank" rel="noopener">Buy It</a></li>
      <li><a href="https://www.instagram.com/sichangyozu/" target="_blank" rel="noopener">Writer Instagram</a></li>
    </ul>
    <div id="introduction" style="width:1285px;height:7000px;border:0px solid #000;">
      <div id="introductionleft" style="float:left;width:240px;height:270px;border:0px solid #000;">
      <img src="./ultimateChina.jpg">
      </div>
      <div id="introductionright" style="float:right;width:1040px;height:7000px;border:0px solid #000;">
        <h3>China is separated into seven parts but a union in this si-fi story, and no one knows whether centralized power can elevate union.</h3> 
          <h3>The main character is searching for himself, for bigger life achievement, for self satisfaction, and more he searches, more confused he has.</h3>
          <h3>We might have thought we have clear life goal, and we encourage ourself to chase it, but sometimes, we might also get confused while time goes.</h3>
          <h3>We want it better, but never know the price, maybe someday we could stand that high, while we are all blind.</h3>
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

export default {
    props: ['title'],
    data () {
        return {}
    },
}

</script>

<style lang="css">
</style>

