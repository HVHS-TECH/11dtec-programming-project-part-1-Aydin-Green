function start() {
    console.log ("this means the JS is working")
    var UserName = prompt ("What's your name?")
    console.log (UserName)
    for (let Loop = 0; Loop < 1;) {
        var CarArray = ["BAC Mono", "MX5", "Tough Luck", "Mini", "Falcon", "Tough Luck", "Outlander", "Estima"]
        for (let index = 0; index < CarArray.length; index++) {
            if (CarArray[index] != "Tough Luck") {
            alert ("The cars on offer are (in order of least to most seats) \n" +CarArray[index])
            }}
        var UserWant = prompt ("Hello " +UserName+ "\nHow many seats would you like for your car?\n1 2 4 5 7 or 8?")
        var CarWanted = UserWant-1
        var CarOffered = CarArray[CarWanted]
        console.log (CarOffered)

        if (CarOffered != "Tough Luck"){
            var RentDays = Number(prompt ("you have chosen the " +CarOffered+ " this will cost you $" +(UserWant*10)+" per day how many days would you like to rent for?"))
            alert ("you have chosen to rent the " +CarOffered+ " for " +RentDays+ " days we thank you for your partonage and hope you enjoy your new " +CarOffered+ " this will cost you $" +(RentDays*UserWant*10)+ "")
        } else {
            alert("Go away")
        }
        var LoopAnswer = "Yes"
        LoopAnswer = prompt ("Are you happy with this result? Yes or No")
        if (LoopAnswer == "Yes") {
            Loop = 1
        } else {
            if (LoopAnswer == "yes") {
                Loop = 1
            } else {
                if (LoopAnswer === undefined) {
                    Loop = 1
                }
            }
        }
    }
}
//// This is a comment so I can say there is a comment