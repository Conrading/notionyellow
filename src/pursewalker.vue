<template lang="html">
  <container :title="title">
    <div class="title">
      <h3>CHELSEA FLAP SHOULDER BAG</h3>
    </div>
    <div class="videoFrame" style="width:1285px;height:400px;border:0px solid #000;">
      <div class="videoFrameLeft" style="float:left;width:640px;height:370px;border:0px solid #000;">
    <youtube video-id="tKs8hUm_GdQ"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"
    ></youtube></div>
      <div class="videoFrameRight" style="float:right;width:640px;height:370px;border:0px solid #000;">
    <youtube video-id="XFzYjAgrPoQ"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"   
    ></youtube></div>    
    </div>
    <div class="videoFrame" style="width:1285px;height:400px;border:0px solid #000;">
      <div class="videoFrameLeft" style="float:left;width:640px;height:370px;border:0px solid #000;">
    <youtube video-id="GBQG5DA4kdc"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"
    ></youtube></div>
      <div class="videoFrameRight" style="float:right;width:640px;height:370px;border:0px solid #000;">
    <youtube video-id="miNiq9Tvm20"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"      
    ></youtube></div>    
    </div>
    
    
    
    <div class="introductiontitle">
      <h5>詳情</h5>
    <ul>
      <li><a href="https://www.toryburch.eu/chelsea-flap-shoulder-bag/48730.html" target="_blank" rel="noopener">官方網站</a></li>     
    </ul>
    </div>
    
  </container>
  <div class="container" id="bulletintest">
      <div class="col-sm-6">
          <div class="panel panel-default">
              <div class="panel-heading">
                  <h5>輸入購買數量</h5></div>
              <div class="panelBody">
                  <div>
                      <input type="text" id="account" placeholder="帳戶號碼" v-model="event.name"></div>
                  <div>
                      <input type="text" id="purchase" placeholder="購買數量" v-model="event.amount"></div>
                  <div>
                      <textarea type="text" id="remark" placeholder="備註" v-model="event.description"></textarea></div>
                  <div>
                      <input type="date" id="date" placeholder="日期" v-model="event.date"></div>
                  <button @click="addPurchase">上傳</button></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
//import YouTubePlayer from 'youtube-player'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
//global.YouTubePlayer = YouTubePlayer;
import Vuex from 'vuex'
import { mapState, mapMutations } from 'vuex'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);


export default {
    props: ['title'],
    data () {
        return {
          panelBody: { account: '', purchase: '', remark: '', date: '',},
        }
    },
    methods: {
        addPurchase() {
            this.$store.commit({
                type: 'setUserData',
                userData: this.panelBody,
            });
            this.$router.push('/');
        },
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
.introductiontitle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
.bulletin {  
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}

</style>

