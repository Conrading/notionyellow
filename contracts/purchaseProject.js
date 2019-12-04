/* eslint-disable */
import web3 from './web3';

const abi = [
  
  {
    "constant": true,
    "inputs": [],
    "name": "inputName",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "setAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "description",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBuyerInfor",
    "outputs": [
      {
        "name": "purchaseStarter",
        "type": "address"
      },
      {
        "name": "messageBuyer",
        "type": "string"
      },
      {
        "name": "messageDes",
        "type": "string"
      },
      {
        "name": "buyingNumber",
        "type": "uint"
      },      
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  
];

export default (address) => {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
};
