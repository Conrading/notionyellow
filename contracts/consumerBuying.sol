pragma solidity >=0.4.21 <0.6.0;

contract ownership {
    address inputName;
    function ownable() public{
        inputName = msg.sender;
    }
    modifier exceptionBuyer {
        require(msg.sender == inputName);
        _;
    } 
}


contract eachParticipant is ownership {
        
    event PurchaseStarted(
        address contractAddress,
        address messageBuyer, 
        string messageDes, 
        uint buyingNumber
    );

//here just caculate how much participants, not yet calculate, wait enum paymethod
    function getArrayMinimumShare(uint[] _shareArray) public pure returns (uint sum_) {
        sum_ = 0;
        for (uint i = 0; i < _array.length; i++){
            sum_ += _array[i];
        }
    } 
//above is the part hasn't changed

    function getBuyerInfor() public view returns(
        address payable messageBuyer,
        string memory messageDes,
        uint buyingNumber
    ) {
        messageBuyer = inputName;
        messageDes = description;
        buyingNumber = purchaseNumber;
    }


