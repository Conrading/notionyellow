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
        string messageDes, 
        uint buyingNumber
    );

//here just caculate how much participants, not yet calculate, wait enum paymethod
    function addPurchase(
        string calldata inputName,
        string calldata description,
        uint calldata purchaseNumber
    ) external {
        Purchase newPurchase = new Purchase(msg.sender, inputName, description, purchaseNumber);
        purchases.push(newPurchase);
        emit PurchaseStarted(
            address(newPurchase), msg.sender, inputName, description, purchaseNumber
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
    string description;
    uint purchaseNumber;

    modifier isCreator() {
        require(msg.sender == creator);
        _;
    }

    constructor (
        address purchaseStarter,
        string messageBuyer, 
        string messageDes, 
        uint buyingNumber
    ) public {
        creator = purchaseStarter;
        inputName = messageBuyer;
        description = messageDes;
        purchaseNumber = buyingNumber;
    }
    function getBuyerInfor() public view returns(
        address payable purchaseStarter,
        string memory messageBuyer,
        string memory messageDes,
        uint buyingNumber
    ) {
        purchaseStarter = creator;
        messageBuyer = inputName;
        messageDes = description;
        buyingNumber = purchaseNumber;
    }
}

    


