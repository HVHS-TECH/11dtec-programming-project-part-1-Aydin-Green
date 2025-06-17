console.log ("this means the JS is working")
var UserName = prompt ("What's your name?")
console.log (UserName)
var UserWant = prompt ("Hello " +UserName+ "\nHow many seats would you like for your car?\n1 2 4 5 6 7 or 8?")
var CarArray = ["BACMono", "MX5", "ToughLuck", "Mini", "Falcon", "Outlander", "Estima"]
var CarWanted = UserWant-1
var CarOffered = CarArray[CarWanted]
console.log (CarOffered)
if (CarOffered = "BACMono"){
    console.log ("BAC Mono True")
    var BACMonoDays = Number(prompt ("you have chosen the BAC Mono this will cost you $10 per day how many days would you like to rent for?"))
    console.log ("BACMonoDays = " +BACMonoDays+ "")
    alert ("you have chosen to rent the BAC Mono for " +BACMonoDays+ " days we thank you for your partonage and hope you enjoy your new BAC Mono this will cost you $" +(BACMonoDays*10)+ "")
}
if (CarOffered = "MX5"){
    console.log ("MX5 = True")
    var MX5Days = Number(prompt ("you have chosen the MX5 this will cost you $20 per day how many days would you like to rent for?"))
    console.log ("MX5Days = " +MX5Days+ "")
    alert ("you have chosen to rent the MX5 for " +MX5Days+ " days we thank you for your partonage and hope you enjoy your new MX5 this will cost you $" +(MX5Days*20)+ "")
}
if (CarOffered = "BACMono"){
    console.log ("BAC Mono True")
    var BACMonoDays = Number(prompt ("you have chosen the BAC Mono this will cost you $10 per day how many days would you like to rent for?"))
    console.log ("BACMonoDays = " +BACMonoDays+ "")
    alert ("you have chosen to rent the BAC Mono for " +BACMonoDays+ " days we thank you for your partonage and hope you enjoy your new BAC Mono this will cost you $" +(BACMonoDays*10)+ "")
}