console.log ("this means the JS is working")
var UserName = prompt ("What's your name?")
console.log (UserName)
var UserWant = prompt ("Hello " +UserName+ "\nHow many seats would you like for your car?\n1 2 4 5 6 7 or 8?")
var CarArray = ["BACMono", "MX5", "ToughLuck", "Mini", "Falcon", "Outlander", "Estima"]
var CarWanted = UserWant-1
var CarOffered = CarArray[CarWanted]
console.log (CarOffered)
if (CarOffered = "BACMono"){
    var BACMono = ("you have chosen the BAC Mono this will cost you $10 per day how many days would you like to rent for?")
    alert ("you have chosen to rent the BAC Mono for " +BACMono+ " days we thank you for your partonage and hope you enjoy your new BAC Mono")
}