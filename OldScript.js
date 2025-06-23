function start() {
    for (let Loop = 0; Loop < 1; index++) {
        console.log ("this means the JS is working")
        var UserName = prompt ("What's your name?")
        console.log (UserName)
        var UserWant = prompt ("Hello " +UserName+ "\nHow many seats would you like for your car?\n1 2 4 5 7 or 8?")
        var CarArray = ["BACMono", "MX5", "ToughLuck", "Mini", "Falcon", "ToughLuck", "Outlander", "Estima"]
        var CarWanted = UserWant-1
        var CarOffered = CarArray[CarWanted]
        console.log (CarOffered)
        if (CarOffered == "BACMono"){
            console.log ("BAC Mono True")
            var BACMonoDays = Number(prompt ("you have chosen the BAC Mono this will cost you $10 per day how many days would you like to rent for?"))
            console.log ("BACMonoDays = " +BACMonoDays+ "")
            alert ("you have chosen to rent the BAC Mono for " +BACMonoDays+ " days we thank you for your partonage and hope you enjoy your new BAC Mono this will cost you $" +(BACMonoDays*10)+ "")
        }
        if (CarOffered == "MX5"){
            console.log ("MX5 = True")
            var MX5Days = Number(prompt ("you have chosen the MX5 this will cost you $20 per day how many days would you like to rent for?"))
            console.log ("MX5Days = " +MX5Days+ "")
            alert ("you have chosen to rent the MX5 for " +MX5Days+ " days we thank you for your partonage and hope you enjoy your new MX5 this will cost you $" +(MX5Days*20)+ "")
        }
        if (CarOffered == "ToughLuck"){
            console.log ("ToughLuck True")
           alert ("Go away")
        }
        if (CarOffered == "Mini"){
            console.log ("Mini = True")
            var MiniDays = Number(prompt ("you have chosen the Mini this will cost you $40 per day how many days would you like to rent for?"))
            console.log ("MiniDays = " +MiniDays+ "")
            alert ("you have chosen to rent the Mini for " +MiniDays+ " days we thank you for your partonage and hope you enjoy your new Mini this will cost you $" +(MX5Days*40)+ "")
        }
        if (CarOffered == "Falcon"){
            console.log ("Falcon = True")
            var FalconDays = Number(prompt ("you have chosen the Falcon this will cost you $50 per day how many days would you like to rent for?"))
            console.log ("FalconDays = " +FalconDays+ "")
            alert ("you have chosen to rent the Falcon for " +FalconDays+ " days we thank you for your partonage and hope you enjoy your new Falcon this will cost you $" +(FalconDays*50)+ "")
        }
        if (CarOffered == "Outlander"){
            console.log ("Outlander = True")
            var OutlanderDays = Number(prompt ("you have chosen the Outlander this will cost you $70 per day how many days would you like to rent for?"))
            console.log ("OutlanderDays = " +OutlanderDays+ "")
            alert ("you have chosen to rent the Outlander for " +OutlanderDays+ " days we thank you for your partonage and hope you enjoy your new Outlander this will cost you $" +(MX5Days*70)+ "")
        }
        if (CarOffered == "Estima"){
            console.log ("Estima = True")
            var EstimaDays = Number(prompt ("you have chosen the Estima this will cost you $80 per day how many days would you like to rent for?"))
            console.log ("EstimaDays = " +EstimaDays+ "")
            alert ("you have chosen to rent the Estima for " +EstimaDays+ " days we thank you for your partonage and hope you enjoy your new Estima this will cost you $" +(MX5Days*80)+ "")
        }
    }
}
//// This is a comment so I can say there is a comment