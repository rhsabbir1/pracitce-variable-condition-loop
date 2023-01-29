// To you: if more than 80000 rupees you will buy mac, if more than 60 rupees you will buy gaming laptop, if more than 40 thousand rupees you will buy lenovo yoga computer, if more than 20 thousand rupees you will buy old laptop.  Otherwise you will work with mobile.

var macPrice = 80000;
var gamingLaptop = 60000;
var lenovoYogaComputer = 40000;
var oldLaptop = 20000;

var myBuged = -1000;



if(myBuged > 0){
    if(macPrice <= myBuged){
        console.log("I will buy mac")
    }
    else if(gamingLaptop <= myBuged){
        console.log("I will buy Gaming Laptop")
    }
    else if (lenovoYogaComputer <= myBuged){
        console.log("I will buy Lenovo Yoga Computer")
    }
    else if(oldLaptop <= myBuged){
        console.log("I will buy Old Laptop")
    }
    else{
        console.log("I will buy Mobile")
    }
}
else if(myBuged < 0 ){
    console.log('Money is not 0 less')
}
else{
    console.log('Amr kase kuno tk nai')
}

