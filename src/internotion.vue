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

    <div>
      <div class="tagetSale">
        <h3>Conrad Explain Here</h3>
      </div>
      <div class="inforInputArea">
        <h5>You would create first block when you decide your minimum royalty share, then once you press 'Agree Joining Collaboration' button, second block is created</h5>
        <h5>left side can be product introduction video, while right side can be anyone who is willing to sale the product</h5>
        <h5>so, in the coming future, we can put product sale information here, visitors can buy product from this area</h5>
        <h5>another case, left side can be guitar player, right side can be singer, it can be quite fun, but the synchronization is problem so far</h5>
      </div>
    </div>

    <div class="tagetSale">        
      <div class="b-row">
        <h3>Think about joining</h3>
      </div>
    </div>


    <div class="InputFrame" style="width:1285px;height:250px;border:0px solid #000;">
      <div class="InputFrameLeft" style="float:left;width:640px;height:70px;border:0px solid #000;">
        <div>
            <b-row class="my-1">
          <label for="youtubeLink">
            YouTube Link
          </label>
            </b-row>
            <b-row>
          <b-form-input
            class="videoLinkInput"
            id="youtubeLink"
            v-model="youtubeLink"
            placeholder="Input YouTube Link"
          />
            </b-row>
        </div>
        <div>
            <b-row class="heightSetting">
                <b-col>Replace Video <b-button @click="replacevideoLeft" variant="primary">Left Video</b-button>
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row>
                <b-col>Input Minimum Share</b-col>
                <b-col><b-form-input
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
                <b-col>
          <b-button @click="minimumShareLeft" :pressed.sync="settingLeft" variant="primary">Desired Royalty Share on Left</b-button>
          <p>Status: <strong>You have set {{ settingLeft }} minimum share</strong></p>
                </b-col>
            </b-row>
        </div>
      </div>

      <div class="InputFrameRight" style="float:right;width:640px;height:170px;border:0px solid #000;">
        <div>
            <b-row class="my-1">
          <label for="youtubeLink">
            YouTube Link
          </label>
            </b-row>
            <b-row>
          <b-form-input
            class="videoLinkInput"
            id="youtubeLink"
            v-model="youtubeLink"
            placeholder="Input YouTube Link"
          />
            </b-row>
        </div>
        <div>
            <b-row class="heightSetting">
                <b-col>Replace Video <b-button @click="replacevideoRight" variant="primary">Right Video</b-button>
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row>
                <b-col>Input Minimum Share</b-col>
                <b-col><b-form-input
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
                <b-col>
          <b-button @click="minimumShareRight" :pressed.sync="settingRight" variant="primary">Desired Royalty Share on Right</b-button>
          <p>Status: <strong>You have set {{ settingRight }} minimum share</strong></p>
                </b-col>
            </b-row>
        </div>
      </div>
    </div>

            <b-row class="my-2">
          <div class="tagetSale">
            <h3>Choose Royalty Share Method</h3>
          </div>
            </b-row>

                <b-container fluid class="inforInputArea">
        <div>
            <b-row>
                <b-col>Average Share Status: <strong>{{ averageShareMethod }}</strong>
          <b-button ref="averageShare" :pressed.sync="averageShareMethod" variant="primary">Average Share</b-button>
                </b-col>
                <b-col>Random Share Status: <strong>{{ randomShareMethod }}</strong>
          <b-button ref="randomShare" :pressed.sync="randomShareMethod" variant="primary">Random Share</b-button>
                </b-col>
            </b-row>
        </div>    
        <div>
            <b-row class="my-1">
                <b-col>Account:  <b-form-input
            id="inputName"
            v-model="inputName"
            placeholder="Input Account"
          />
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row class="my-1">
                <b-col>Remark:   <br>
          <b-form-textarea
            class="Description"
            v-model="description"
            rows="3"
          />
                </b-col>
            </b-row>
        </div>
        <div>
          <b-button pill variant="outline-secondary" @click="agreeParticipate" :pressed.sync="agreeButton">
            Agree Joining Collaboration
          </b-button>
          <p>Agreement Status: <strong>{{ agreeButton }}</strong></p>
        </div>

                </b-container>
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
            averageShareMethod: true,
            randomShareMethod: true,
            settingLeft: null,
            settingRight: null,
            agreeButton: null,
            processFee: '2',
            inputName: '',
            minimumShare: null,
            description: '',
            decidedShareLeft: null,
            decidedShareRight: null,
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
        if(Number(this.minimumShare) < 0 || Number(this.minimumShare) > 100) {
          alert('please input minimum share a positive number, or less than 100');
          return;
        }
        web3.eth.getAccounts().then((accounts) => {
          this.decidedShareLeft = this.minimumShare;
          if((Number(this.decidedShareLeft) + Number(this.decidedShareRight)) > 100) {
            alert('royalty exceed 100%, please input less royalty share');
            return;
          }
          const processFee = web3.utils.toWei(this.processFee, 'ether');
          return participantBox.methods.minimumShareLeft(this.videoIDLeft, this.decidedShareLeft, processFee).send({ from: accounts[0], gas: 1000000 });
        }).then(() => {
          this.settingLeft = this.decidedShareLeft;
          return participantBox.methods.returnAllParticipants().call();        
        }).then((participants) => {
          this.settingLeft = null;
          const index = participants.length - 1;
          this.previousAddress = participants[index];
          const lastParticipant = participantInstance(participants[index]);
          return lastParticipant.methods.returnContents().call();
        });
      },
      minimumShareRight() {
        if(Number(this.minimumShare) < 0 || Number(this.minimumShare) > 100 ) {
          alert('please input minimum share a positive number, or less than 100');
          return;
        }
        web3.eth.getAccounts().then((accounts) => {
          this.decidedShareRight = this.minimumShare;
          if((Number(this.decidedShareLeft) + Number(this.decidedShareRight)) > 100) {
            alert('royalty exceed 100%, please input less royalty share');
            return;
          }
          const processFee = web3.utils.toWei(this.processFee, 'ether');
          return participantBox.methods.minimumShareRight(this.videoIDRight, this.decidedShareRight, processFee).send({ from: accounts[0], gas: 1000000 });
        }).then(() => {
          this.settingRight = this.decidedShareRight; 
          return participantBox.methods.returnAllParticipants().call();        
        }).then((participants) => {
          this.settingRight = null;
          const index = participants.length - 1;
          this.previousAddress = participants[index];
          const lastParticipant = participantInstance(participants[index]);
          return lastParticipant.methods.returnContents().call();
        });
      },
      agreeParticipate() {
        if((this.averageShareMethod) == false && (this.randomShareMethod) == false) {
          alert("please at least select one payment method!");
          this.agreeButton = null;
          return
        }
        web3.eth.getAccounts().then((accounts) => {
          if((this.averageShareMethod) == true && (this.randomShareMethod) == true) {
            const resultAverageShare = ((100 - (Number(this.decidedShareLeft) + Number(this.decidedShareRight)))/ 2);
            this.agreeButton = "You now agree both share method.";
            return participantInstance.methods.averageShareCalculation(resultAverageShare, this.inputName, this.description).send({ from: accounts[0], gas: 1000000 });
          }
          else if ((this.averageShareMethod) == true) {
            const resultAverageShare = ((100 - (Number(this.decidedShareLeft) + Number(this.decidedShareRight)))/ 2); 
            this.agreeButton = "You have agreed average share method.";
            return participantInstance.methods.averageShareCalculation(resultAverageShare, this.inputName, this.description).send({ from: accounts[0], gas: 1000000 });
          }
          else if ((this.randomShareMethod) == true) {
            this.agreeButton = "You have agreed random share method.";
            return participantInstance.methods.randomShareCalculation(this.inputName, this.description).send({ from: '0x2c65a8e0e59b72b0f4207d28daa986c719753ae9', gas: 1000000 });
          }
        });


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
.InputFrame { 
  margin: auto;
  vertical-align: middle;
}
.heightSetting {
  height: 70px;
}
.InputFrameLeft { 
  margin: auto;
  text-align: center;
}
.InputFrameRight { 
  margin: auto;
  text-align: center;
}
.videoLinkInput {
  width: 400px;
}
.button {
  background-color: #008cba;
  color: white;
}
.inforInputArea {
  margin: auto;
  text-align: center;
}
.Description {
  width: 700px;
  height: 150px;
}
</style>