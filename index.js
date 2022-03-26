// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {return drivers.slice(0,2)}
const returnLastTwoDrivers = function(drivers) {return drivers.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

createFareMultiplier = (int) => {return (fare) =>{return int*fare};}
function fareDoubler(fare){return fare * 2}
function fareTripler(fare){return fare * 3}



function selectDifferentDrivers(arrayOfDrivers, callBack){
    if (callBack === returnFirstTwoDrivers || callBack === returnLastTwoDrivers) {
        return callBack(arrayOfDrivers)
    }


}




//function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers){
  //  returnLastTwoDrivers = [,`Amari`, `Mo`];
    //return returnLastTwoDrivers

//}

