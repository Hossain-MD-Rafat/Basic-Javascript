function kilometerToMeter(km){
    if(km<0){
        alert('Distance should be a positive number');
    }
    else{
        return km*1000;
    }
}

function budgetCalculator(clocks, phones, laptops){
    if(clocks<0 || phones<0 || laptops<0){
        alert('Put positive number');
    }
    return clocks*50+phones*100+laptops*500;
}

function hotelCost(days){
    let totalCost = 0;
    if(days<=0){
        alert('Days should be a positive number');
    }
    else if(days<=10){
        totalCost = days*10
    }
    else if(days>10 && days<=20){
        totalCost = (days-10)*80+1000;
    }
    else{
        totalCost = (days-20)*50+1800;
    }
    return totalCost;
}

function megaFriend(names){
    let largeName = "";
    for(i=0;i<names.length;i++){
        if (names[i].length>largeName.length){
            largeName = names[i];
        }
    }
    return largeName;
}

console.log(hotelCost(22));