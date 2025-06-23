function start() {
    for (let Loop = 0; Loop < 1; index++) {
        console.log ("this means the JS is working")
        var UserName = prompt ("What's your name?")
        console.log (UserName)
        var UserWant = prompt ("Hello " +UserName+ "\nHow many seats would you like for your car?\n1 2 4 5 7 or 8?")
        var CarArray = ["BAC Mono", "MX5", "Tough Luck", "Mini", "Falcon", "Tough Luck", "Outlander", "Estima"]
        var CarWanted = UserWant-1
        var CarOffered = CarArray[CarWanted]
        console.log (CarOffered)

        if (CarOffered != "Tough Luck"){
            var RentDays = Number(prompt ("you have chosen the " +CarOffered+ " this will cost you $" +(UserWant*10)+" per day how many days would you like to rent for?"))
            alert ("you have chosen to rent the " +CarOffered+ " for " +RentDays+ " days we thank you for your partonage and hope you enjoy your new " +CarOffered+ " this will cost you $" +(RentDays*UserWant*10)+ "")
        } else {
            alert("Go away")
        }
    }
}
//// This is a comment so I can say there is a comment