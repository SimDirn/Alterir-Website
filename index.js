var arr = [100, 851, 31, 4, 15, 26, 6, 763, 1, 12, 81, 2];

//  Sortieren des Arrays

function finde_den_kleinsten_wert(heuhaufen) {
    //var temp = heuhaufen[0]
    var re;
    var a = 0;
        for(var b = 0; b < heuhaufen.length; b++) {
            if(heuhaufen[a]<heuhaufen[b]) {
                re = heuhaufen[a]
            } else {
                re = heuhaufen[b]
                a = b
            }
        }
    
    return re;
}

function sortieren(heuhaufen) {
    var sortierter_heuhaufen = []
    var ende = heuhaufen.length
    for(var i = 0; i < ende; i++) {
        var aktueller_kleinster = finde_den_kleinsten_wert(heuhaufen)
        //  löschen wir den aktuellen kleinsten wert aus dem heuhaufen
            // indexOf(...) findet die position eines wertes im array
        heuhaufen.splice( heuhaufen.indexOf(aktueller_kleinster) , 1)
        //  füge den aktuell kleinsten wert hinten an 
        sortierter_heuhaufen.push(aktueller_kleinster)
    }
    return sortierter_heuhaufen;
}

//   Simons Code

//  Ausgabe des Inputs
// for(var i = 0; i < arr.length; i++) {
//     console.log(`Aktueller Index: ${i} - Aktueller Wert: ${arr[i]}`);
    
// }
console.log(arr)

//  Ausgabe der Sortierung
console.log(sortieren(arr)) 

