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
        string memory videoID,
        uint256 decidedShare,
        uint8 processFee
        ) public{
        require(processFee > 0);
        // set the new 
        Participant newParticipant = new Participant(msg.sender, videoID, decidedShare, processFee);
        // push the participant address to participants array
        participants.push(newParticipant);
        returnAllParticipants();
    }
    
    function minimumShareRight (
        string memory videoID,
        uint256 decidedShare,
        uint8 processFee
        ) public{
        require(processFee > 0);
        // set the new 
        Participant newParticipant = new Participant(msg.sender, videoID, decidedShare, processFee);
        // push the participant address to participants array
        participants.push(newParticipant);
        returnAllParticipants();
    }
    function returnAllParticipants() public view returns(Participant[] memory){
        return participants;
    }
}

contract Participant {
    using SafeMath for uint256;

    address payable private owner;
    string videoID;
    uint256 decidedShare;
    uint8 processFee;
    string inputName;
    string description;

    event FinalAverageAgreement(address owner, string videoID, uint256 decidedShare, string inputName, string description, uint256 resultAverageShare);

    constructor(
        address payable creator,
        string memory uploadVideoID,
        uint256 uploadDecidedShare,
        uint8 Fee
        ) public {
        // initialize
        owner = creator;
        videoID = uploadVideoID;
        decidedShare = uploadDecidedShare;
        processFee = Fee;
    }
    
    modifier notOwner(){
        require(msg.sender != owner);
        _;
    }

    function averageShareCalculation(uint256 resultAverageShare, string memory inputName, string memory description) public {
            emit FinalAverageAgreement(msg.sender, videoID, decidedShare, inputName, description, resultAverageShare);
    }


    function returnContents() public view returns(        
        string memory,
        string memory,
        string memory,
        uint256
        ) {
        return (
            inputName,
            description,
            videoID,
            decidedShare
        );
    }
}




