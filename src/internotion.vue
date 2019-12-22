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
    
    <div class="linkInputArea">        
      <div class="b-row">
        <div>
          <h3>Think about joining</h3>
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
          <b-button @click="replacevideoLeft" variant="primary">Left Video</b-button>
          <b-button @click="replacevideoRight" variant="primary">Right Video</b-button>
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
            placeholder="Input Minimum Share as Integer"
          />
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row class="my-1">
                <b-col sm="3">
          <label for="videoReplace">
            Setting Desired Royalty Share
          </label>
                </b-col>
                <b-col sm="9">
          <b-button @click="minimumShareLeft" :pressed.sync="settingLeft" variant="primary">Desired Royalty Share on Left</b-button>
          <p>Status: <strong>{{ settingLeft }}</strong></p>
          <b-button @click="minimumShareRight" :pressed.sync="settingRight" variant="primary">Desired Royalty Share on Right</b-button>
          <p>Status: <strong>{{ settingRight }}</strong></p>
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
          <b-button id="averageShare" :pressed.sync="averageShareMethod" variant="primary">Average Share</b-button>
          <p>Average Share Status: <strong>{{ averageShareMethod }}</strong></p>
                </b-row>
                <b-row>
          <b-button id="randomShare" :pressed.sync="randomShareMethod" variant="primary">Random Share</b-button>
          <p>Random Share Status: <strong>{{ randomShareMethod }}</strong></p>
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
          <b-button pill variant="outline-secondary" @click="agreeParticipate" :pressed.sync="agreeButton">
            Agree Creating New Page
          </b-button>
          <p>Agreement Status: <strong>{{ agreeButton }}</strong></p>
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

import web3 from '../participantContract/web3'
import participantInstance from '../participantContract/participantInstance'
import participantBox from '../participantContract/participantBox'


export default {
    data() {
        return {
            videoIDRight: '',
            videoIDLeft: '',
            averageShareMethod: false,
            randomShareMethod: false,
            settingLeft: null,
            settingRight: null,
            agreeButton: null,
            processFee: '2',
            inputName: '',
            minimumShare: '',
            description: '',
            decidedShareLeft: '',
            decidedShareRight: '',
            previousAddress: '',
            amount: 0,
         };
    },
    props: {
      youtubeLink: {
        type: String,
        default: () => ""
      }
    },
    
    beforeMount() {
      participantBox.methods.returnAllParticipants().call().then((participants) => {
        this.amount = participants.length;
      });
    },
    
    methods: {
      replacevideoLeft() {        
        this.videoIDLeft = getYouTubeID(this.youtubeLink)     
      },
      replacevideoRight() {        
        this.videoIDRight = getYouTubeID(this.youtubeLink)        
      },
      minimumShareLeft() {
        web3.eth.getAccounts().then((accounts) => {
          const decidedShareLeft = this.minimumShare;
          const processFee = web3.utils.toWei(this.processFee, 'ether');
          return participantBox.methods.minimumShareLeft(this.videoIDLeft, decidedShareLeft, processFee).send({ from: accounts[0], gas: 1000000 });
        }).then(() => {
          this.videoIDLeft = '';
          this.minimumShare = '';
          return participantBox.methods.returnAllParticipants().call();        
        }).then((participants) => {
          const index = participants.length - 1;
          this.previousAddress = participants[index];
          this.settingLeft = "now you have set desired royalty share!!!";
          const lastParticipant = participantInstance(participants[index]);
          return lastParticipant.methods.returnContents().call();
        });
      },
      minimumShareRight() {
        web3.eth.getAccounts().then((accounts) => {
          const decidedShareRight = this.minimumShare;
          const processFee = web3.utils.toWei(this.processFee, 'ether');
          return participantBox.methods.minimumShareRight(this.videoIDRight, decidedShareRight, processFee).send({ from: accounts[0], gas: 1000000 });
        }).then(() => {
          this.videoIDRight = '';
          this.minimumShare = '';
          this.settingRight = "not success!"; //suppose it will be success after finishing all smart contract part
          return participantBox.methods.returnAllParticipants().call();        
        }).then((participants) => {
          const index = participants.length - 1;
          this.previousAddress = participants[index];
          this.settingRight = "now you have set desired royalty share!!!";
          const lastParticipant = participantInstance(participants[index]);
          return lastParticipant.methods.returnContents().call();
        });
      },
      agreeParticipate() {
          this.inputName = '';
          this.description = '';
          if(document.getElementById('averageShare').clicked == true) {

          } 
          else if (document.getElementById('randomShare').clicked == true) {}
          alert("please at least select one payment method!");
        /*if (!this.inputName || !this.minimumShare) {
          alert("please don't leave empty space");
        } 
        else if (!Number.isInteger(this.minimumShare) && (this.minimumShare) > 100) {
          alert("please insert integer or less than 100");
        } */
      } 
    }
}


//JhguED04OeE//this is wonderwall
//rUuJQkyLsJ0 nothing else matter
//bag link miNiq9Tvm20, tKs8hUm_GdQ, XFzYjAgrPoQ//"GBQG5DA4kdc"
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