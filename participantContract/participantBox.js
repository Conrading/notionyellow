/* eslint-disable */
import web3 from './web3';

const address = '0x2c65a8e0e59b72b0f4207d28daa986c719753ae9';
const abi = [
  {
    constant: false,
    inputs: [
      {
        name: '_videoIDLeft',
        type: 'string'
      },
      {
        name: '_decidedShareLeft',
        type: 'uint'
      },
      {
        name: '_processFee',
        type: 'uint'
      }
    ],
    name: 'minimumShareLeft',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_videoIDRight',
        type: 'string'
      },
      {
        name: '_decidedShareRight',
        type: 'uint'
      },
      {
        name: '_processFee',
        type: 'uint'
      }
    ],
    name: 'minimumShareRight',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'participants',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'returnAllParticipants',
    outputs: [
      {
        name: '',
        type: 'address[]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
]; // THE ABI

const instance = new web3.eth.Contract(abi, address);

export default instance;