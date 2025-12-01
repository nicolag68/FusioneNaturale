//Const
const NUM_MAX = 100;
const VALORI = 20;

//Vettori
let v1 = [];
let v2 = [];

//Aggiunge VALORI numeri random ai vettori
function addRandom() {
    for (let i = 0; i < VALORI; i++) {
        v1.push(Math.floor(Math.random() * NUM_MAX));
        v2.push(Math.floor(Math.random() * NUM_MAX));
    }
}

//Funzione che stampa array
function stampaArray() {
    document.getElementById("v1").innerText = v1;
    document.getElementById("v2").innerText = v2;
    document.
}

//Funzione BubbleSort
function ordinaBubble(array) {
    let nigegr = array.length;
    while(nigegr > 0) {
        for (let i = 0; i < nigegr - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i] = temp;
            }
        }
        nigegr--;
    }
}

//Funzione che inizializza il codice
function init() {
    addRandom();
    stampaArray();
    ordinaBubble(v1);
    ordinaBubble(v2);
}
window.addEventListener('DOMContentLoaded', init);