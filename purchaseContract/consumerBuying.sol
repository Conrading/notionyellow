pragma solidity >=0.4.21 <0.6.0;
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


contract purchaseWalker {

    Purchase[] public purchases;
    //list exsting purchase
        
    event PurchaseStarted(
        address contractAddress,
        address purchaseStarter,
        string messageBuyer, 
        uint256 buyingNumber, 
        string messageDes
    );

//here just caculate how much participants, not yet calculate, wait enum paymethod
    function addPurchase(
        string calldata inputName,
        uint256 purchaseNumber,
        string calldata description
    ) external {
        Purchase newPurchase = new Purchase(msg.sender, inputName, purchaseNumber, description);
        purchases.push(newPurchase);
        emit PurchaseStarted(
            address(newPurchase), msg.sender, inputName, purchaseNumber, description
        );
    }
//get all purchases contract address
    function returnAllPurchases() external view returns(Purchase[] memory){
        return purchases;
    }
} 

contract Purchase {

    address payable public creator;
    string inputName;
    uint256 purchaseNumber;
    string description;

    modifier isCreator() {
        require(msg.sender == creator);
        _;
    }

    constructor (
        address payable purchaseStarter,
        string memory messageBuyer, 
        uint256 buyingNumber, 
        string memory messageDes
    ) public {
        creator = purchaseStarter;
        inputName = messageBuyer;
        purchaseNumber = buyingNumber;
        description = messageDes;
    }
    function getBuyerInfor() public view returns(
        address payable purchaseStarter,
        string memory messageBuyer,
        uint256 buyingNumber,
        string memory messageDes
    ) {
        purchaseStarter = creator;
        messageBuyer = inputName;
        buyingNumber = purchaseNumber;
        messageDes = description;
    }
}

    


