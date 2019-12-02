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
                      <input type="text" id="account" placeholder="帳戶號碼" v-model="event.inputName"></div>
                  <div>
                      <input type="text" id="purchase" placeholder="購買數量" v-model="event.setAmount"></div>
                  <div>
                      <textarea type="text" id="remark" placeholder="備註" v-model="event.description"></textarea></div>
                  <button @click="addPurchase">上傳</button></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
import Vuex from 'vuex'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import purchaseWalkerInstance from '../contracts/purchaseInstance'
import purchaseProject from '../contracts/purchaseProject'
import web3 from '../contracts/web3'


export default {
    props: ['title'],
    data () {
        return {
          purchaseData: [], account: null,
        }
    },
    mounted() {
      web3.eth.getAccounts().then((accounts) => {
        [this.account] = accounts;
        this.confirmPurchase();
      });
    },
    methods: {
      confirmPurchase(setAmount) {
        if (Number.isInteger(setAmount) && setAmount < 0) {
          return false, console.long('please enter positive integer');
        }
        return 'correct!'
      },
      getPurchase() {
        purchaseWalkerInstance.methods.returnAllPurchases().call().then((purchases) => {
          purchases.forEach((purchaseAddress) => {
            const purchaseInst = purchaseProject(purchaseAddress);
            purchaseInst.methods.getDetails().call().then((purchaseData) => {
              const purchaseInfo = purchaseData; //please renew getDetails in purchaseProject script, so this is what we can do in Smart Contract
              purchaseInfo.contract = purchaseInst;
              this.purchaseData.push(purchaseInfo);
            });
          });
        });
      }, //after renew, then follow here
      addPurchase() {
        purchaseWalkerInstance.methods.addPurchase(
          this.inputName,
          this.setAmount,
          this.description,
          web3.utils.toWei('1', 'Mwei'),
        ).send({
          from: this.account,
        }).then((res) => {
          const purchaseInfo = res.events.PurchaseStarted.returnValues; //renew PurchaseStarted
        });
      },
    },

};

/*
const youtubeRegexp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig


/**
 * get id from url, not yet finished !!! connect to above, and send to solidity
 * @param  {string} url url
 * @return {string}     id
 */
/*export function getIdFromURL (url) {
  let copyrightID = url.replace(youtubeRegexp, '$1')

  if (copyrightID.includes(';')) {
    const pieces = copyrightID.split(';')

    if (pieces[1].includes('%')) {
      const uriComponent = decodeURIComponent(pieces[1])
      copyrightID = `http://youtube.com${uriComponent}`.replace(youtubeRegexp, '$1')
    } else {
      copyrightID = pieces[0]
    }
  } else if (copyrightID.includes('#')) {
    copyrightID = copyrightID.split('#')[0]
  }

  return copyrightID
} */


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

