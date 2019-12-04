/* eslint-disable */
import web3 from './web3';

const address = '0x09AE5D52e686C4D30b9B88C0E3C7e806E583a7De';
const abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "contractAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "purchaseStarter",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "messageBuyer",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "messageDes",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "buyingNumber",
                "type": "uint"
            },
        ],
        "name": "PurchaseStarted",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "inputName",
                "type": "string"
            },
            {
                "name": "setAmount",
                "type": "uint256"
            },
            {
                "name": "ddescription",
                "type": "string"
            }
        ],
        "name": "addPurchase",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "returnAllPurchases",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

const instance = new web3.eth.Contract(abi, address);

export default instance;
