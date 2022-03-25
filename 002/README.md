# Aufgabe 2

Nachdem du gestern Abend mit mir ein Array sortiert hast, fangen wir heute mal an die Sprache richtig zu lernen.

## Variablen und Methoden (Funktionen)

Variablen werden "deklariert", dass heißt sie werden einmalig definiert, und können ab diesem Moment verwendet werden.

### Deklaration von Variablen

'var' wird als Kennzeichen verwendet um eine Variable zu deklarieren
Als nächstes folgt der Name der Variable, wichtig sie muss mit einem Buchstaben, \_ oder $ beginnen, üblicherweise schreibt man sie mit kleinbuchstaben (Großbuchstaben nimmt man für was anderes her, da kommen wir aber noch dazu.)
Dann folgt eine Zuweisung, durch ein '=' und anschließend wird der Wert Beschrieben, den die Variable annehmen soll.

### Methoden bzw. Funktionen

Methoden werden wie volgt definiert:

'function name_der_funktion(parameter_1, parameter_2, parameter_3 = "der einen standardwert annimmt, wenn er nicht übergeben wurde") {
// hier kommt Code rein, der bestimmt was die Funktion tut.
// Variablennamen die Global (also außerhalb von dieser Funktion deklariert wurden), können gelesen und geändert werden
// Variablen die hier drin deklariert wurden, können nur hier drin gelesen und geschrieben werden!
}'

### Objekte

Als Objekt versteht man eine "Komplexere" Variable. Man kann dort sogennante "key-value" Paare speichern. Im Grunde funktioniert das ähnlich den Arrays, die du bereits kennengelernt hast.

Beispiel:

var name_des_objekts = {
key_1: "Wert des Keys",
key_2: "Wert des Key 2"
}

Wenn ich jetzt einen Wert auslesen will, habe ich 2 Möglichkeiten:

name_des_objekts["key_1"]
name_des_objekts.key_1

Einen Wert zu überschreiben geht wie folgt:

name_des_objekts["key_1"] = "neuer Wert"
name_des_objekts.key_1 = "neuer Wert"

## Deine Aufgabe A

- Definiere als Variable:
  - Deinen Vornamen
  - Deinen Nachnamen
  - Geburtstag
  - Alter
- Gib alles nacheinander aus

## Aufgabe B

- Erzeuge ein Objekt, dass die entsprechenden Parameter enthält (Vorname, Nachname, Geburtstag, Alter)
- Schreibe eine Funktion, der du dieses Objekt übergibst, diese Funktion soll anschließend alle Informationen zur Person ausgeben
