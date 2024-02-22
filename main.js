import { paros } from "./fuggveny.js";

//console.log(paros(5))

//var szam = 12; /*globális változó*/

//console.log(szam);

function fv1() {
  var szam;
  szam += 2; //NaN "not a number"
  console.log(szam); /* 12-> nem undefined ez nem hibaüzenet, hanem egy*/
  var szam = 24; /*lokális, függvény szintű*/
  var szam2 = 34;
  console.log(szam2);
}

//fv1();
//console.log(szam2); /*hibaüzenet, mert nincs definiálva csak fvnyen belül*/
//console.log(szam);

let szam = 12;

function fv2() {
  let szam2 = 24;
  console.log(
    szam2
  ); /* megáll a program futása, hibaüzenet: használni akarod iniciaziálás előtt */
  {
    let szam2 = 33; /* let hatóköre blokk szintű */
    console.log(szam2); /* 33 */
  }
  console.log(szam2); /* 24 */
  console.log(szam);
}
/* fv2();
console.log(szam);
console.log(szam2); */

for (let index = 0; index < 3; index++) {
  console.log(index);
}

//console.log(index) /* hibaüzenet: nem érhető el az index változó */

const nev = "Béle";
//nev = "Jenő";

/* Konstans deklarált változó értéke később nem változtatható meg, és már deklaráláskor közelező neki értéket adni. 
Blokk szintű lokális hatóköre van. szokás a konstans változókat csupa nagybetüvel írni*/

/* var-al deklarált változó hatóköre  lehet file szinű globális, vagy függvény szintű lokális. Var változó esetén is működik a hoistring deklarációkor ugy működik mintha hatóköre tetején hoztuk volna létre.
ha deklarációkor nem adunk értéket, akkor automatikusan az undefined értéket kapja. Az undefined nem hibaüzenet hanem egy js érték.
Lokális változó a függvényen kívül nem értelmezhető.*/

/* let-el deklarált változó hatóköre lehet globális file szintű, illetve lehet lokális de blokk szintű egy blokk a kapcsoszárójelek közötti rész */

/* LISTA : minden elemnek van egy indexe amivel hivatkozhatunk rá, összetett adatszerkezet */
let lista = ["első", "második", "harmadik"];

console.log(lista);
console.log(lista[0]);

console.log("A lista hossza: " + lista.length);

lista[10] = "tizenegyedik";
console.log(lista);
console.log(lista[5]);

lista.push("következő elem"); //lista végére beteszi az adott elemet
console.log(lista);
lista.pop(); //eltávolitja a lista végéről az utolsó elemet
console.log(lista);

lista = ["a", "b", "c"];
console.log(lista);

const lista2 = [11, 12, 13, 14];
//lista2 = [23,24,25] hibaüzenet, konstanshoz akarok uj értéket rendelni. nem lehet!

lista2[0] = 1111111;
lista2.push(
  2222222
); /*konstans lista esetén a lista memória címe nem változtatható meg, viszont az értékei megváltoztathatók.Hozzáfüzhetünk ujabb elemeket, eltávolithatjuk akár az összes elemet is*/
lista2.pop();
lista2.pop();
lista2.pop();
lista2.pop();
console.log(lista2);

/* név, telefonszám, kor */
/* objektumok */
const SZEMELY1 = {
  nev: "Gabi",
  tel: "06-30-4432-333",
  kor: 12,
};
SZEMELY1.nev = "Jolán"; //megváltoztatható az objektumban lévő konstans értéke
console.log(SZEMELY1.nev);
SZEMELY1.barat = true;
console.log(SZEMELY1);

const SZEMELY2 = {
  nev: "Béla",
  tel: "06-30-4432-333",
  kor: 30,
  barát: false,
};

const SZEMELYLISTA = [
  {
    nev: "Gabi",
    tel: "06-30-4432-333",
    kor: 12,
  },
  {
    nev: "Béla",
    tel: "06-30-4432-333",
    kor: 30,
    barát: false,
  },
];

/* írd ki gabi korát! */
console.log(SZEMELYLISTA[0].kor)

/* A javascript objektum egy olyan összetett adatszerkezet ami összetartozó adatokat kezel egybe, tulajdonság értékpárokból áll, a kulcsok jelentik az adott objektum tulajdonságait, az értékek 
pedig a hozzájuk tartozó értékeket és kapcsoszárójelek közé írjuk. */
