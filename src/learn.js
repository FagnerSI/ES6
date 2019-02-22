
import { soma } from './functions';
console.log( soma(1, 2) );

//Operações em arrays 
const array =  [1,3,5,7,9,10,12,14,16,18];

//MAP
const map = array.map((item, index) => {
   console.log("Map --> " + item);
});

//REDUCE
const reduce = array.reduce((total, next) => total + next);
console.log("Reduce --> " + reduce);

//FILTER
const filter = array.filter(item => item % 2 === 0);
console.log("Filter--> " + filter);

//FIND
const find = array.find(item => item === 10);
console.log("Find--> " + find);

//REST
const [a, ...b] = array;
console.log(a + " <-- A _ B --> " + b);

const user = { nome: 'Fagner', idade: 22, altura:'1.7'};

const {idade, ...resto} = user;
console.log(idade + " <-- idade _ resto --> " + resto);

//SPRED
const array1 = [1,2,3], array2 = [4,5,6,8], array3 = [...array1, ...array2];
console.log(array3);

const user2 = { ...user, nome: 'Nelson'};
console.log(user2);

//DESTRUTURAÇÃO
const{nome, altura} = user;

//TEMPLATE LITERALS
//console.log("Destruturação -- nome: "+  nome +" e Altura: "+ altura);
console.log(`Destruturação -- nome: ${nome} e Altura: ${altura}`);

