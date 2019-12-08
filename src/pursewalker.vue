<template lang="html">
  <div id="container">
    <div class="tagetSale">
      <h3>Notion Bidding: CHELSEA FLAP SHOULDER BAG</h3>
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
    
    <div class="bulletinArea">
      <div class="b-row">
        <div>
          <h3>開始競標</h3>
        </div>
        <div>
          <label for="inputName">
            帳戶號碼
          </label>
          <b-form-input
            id="inputName"
            v-model="inputName"
            placeholder="輸入帳戶"
          />
        </div>
        <div>
          <label for="purchaseNumber">
            競標價格
          </label>
          <b-form-input
            id="purchaseNumber"
            v-model="purchaseNumber"
            placeholder="輸入價格"
          />
        </div>
        <div>
          <label for="Description">
            備註
          </label>
          <br>
          <b-form-textarea
            id="Description"
            v-model="description"
            rows="10"
          />
        </div>
        <div>
          <b-button
            pill variant="outline-secondary"
            @click="addPurchase"
          >
            同意競標價格
          </b-button>
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
Vue.use(BootstrapVue);

import web3 from '../contracts/web3'
import purchaseWalkerInstance from '../contracts/purchaseInstance'
import purchaseWalkerProject from '../contracts/purchaseProject'


//second, sort out blockchain
//third, we move youtube to another vuejs file
//forth, maybe check the confirmPuechase
//fifth, insert the youtube link rather and add blockchain function

export default {
    props: ['title'],
    data () {
        return {
          inputName: '',
          purchaseNumber: '',
          description: '',
          purchaseData: [], 
          account: null, 
          isLoading: false
        }
    },
    mounted() {
      web3.eth.getAccounts().then((accounts) => {
        [this.account] = accounts;
        this.getPurchase();
      });
    },
    methods: {
      confirmPurchase(purchaseNumber) {
        if (Number.isInteger(purchaseNumber) && purchaseNumber > 0) {
          return 'correct!'; //console.long('please enter positive integer')          
        } 
        return false
      },
      getPurchase() {
        purchaseWalkerInstance.methods.returnAllPurchases().call().then((purchases) => {
          purchases.forEach((purchaseAddress) => {
            const purchaseInst = purchaseWalkerProject(purchaseAddress);
            purchaseInst.methods.getBuyInfor().call().then((purchaseData) => {
              const purchaseInfo = purchaseData; 
              purchaseInfo.isLoading = false;
              purchaseInfo.contract = purchaseInst;
              this.purchaseData.push(purchaseInfo);
            });
          });
        });
      }, 
      addPurchase() {
        alert('Hi, ' + this.inputName+ ' are you sure you want bidding by US ' + this.purchaseNumber + ' dollar?')
        this.isLoading = true; 
        purchaseWalkerInstance.methods.addPurchase(
          this.inputName,
          this.purchaseNumber,
          this.description,
          web3.utils.toWei('1', 'ether'),
        ).send({
          from: this.account,
        }).then((res) => {
          const purchaseInfo = res.events.PurchaseStarted.returnValues; 
          purchaseInfo.isLoading = false;
          purchaseInfo.buyingNumber = 0; //need to confirm whether this is buyingNumber
          purchaseInfo.contract = purchaseWalkerProject(purchaseInfo.contractAddress); 
          this.isLoading = false;
        });
      },
    },

};

//so far below is useless, wait later update
const youtubeRegexp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig


/**
 * get id from url, not yet finished !!! connect to above, and send to solidity
 * @param  {string} url url
 * @return {string}     id
 */
export function getIdFromURL (url) {
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
} 


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
.introductiontitle {
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
.bulletinArea {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
}
</style>

