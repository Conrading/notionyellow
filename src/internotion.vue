<template lang="html">
  <div id="container">
    <div class="tagetSale">
      <h3>Notion On-Line Sales: CHELSEA FLAP SHOULDER BAG</h3>
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
    <youtube :video-id="videoIDLowerLeft"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"
    ></youtube></div>
      <div class="videoFrameRight" style="float:right;width:640px;height:370px;border:0px solid #000;">
    <youtube :video-id="videoIDLowerRight"
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @paused="paused"
      @buffering="buffering"
      @qued="qued"
      :player-vars="{start: 0, autoplay: 1 }"      
    ></youtube></div>    
    </div>
    
    <div class="linkInputArea">        
      <div class="b-row">
        <div>
          <h3>Create New Page</h3>
        </div>
                <b-container fluid>
        <div>
            <b-row class="my-1">
          <label for="youtubeLink">
            YouTube Link
          </label>
            </b-row>
            <b-row>
          <b-form-input
            id="youtubeLink"
            v-model="youtubeLink"
            placeholder="Input YouTube Link"
          />
            </b-row>
        </div>
                </b-container>
        <div>
            <b-row class="my-1">
                <b-col sm="3">
          <label for="videoReplace">
            Replace Video
          </label>
                </b-col>
                <b-col sm="9">
          <b-button @click.once="videoUpperLeft" variant="primary">Upper Left Video</b-button>
          <b-button @click.once="videoUpperRight" variant="primary">Upper Right Video</b-button>
          <b-button @click="replacevideoLowerLeft" variant="primary">Lower Left Video</b-button>
          <b-button @click="replacevideoLowerRight" variant="primary">Lower Right Video</b-button>
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row class="my-2">
          <label for="shareMethod">
            Choose Royalty Share Method
          </label>
            </b-row>
                <b-row>
          <b-button :pressed.sync="averageShareMethod" variant="primary">Average Share</b-button>
          <p>Average Share Status: <strong>{{ averageShareMethod }}</strong></p>
                </b-row>
                <b-row>
          <b-button :pressed.sync="radomShareMethod" variant="primary">Random Share</b-button>
          <p>Random Share Status: <strong>{{ radomShareMethod }}</strong></p>
                </b-row>
        </div>    
        <div>
            <b-row class="my-1">
                <b-col sm="3">
          <label for="inputName">
            Account
          </label>
                </b-col>
                <b-col sm="9">
          <b-form-input
            id="inputName"
            v-model="inputName"
            placeholder="Input Account"
          />
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row class="my-1">
                <b-col sm="3">
          <label for="minimumShare">
            Minimum Share
          </label>
                </b-col>
                <b-col sm="9">
          <b-form-input
            id="minimumShare"
            v-model="minimumShare"
            placeholder="Input Minimum Share between 100 and 0 as Integer"
          />
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row class="my-1">
                <b-col sm="3">
          <label for="Description">
            Remark
          </label>
                </b-col>
                <b-col sm="12">
          <br>
          <b-form-textarea
            id="Description"
            v-model="description"
            rows="3"
          />
                </b-col>
            </b-row>
        </div>
        <div>
          <b-button pill variant="outline-secondary" @click="agreeParticipate" :pressed.sync="agreeParticipate">
            Agree Creating New Page
          </b-button>
          <p>Agreement Status: <strong>{{ agreeParticipate }}</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import getYouTubeID from 'get-youtube-id'

export default {
    data() {
        return {
            videoIDLowerRight: 'miNiq9Tvm20',//miNiq9Tvm20
            videoIDLowerLeft: 'GBQG5DA4kdc',//"GBQG5DA4kdc"    
            averageShareMethod: false,
            radomShareMethod: false,
            agreeParticipate: false
         }
    },
    props: {
      youtubeLink: {
        type: String,
        default: () => ""
      }
    },
    methods: {
      replacevideoLowerRight: function() {        
          this.videoIDLowerRight = getYouTubeID(this.youtubeLink)        
      },
      replacevideoLowerLeft: function() {        
          this.videoIDLowerLeft = getYouTubeID(this.youtubeLink)        
      },
      videoUpperLeft: function() {
        alert('sorry, you are not allowed to replace this one, this one is from my very beautiful colleague!')
      },
      videoUpperRight: function() {
        alert('sorry, you are not allowed to replace this one, this one is from my very beautiful colleague!')
      }
    }
}



//Chinese:輸入資料, 選擇更換影片, 更換左上右上影片, 選擇版稅分享模式, 平均模式, 隨機模式, 帳戶號碼, 輸入帳戶, 輸入連結, 輸入百分比(低於100/高於0, 且為整數)


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
.button {
  background-color: #008cba;
  color: white;
}
.linkInputArea {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
</style>