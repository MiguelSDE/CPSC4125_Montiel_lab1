$(document).ready(function() {
    const a; // doesn't change
    var b = 1; // can change, larger scope
    let c = 2; // never change, smaller scope

    if ( b==2 ) { // falsy == !=

    } else if( c === 3 ){ // same type === !==

    } else {

    }

    var d = b ==2 && c ===1 ? "yes": a != null ? "yes" : "no"; //ternary condition ? true : false return (ternary)

    // basic arithmetic + - x /, modulus, 1 + 1 -11 not always going to be 1

    // string, number, array [], json {}

    //array[]
    //sort, forEach, push, pop, shift

    var xkcdJson = {"title": "Standard Model Changes",
                    day: "26"}
    var xkcdDay = xkcdJson.day
    
    // GET, PUT, POST, DELETE  |  CREATE, RETRIEVE, UPDATE, DELETE

    for(var i = 0; i < something; i++){

    }
    something.forEach()

    function firstFunction(variables){
        // process input
        return variables;
        // return something
    }
    
    Promise(function(){
        setTimeout(x);
        //what you are waiting
    })

    console.log(variableName);
});