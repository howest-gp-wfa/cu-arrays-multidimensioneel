"use strict";

var adressen;

window.addEventListener('load', Initieer);

function Initieer() {
  let btnVoegToe = document.querySelector("#btnVoegToe");
  VulAdressen();
  ToonAdressen();
  btnVoegToe.addEventListener("click", VoegAdresToe);
}

function ToonAdressen()
{
  let samenvatting = "";
  let divFeedback = document.getElementById("divFeedback");
  for (const key in adressen) {
      const element = `${adressen[key][1]} ${adressen[key][0]} - ${adressen[key][2]}<br />` ;
      samenvatting += element;
  }
  divFeedback.innerHTML = samenvatting;
}

function VoegAdresToe() {
  let txtVoornaam = document.getElementById("txtVoornaam");
  let txtNaam = document.getElementById("txtNaam");
  let txtGemeente = document.getElementById("txtGemeente");
  let voornaam = txtVoornaam.value;
  let naam = txtNaam.value;
  let gemeente = txtGemeente.value;
  let nieuwAdres = new Array(naam, voornaam, gemeente);
  adressen.push(nieuwAdres);
  ToonAdressen();
  txtVoornaam.value = "";
  txtNaam.value = "";
  txtGemeente.value = "";
  txtVoornaam.focus();
}

function VulAdressen() {
  adressen = new Array(3);
  adressen[0] = new Array("De Donder", "Walter", "Affligem");
  adressen[1] = new Array("Crucke", "Koen", "Gent");
  adressen[2] = new Array("Verhulst", "Gert", "Antwerpen");
}



