// loop Practice 
 for (var i = 1; i < 40; i++){
 
    var outputSentence = i;
    var outputSentence = 'Ajke amr Mon valo nai';
    // console.log(i+' : '+outputSentence)
}

var a = 0;
while(a < 10){
    // console.log(a)
    a++;
}

for(var i = 0; i < 10; i++){
    // console.log(i)
}
// 29
for( var i =0 ; i <= 100; i++){
    if(i >= 58 && i <= 98){
        // console.log(i)
    }
}

// 30
for(var i = 0; i <= 500; i++){
    if((i >= 412 && i <= 456) && i%2==0){
        // console.log(i)
    }
}

// 31
for(var i = 500; i <= 1000; i++){
    if(i >= 581 && i <= 623 ){
        if(i % 2 !=0){
            // console.log(i)
        }
    }
}

for (var i =0; i < 100; i++){
    // console.log(i)
    if(i == 88){
        break
    }
    // console.log(i)
}

var booksPrice = [100, 30, 150 , 200, 250, 80, 170];

for(var i = 0; i < booksPrice.length; i++){
    var bookPrice = booksPrice[i];
    if(bookPrice >= 200){
        continue;
    }
    console.log(bookPrice)
}