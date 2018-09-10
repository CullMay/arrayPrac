const movies=["Lilo and Stitch", "Hawaii 5-0", "Jurassic Park"];

const elements = ["Hello", 7, {message:"Hi mom"}, true];

console.log(movies.length);


let ofMovie;
for (ofMovie of movies){
    console.log(ofMovie);
}

movies.forEach(myElement=>{
    console.log(`For Loop ${myElement}`);
});

movies.push("Magnum PI");

for (i = 0; i <movies.length; i ++){
    console.log(movies [i]);
}

console.log(movies[movies.length-1]);

console.log(movies[1]);

movies.unshift("50 First Dates");
console.log(movies[0]);


movies.pop();

let theEndElement=movies.pop();


//// splice
movies.splice(1,2);