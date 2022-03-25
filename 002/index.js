//  Aufgabe 2

// name_des_objekts.key_1 = "Simon"

// name_des_objekts.key_1 = "Dirnberger"

// name_des_objekts.key_1 = "30.06.2007"

// name_des_objekts.key_1 = "13"

// das sind meine antworten stimmen die so?

var obj = {
    vorname: "Simon",
    nachname: "Dirnberger",
    geburtsdatum: "30.06.2007",
    geburtsdatumISO: "2020-06-30",
    alter: 13
};

var vorname = "Simon";

var nachname = "Dirnberger", geburtsdatum = "30.06.2007";
var alter = 13;

function zeige_person(person) {
    console.log(`
        Vorname: ${person.vorname},
        Nachname: ${person.nachname},
        Geburtstag: ${person.geburtsdatum},
        Alter: ${person.alter}
    `)
}

zeige_person(obj)

// var obj = {
//     name: "Simon",
//     pos: "B"
// }

var arr = ["Simon", "B"]

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

var keys = Object.keys(obj)
for(var i = 0; i < keys.length; i++) {
    console.log(obj[keys[i]])
}

