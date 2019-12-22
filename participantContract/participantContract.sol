pragma solidity >=0.4.21 <0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";
//contract ownership {
    //address inputName;
    //function ownable() public{
        //inputName = msg.sender;
    //}
    //modifier exceptionBuyer {
        //require(msg.sender == inputName);
        //_;
    //} 
//}

contract ParticipantBox{
    Participant[] public participants; 
   
    function minimumShareLeft (
        string memory _videoIDLeft,
        uint _decidedShareLeft,
        uint _processFee
        ) public{
        require(_processFee > 0);
        // set the new 
        Participant newParticipant = new Participant(msg.sender, _videoIDLeft, _decidedShareLeft, _processFee);
        // push the participant address to participants array
        participants.push(newParticipant);
    }
    
    function minimumShareRight (
        string memory _videoIDRight,
        uint _decidedShareRight,
        uint _processFee
        ) public{
        require(_processFee > 0);
        // set the new 
        Participant newParticipant = new Participant(msg.sender, _videoIDRight, _decidedShareRight, _processFee);
        // push the participant address to participants array
        participants.push(newParticipant);
    }
    function returnAllParticipants() public view returns(Participant[] memory){
        return participants;
    }
}

contract Participant {
    using SafeMath for uint256;

    address payable private owner;
    string inputName;
    string description;
    string videoIDLeft;
    string videoIDRight;
    uint decidedShareLeft;
    uint decidedShareRight;

    constructor(
        address payable _owner,
        string memory _inputName,
        string memory _description,
        string memory _videoIDLeft,
        string memory _videoIDRight,
        uint _decidedShareLeft,
        uint _decidedShareRight
        ) public {
        // initialize auction
        owner = _owner;
        inputName = _inputName;
        description = _description;
        videoIDLeft = _videoIDLeft;
        videoIDRight = _videoIDRight;
        decidedShareLeft = _decidedShareLeft;
        decidedShareRight = _decidedShareRight;
    }
    
    modifier notOwner(){
        require(msg.sender != owner);
        _;
    }


    function returnContents() public view returns(        
        string memory,
        string memory,
        string memory,
        string memory,
        uint,
        uint
        ) {
        return (
            inputName,
            description,
            videoIDLeft,
            videoIDRight,
            decidedShareLeft,
            decidedShareRight
        );
    }
}




