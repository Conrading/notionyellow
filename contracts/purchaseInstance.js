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
                "name": "projectStarter",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "projectTitle",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "projectDesc",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "deadline",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "goalAmount",
                "type": "uint256"
            }
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
