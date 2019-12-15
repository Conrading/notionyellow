/* eslint-disable */
import web3 from './web3';

const address = '0xF9Ca5cf05b1111fD6C500Ae1dA23239e5f70Be28';
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
                "name": "buyingNumber",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "messageDes",
                "type": "string"
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
                "name": "purchaseNumber",
                "type": "uint256"
            },
            {
                "name": "description",
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
