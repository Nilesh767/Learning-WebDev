/********************* Let and Const **********************/

//ES5
var name5 = 'some name';
var age5 = 21;
name5 = 'new some name';
console.log(name5);

//ES6
const name6 = 'some es6 name'; //constant
let age6 = 23; //variable -> var, let == var
//name6 = 'new es6 name'; -> cant change
console.log(name6);


//function scoped -> var, block scoped -> let/const

//ES5
function driverLicense5(passedTest) {
    if (passedTest) {
        var fName = 'some fName';
        var yob = 1999;
    }
    console.log(fName + ' ' + yob);
}

driverLicense5(true);

//ES6 -> let and const are only accessible in same scope
function driverLicense6(passedTest) {
    if (passedTest) {
        let fName = 'some fName';
        const yob = 1999;
    }
    //console.log(fName+ ' ' + yob); -> wont work
}

driverLicense6(true);

//other method
function driverLicense6b(passedTest) {
    let fName;
    //const yob;
    if (passedTest) {
        fName = 'some fName';
        //yob = 1999;
    }
    console.log(fName);
    //console.log(yob); -> wont work as its a constant
}

driverLicense6b(true);

//right method
function driverLicense6c(passedTest) {
    let fName;
    const yob = 1999;
    if (passedTest) {
        fName = 'some fName';
    }
    console.log(fName + ' ' + yob);
}

driverLicense6c(true);

//other example of block scope
//ES5
var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
console.log(' ');

//ES6
let j = 23;
for (let j = 0; j < 5; j++) {
    console.log(j);
}
console.log(j);

/********************* Blocks And IIFEs **********************/

//IIFEs
//ES5
(function () {
    var c = 3;
})();
//console.log(c); -> not accessible

//block
//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a + ' '+b); -> not accessible
console.log(c);// -> accessible because its a var

/********************* Strings **********************/

let fName = 'some fName';
let lName = 'some lName';
const yob = 1999;

function calcAge(year) {
    return 2020 - year;
}

//ES5
console.log('Name: ' + fName + ' ' + lName + ', ' + 'age: ' + calcAge(yob));

//ES6 -> called template literals -> uses this ```````
console.log(`Name: ${fName} ${lName}, age: ${calcAge(yob)}`);

//methods in strings
const name = `${fName} ${lName}`;
console.log(name.startsWith('s'));
console.log(name.startsWith('S'));
console.log(name.endsWith('e'));
console.log(name.includes('x'));
console.log(`${fName} `.repeat(3));

/********************* Arrow Functions **********************/

const years = [1999, 1965, 1934, 1996];

//ES5
var ages5 = years.map(function (el) {
    return 2020 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `age element ${index + 1}: ${2020 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `age element ${index + 1}: ${age}`;
});
console.log(ages6);


//This keyword in arrows

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'this is box no ' + this.position + 'and it is ' + this.color;
            alert(str);
        });
    }
}
//box5.clickMe(); // wont work and will show undefined,
// because this points to global windows var

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            const str = `this is box no ${this.position} and color is ${this.color}`;
            alert(str);
        });
    }
}
box6.clickMe();// arrow function uses lexical this( of its parent proto i think)


function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 =
    function (friends) {
        var arr = friends.map(function (el) {
                return this.name + ' oof ' + el;
            }.bind(this)
        );
        console.log(arr);
    }

var friends5 = ['a', 'b', 'c'];
new Person('name').myFriends5(friends5);

//wont show name(this.name) because "this" here is inner anon. function
//bind makes a new copy of the outer function to solve the problem

//ES6
Person.prototype.myFriends6 =
    function (friends) {
        const arr = friends.map(el => `${this.name} oof ${el}`);
        console.log(arr);
    }
let friends6 = ['a', 'b', 'c'];
new Person('name').myFriends6(friends6);

//gets lexical this from our function and works

/********************* Destructuring **********************/

//ES5
var nilesh5 = ['nilesh', 21];
var namee5 = nilesh5[0];
var agee5 = nilesh5[1];

//ES6
const [namee6, agee6] = ['nilesh', 21];
console.log(namee6, agee6);

const obj = {
    fnamee: 'nilesh',
    lnamee: 'choudhary'
};

const {fnamee, lnamee} = obj;
console.log(fnamee, lnamee);

const {fnamee: a, lnamee: b} = obj;//if name change
console.log(a, b);


function calcAgeRetirement(year) {
    const agere = new
    Date().getFullYear() - year;
    return [agere, 65 - agere];
}

const [agere, retirement] = calcAgeRetirement(1999);
console.log(agere, retirement);

/********************* Arrays **********************/
//change color of boxes
const boxes = document.querySelectorAll('.box');

//ES5
/*var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'blue';
});*/

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'orange');

//or
//Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'pink');


//change text of boxes


//ES5
/*for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I am also blue';
}*/

//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('orange')) {
        continue;
    }
    cur.textContent = 'I am also orange';
}


//ES5
var ages = [12, 12, 13, 11, 21, 17];

var full = ages.map(function (cur) {
    return cur >= 18;
});

console.log(full);
console.log('index is: ' + full.indexOf(true));
console.log('age is: ' + ages[full.indexOf(true)]);

//ES6
let ages66 = [12, 12, 13, 11, 21, 17];
console.log('index is: ' + ages66.findIndex(cur => cur >= 18));
console.log('age is: ' + ages66.find(cur => cur >= 18))

/********************* Spread  Operator **********************/

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(12, 13, 54, 29);
console.log(sum1);

//ES5
ages = [12, 13, 54, 29];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const family1 = ['a', 'b', 'c'];
const family2 = ['x', 'y', 'z'];
const families = [...family1, ...family2, 'p'];
console.log(families);


const heading = document.querySelector('h1');
const boxes6 = document.querySelectorAll('.box');
const all = [heading, ...boxes6];
Array.from(all).forEach(cur => cur.style.color = 'red');

/********************* Rest Parameters **********************/

//ES5
function isFullAge5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function (cur) {
        console.log((2020 - cur) >= 18);
    })
}

//isFullAge5(1999, 2007, 2001);
//isFullAge5(1999, 2007, 2001, 2009, 1995);

//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2020 - cur) >= 18));
}

//isFullAge6(1999,2006,2001,2004,2000);

//-----------------------------------------------------------
//ES5
function isFullAge5b(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(arguments);
    argsArr.forEach(function (cur) {
        console.log((2020 - cur) >= limit);
    })
}

//isFullAge5b(18, 1999, 2007, 2001);
//isFullAge5b(1999, 2007, 2001, 2009, 1995);

//ES6
function isFullAge6b(limit, ...years) {
    years.forEach(cur => console.log((2020 - cur) >= limit));
}

isFullAge6b(18, 1999, 2006, 2001, 2004, 2000);

/********************* Default Parameters **********************/

//ES5
function family5(fName, lName, yob, nationality) {

    nationality === undefined ? nationality = 'India' : nationality;

    this.fName = fName;
    this.lName = lName;
    this.yob = yob;
    this.nationality = nationality;
}

var person1 = new family5('a', 'x', 1999);
console.log(person1);

var person2 = new family5('b', 'y', 1995, 'some thing');
console.log(person2);

//ES6
function family6(fName, lName, yob, nationality = 'india') {
    this.fName = fName;
    this.lName = lName;
    this.yob = yob;
    this.nationality = nationality;
}

let person3 = new family6('a', 'x', 1999);
console.log(person3);

let person4 = new family6('b', 'y', 1995, 'some thing');
console.log(person4);

/********************* Maps **********************/

const question = new Map();
question.set('q1', 'some q');
question.set('a1', 'some a');
console.log(question);
console.log(question.get('a1'));
//question.delete('a1');
//console.log(question);
console.log(question.has('a1'));
//question.clear();
//console.log(question);

question.forEach((value, key) => console.log(`this is ${key}, and its value is ${value}`));

for (let [key, value] of question.entries()) {
    console.log(key);
    console.log(`this is ${key}, and its value is ${value}`);
}

/********************* Classes **********************/

//ES5
var Person5 = function (name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
}

Person5.prototype.calcAge = function () {
    var age = new Date().getFullYear() - this.yob;
    console.log(age);
}
var someName = new Person5('name', 1999, 'some job');
console.log(someName);
someName.calcAge();

//ES6
class Person6 {
    constructor(name, yob, job) {
        this.name = name;
        this.yob = yob;
        this.job = job;
    }

    static greeting() {
        console.log('henlo!');
    }

    calcAge() {
        let age = new Date().getFullYear() - this.yob;
        console.log(age);
    }
}

const someName6 = new Person6('name', 1999, 'job');
console.log(someName6);
someName6.calcAge();
someName6.constructor.greeting();

// subclasses-------------------------------------------


//ES5
var Person5b = function (name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
}

Person5b.prototype.calcAge = function () {
    var age = new Date().getFullYear() - this.yob;
    console.log(age);
}

var Athelete5 = function (name, yob, job, olyGames, medals) {
    Person5b.call(this, name, yob, job);
    this.olyGames = olyGames;
    this.medals = medals;
}

Athelete5.prototype = Object.create(Person5b.prototype);

Athelete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}

var someAthelete5 = new Athelete5('name', 1999, 'some job', 3, 7);
console.log(someAthelete5);
someAthelete5.calcAge();
someAthelete5.wonMedal();

//ES6
class Person6b {
    constructor(name, yob, job) {
        this.name = name;
        this.yob = yob;
        this.job = job;
    }

    calcAge() {
        let age = new Date().getFullYear() - this.yob;
        console.log(age);
    }
}

class Athlete6 extends Person6b {
    constructor(name, yob, job, olyGames, medals) {
        super(name, yob, job);
        this.olyGames = olyGames;
        this.medals = medals;
    }

    wonMedals() {
        this.medals++;
        console.log(this.medals);
    }
}

const someAthlete6 = new Athlete6('name', 1999, 'job', 3, 11);
console.log(someAthlete6);
someAthlete6.calcAge();
someAthlete6.wonMedals();

/********************* practice **********************/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has density of ${density}`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, was built in ${this.buildYear} is a ${classification.get(this.size)} street`);
    }
}

const allParks = [new Park('green park', 1999, 0.2, 215),
    new Park('national park', 1996, 2.9, 3541)];

const allStreets = [new Street('ocean avenue', 1997, 1.1, 4),
    new Street('evergreen', 2008, 2.7, 2),
    new Street('4th street', 2015, 0.8)];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}


function reportParks(p) {
    console.log('<----------------parks report---------------->')

    //Density
    p.forEach(el => el.treeDensity());

    //Average age
    const aages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(aages);
    console.log(`our ${p.length} parks have an average of ${avgAge} years.`);

    //park with 1k trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1k trees`);
}

function reportStreets(s) {
    console.log('<----------------streets report---------------->');
    //total or avg of streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} with avg of ${avgLength}`);

    //classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
