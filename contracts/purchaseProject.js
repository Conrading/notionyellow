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
    "name": "getDetails",
    "outputs": [
      {
        "name": "projectStarter",
        "type": "address"
      },
      {
        "name": "projectTitle",
        "type": "string"
      },
      {
        "name": "projectDesc",
        "type": "string"
      },
      {
        "name": "deadline",
        "type": "uint256"
      },
      {
        "name": "currentState",
        "type": "uint8"
      },
      {
        "name": "currentAmount",
        "type": "uint256"
      },
      {
        "name": "goalAmount",
        "type": "uint256"
      }
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
