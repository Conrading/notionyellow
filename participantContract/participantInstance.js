import web3 from './web3';

const abi = [
  {
    constant: true,
    inputs: [],
    name: 'highestPrice',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    name: 'bids',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'auctionState',
    outputs: [
      {
        name: '',
        type: 'uint8'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'highestBidder',
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
    name: 'returnContents',
    outputs: [
      {
        name: 'inputName',
        type: 'string'
      },
      {
        name: 'description',
        type: 'string'
      },
      {
        name: 'videoIDLeft',
        type: 'string'
      },
      {
        name: 'videoIDRight',
        type: 'string'
      },
      {
        name: 'decidedShareLeft',
        type: 'uint256'
      },
      {
        name: 'decidedShareRight',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'placeBid',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'finalizeAuction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        name: '_owner',
        type: 'address'
      },
      {
        name: '_videoIDLeft',
        type: 'string'
      },
      {
        name: '_videoIDRight',
        type: 'string'
      },
      {
        name: '_decidedShareLeft',
        type: 'uint256'
      },
      {
        name: '_decidedShareRight',
        type: 'uint256'
      },
      {
        name: '_processFee',
        type: 'uint256'
      },
      {
        name: '_inputName',
        type: 'string'
      },
      {
        name: '_description',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  }
]; // THE ABI
// Here is just only abi because we haven't created auction yet.
export default address => {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
};
