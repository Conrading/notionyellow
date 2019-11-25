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


contract eachMusician is ownership {
    using shareMethod for uint;

    bytes32 link;
    uint minimumShare;
    string method;
    
    event copyrightPublish(msg.sender, bytes32 link, uint minimumShare, string method);

    function getPlayerInfor() public view returns(
        bytes32 link,
        uint [] minimumShare,
        string method
    ) {
        link = youtube();
        minimumShare [] = ;
        method = equalShare || randomShare;
    }

//the below is wrong one

    function playerInfor(address player) public {
        if (msg.sender != owner) return;
        link = 'www.youtube.com/watch?v=JhguED04OeE';
        minimumShare [] = ;
		    method = equalShare;
    }

    function playerInforCheck() public{
        if (minimumShare <= 100)
        emit playerInforResult(link, minimumShare, method);
    }


}