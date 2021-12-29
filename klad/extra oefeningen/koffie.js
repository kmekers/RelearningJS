let geboortejaar = prompt("wat is jouw geboortejaar");
let hoeOud = prompt("Hou oud denk je te worden?");
let hoeveel = prompt("Hoeveel koppen koffie drink je per dag?");

let callback = function () {
  let leeftijd = 2021 - geboortejaar;
  document.write(
    `<p> u bent ${leeftijd} u verwacht ${hoeOud} te worden. u zal dus nog zoveel ${
      hoeOud - leeftijd * 365 * hoeveel
    }koppen koffie drinken</p>`
  );
};

let ingeven = function () {
  if (geboortejaar == null || hoeOud == null || hoeveel == null) {
    return alert("je geannuleerd");
  } else if (geboortejaar == "" || hoeOud == "" || hoeveel == "") {
    return alert("je hebt ergenis iets niet ingegeven");
  } else {
    callback();
  }
};

ingeven();
/* ingeven();
Maak een nieuwe html document: koffie-voor-het-leven.html
Definieer een functie “ingeven”.

In deze functie vraag je de gebruiker achtereenvolgens deze items:
- geboortejaar
- hoe oud hij denkt te worden
- aantal koppen koffie dat hij per dag drinkt


Controleer of op annuleren geklikt werd, of er iets ingevuld is, of het een getal is.
Je hoeft niet voor elke ingave apart te valideren of er op annuleren geklikt werd, of er iets
ingevuld is, of het een getal is. Dit combineer je in telkens 1 if nadat alle 3 de items
ingegeven werden.
Dus bv. if(getal1 == null || getal2 == null || getal3 == null)...
Indien alles correct is ingegeven roep je een andere functie op: “tonen”. Je stuurt de 3
variabelen naar deze functie.
Definieer een functie “tonen”.
Hierin bereken je van de persoon de ouderdom in jaren.
Bereken ook het aantal koppen koffie dat jij voor de rest van zijn leven zou drinken. Je mag
ervan uitgaan dat een jaar altijd 365 dagen duurt.
Druk bv. af:
Je bent nu 40. Tegen 2 koppen koffie per dag zal je 43800 koppen koffie drinken als je 100
jaar oud zal worden.
4 */
