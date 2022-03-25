//  Beispiele zu den Dingen aus der README.md

//  Variablen

var nane_der_variable = "Wert der variable"
console.log(name_der_variable)

var beispiel_objekt = {
    key_1: "wert des Key 1",
    key_2: "wert des key 2"
}

console.log(beispiel_objekt)

//  Funktionen / Methoden

function meine_beipiel_funktion(parameter_1, parameter_2, parameter_3 = "fallback") {
    console.log(parameter_1)
    console.log(parameter_2)
    console.log(parameter_3)
}

//  hier setze ich keinen dritten parameter und damit wird der standard wert verwendet
console.log(
    meine_beipiel_funktion("ohne den dritten", "parameter")
)

// hier setze ich den dritten parameter und überschreibe damit den standard wert
console.log(
    meine_beipiel_funktion("mit dem", "dritten parameter", "überschreibe ich den 'fallback'")
)
