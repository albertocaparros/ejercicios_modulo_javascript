console.log(
  'Playground preparado para entregar los ejercicios del modulo javascript!'
);
console.log('----------------------------------------------------------');

let array = [1, 2, 3, 4, 5];

/* Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
y devuelva su primer elemento. Uliza destructuring. */

console.log('------------- EJERCICIO 1 - HEAD -------------------------');
const head = array => {
  let [head] = array;
  return head;
};

console.log('The original array is: ' + array);
console.log('The head of the array is: ' + head(array));
console.log('----------------------------------------------------------');

/* Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada
devuelta todos menos el primer elemento. Uliza rest operator. */

console.log('------------- EJERCICIO 1 - TAIL -------------------------');
const tail = array => {
  let [head, ...rest] = array;
  return rest;
};

console.log('The original array is: ' + array);
console.log('The tail of the array is: ' + tail(array));
console.log('----------------------------------------------------------');

/* Init
Implementa una función init (inmutable), tal que, dado un array como entrada
devuelva todos los elementos menos el úlmo. Uliza los métodos que ofrece
Array.prototype. */

console.log('------------- EJERCICIO 1 - INIT -------------------------');
const init = array => {
  let newArray = array.slice(0, array.length - 1);
  return newArray;
}; // Implementation here.

console.log('The original array is: ' + array);
console.log('The array without the last item is: ' + init(array));
console.log('----------------------------------------------------------');

/* Last
Implementa una función last (inmutable), tal que, dado un array como entrada
devuelva el úlmo elemento. */

console.log('------------- EJERCICIO 1 - LAST -------------------------');
const last = array => {
  let [head, ...rest] = array;
  return rest.pop();
};

console.log('The original array is: ' + array);
console.log('The last element of the array is: ' + last(array));
console.log('----------------------------------------------------------');

/* 2. Concat */

let a = 'Ola';
let b = 'K ase';
let c = 'Pos na';
let d = 'Aki';

/* Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
devuelva la concatenación de ambos. Utiliza rest / spread operators. */

console.log('----------- EJERCICIO 2 + OPCIONAL - CONCAT --------------');

const concat = (...input) => {
  return Array.from(input).join('');
};

console.log('The original elements are: ');
console.log('a = ' + a);
console.log('b = ' + b);
console.log('c = ' + c);
console.log('d = ' + d);
console.log('The concat result is: ' + concat(a, b));
console.log('The concat result for more items: ' + concat(a, b, c, d));

console.log('----------------------------------------------------------');
/* 3. Clone Merge */

let objeto = {
  name: 'Sherlock',
  surname: 'Holmes',
  occupation: 'Detective'
};

let objeto2 = {
  name: 'Mycroft',
  surname: 'Holmes',
  nationality: 'British'
};
/* Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva
un nuevo objeto con las propiedades de source : */

console.log('------------- EJERCICIO 3 - CLONE -------------------------');
function clone(source) {
  let newObject = new Object();
  Object.assign(newObject, source);
  return newObject;
}

console.log('Original object: ', objeto);

let clonedObject = clone(objeto);
console.log('New object: ', clonedObject);

console.log('----------------------------------------------------------');
/* Merge
Implementa una función merge que, dados dos objetos de entrada source y target ,
devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
de propiedades con el mismo nombre, source sobreescribe a target .
Por ejemplo, dados estos 2 objetos:
const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};
el resultado de mezclar a sobre b sería:
merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", c
TIP: Puedes usar la función “clone” del apartado A. */

console.log('------------- EJERCICIO 3 - MERGE -------------------------');
function merge(source, target) {
  return { ...target, ...source };
}

console.log('Object 1: ', objeto);
console.log('Object 2: ', objeto2);

let mergedObject = merge(objeto, objeto2);
console.log('Merged object: ', mergedObject);

console.log('----------------------------------------------------------');

/* Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se
ha leído o no dicho libro.
Un libro es un objeto con title como string y isRead como booleano. En caso de no
existir el libro, devolver false
TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón. */

console.log('------------- EJERCICIO 4 - READ BOOKS ---------------------');
function isBookRead(books, titleToSearch: string): boolean {
  let book = books.find(book => {
    return book.title === titleToSearch;
  });

  return book === undefined ? false : book.isRead;
}

const books = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true }
];
console.log('Lista de libros: ', books);
console.log(isBookRead(books, 'Devastación')); // true
console.log(isBookRead(books, 'Canción de hielo y fuego')); // false
console.log(isBookRead(books, 'Los Pilares de la Tierra')); // false
console.log('----------------------------------------------------------');

/* 5. Slot Machine
El objevo de este ejercicio es crear una máquina tragaperras ulizando clases donde
cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia)
tendrá un contador de monedas que automáticamente se irá incrementando conforme
vayamos jugando.
Cuando se llame al método play el número de monedas se debe incrementar de forma
automática y debe generar tres booleanos aleatorios que representarán el estado de las
3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true , y por
tanto deberá mostrarse por consola el mensaje:
"Congratulations!!!. You won <número de monedas> coins!!"
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la
máquina.
En caso contrario deberá mostrar otro mensaje:
"Good luck next time!!". */

console.log('------------ EJERCICIO 5 - SLOT MACHINE -------------------');
class SlothMachine {
  coins: number;
  roulette1: boolean;
  roulette2: boolean;
  roulette3: boolean;

  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    this.roulette1 = this.roulette();
    this.roulette2 = this.roulette();
    this.roulette3 = this.roulette();

    if (this.roulette1 && this.roulette2 && this.roulette3) {
      console.log('Congratulations!!!. You won ' + this.coins + ' coins!!');
      this.coins = 0;
    } else {
      console.log('Good luck next time!!');
    }
  }

  roulette() {
    return Math.random() >= 0.5;
  }
}
const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
console.log('----------------------------------------------------------');
