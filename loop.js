


// for (var i = 1; i <= 10; i++){
//     console.log(i)
// }


// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])
// console.log(friends[3])
// console.log(friends[4])
// console.log(friends[5])
// for (var i = 0; i < friends.length; i++){
//     var element = friends[i];
//     if (element=="hena") {
//         console.log(element)
//     }
// }

var friends = ["rahimm", "korim", "hena", "hero alom", "sabana", "josim"];

var bigName = friends[0];
// console.log(bigName.length)
for (var i = 0; i < friends.length; i++){
    var element = friends[i];
    if (element.length>bigName.length) {
        bigName = element;
    }
}
console.log(bigName)
// console.log(friends[undefined].length)

// var i = 0;



