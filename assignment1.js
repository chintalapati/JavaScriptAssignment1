/*----------JavaScript Assignment----- */
/*---------------Question 1-----------*/
var employees = [
    { id: 10, name: 'John', experience: 5},
    { id: 15, name: 'Mathew', experience: 7},
    { id: 20, name: 'keith', experience: 12},
    { id: 25, name: 'louis', experience: 5},
    { id: 30, name: 'mark', experience: 4},
    { id: 35, name: 'Ash', experience: 3},
    { id: 40, name: 'robert', experience: 6},
]
 var a = employees.map(function (emp){
    return emp.id
});
console.log("All Id's in the array " +a);

var arr = employees.reduce(function(a,b){
    return a + b.experience;
},0);
console.log("total numbers of exp " +arr);

var result = employees.filter(function(exp) {
    return exp.experience > 5;
});
console.log(result);

/*-------------Question 2---------- */
var cat = {
catName : "kitty",
sayName () {
    console.log(this.catName);
}
}
cat.sayName();

/*----------Question 3------------*/
class user {
constructor(name,location){
    this.name = name;
    this.location = location;
}
displayName() {
    return this.name + " is in " + this.location;
}
}
var user1 = new user("Marlabs", "New Jersey");

console.log(user1.displayName());

/*----------Question 4------------ */

function myName(fName, lName){
//console.log(`my name is ${fName} ${lName}`);
function fullDetails(companyName){
var value = `my name is ${fName} ${lName} and I work for ${companyName}`;
return value;
}
return fullDetails("marlabs");
}
console.log(myName("altaf","pattan"));

/*----------Question 5------------- */
var pokemon = {
firstname: 'Pika',
lastname: 'Chu ',

getPokeName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
}
};
//console.log(pokemon.getPokeName());

var pokemonName = function(snack, hobby) {
//console.log(this.getPokeName() + 'I choose you!');
console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,"sushi","alogirthm");
/*-----------Question 6------------- */
var x = 5;
var promise1 = new Promise((resolve, reject)=>{
if(x = 5){
    var data = {
        name : "marlabs",
        address : {
            state : "NJ",
            zip : 08444
        }
    }
    //console.log(data);
    resolve(data);
} else {
    var res = new Error('failed......');
    reject(res);
}
});

var promise2 = function(data){
var msg = data.name+ " address " +data.address.state + " " +data.address.zip;
return Promise.resolve(msg);
}

var myFunc = function() {
promise1.then(promise2).then((data)=>{
    console.log("" +(data));
})
.catch(err => {
    console.log(err.message);
});
};
myFunc();