// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    const firstTwoDrivers = function (){
        let firstTwo;
        if (drivers.length === 2){
            firstTwo = [...drivers];
            return firstTwo;
        }else{
            firstTwo = drivers.slice(0,2);
            return firstTwo;
        }
    }
    return firstTwoDrivers();
}

function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = function(){
        let lastTwo;
        if (drivers.length === 2){
            lastTwo = [...drivers];
            return lastTwo;
        }else{
            lastTwo = drivers.slice(drivers.length - 2,drivers.lenght);
            return lastTwo;
        }
    }
    return lastTwoDrivers();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(multiple){
    return function (fare){
        return fare * multiple;
    }
}

function fareDoubler(fare){
    const totalFare = createFareMultiplier(2);
    return totalFare(fare);
}


function fareTripler(fare){
    const tripleFare = createFareMultiplier(3);
    return tripleFare(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}
