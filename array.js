// Array

/* 1.What is purpus array?
    The purpose of an arrat is the store multiple pieces of data same type together
*/

/* 2.How to declear an array in js 

    var friendAge = [12 ,22,25,30];

*/

// 3.Numbers of Elements in an array?

    // usuing length 
    var friendAge = [12 ,22,25,30];
    var lenght = friendAge.length;
    // console.log(lenght)


/* 4.What is index ?
 array position is index an array. its first index alweys 0. 
 */

// 5.Find the value of an element by index

    var friendAge = [12 ,22,25,30];
    var elder = friendAge[2];
    // console.log(elder)


//  6.Change an Element by index

    var friendAge = [12 ,22,25,30];
    var elder = friendAge[0];
    friendAge[0] = 16;
    // console.log(friendAge) 


//  7.Get the index of an elements by the value
    var friendAge = [12 ,22,25,30];
    var elder = friendAge.indexOf(12)
    // console.log(elder)


// 8.
// when the valur is not assing
     var friendAge = [12, ,22,25,30];
     var undf = friendAge[1];
    //  console.log(undf)

// 9.How can add an element to an array last position
    var friendAge = [12,22,25,30];
    friendAge.push(25)
    // console.log(friendAge) 

// 10.How can remove last position Element an array 
    var friendAge = [12,22,25,30];
    friendAge.pop()
    // console.log(friendAge) 

// 12.How can add an element to an array last position.
    var friendAge = [12,22,25,30];
    friendAge.unshift(25)
    console.log(friendAge) 


// 13.How can remove last position Element an array 
    var friendAges = [12,22,25,30];
    friendAge.shift()
    console.log(friendAge)