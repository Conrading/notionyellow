pragma solidity >=0.4.21 <0.6.0;

contract ownership {
    address owner;
    function ownable() public{
        owner = msg.sender;
    }
    modifier exceptionOwner {
        require(msg.sender == owner);
        _;
    } 
}


contract eachParticipant is ownership {
    using shareMethod for uint;

    
    event copyrightPublish(bytes32 idInContract, uint[] _shareArray, uint sum_);

    function getArrayMinimumShare(uint[] _shareArray) public pure returns (uint sum_) {
        sum_ = 0;
        for (uint i = 0; i < _array.length; i++){
            sum_ += _array[i];
        }
    } 

    function getPlayerInfor() public view returns(
        bytes32 idInContract,
        string payMethod
    ) {
        idInContract = copyrightID;
        payMethod = equalShare || randomShare;
    }

//the below is wrong
/*
    function playerInfor(address player) public {
        if (msg.sender != owner) return;
        link = 'www.youtube.com/watch?v=JhguED04OeE';
        method = equalShare;
    }

    function playerInforCheck() public{
        if (minimumShare <= 100)
        emit playerInforResult(link, minimumShare, method);
    }


}*/
