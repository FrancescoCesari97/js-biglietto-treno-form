const userNameinput = document.getElementById("Name-Surname");
console.log(userNameinput);

const kmInput = document.getElementById("KM");
console.log("km da percorrere: " + kmInput);

const ageInput = document.getElementById("Age");
console.log("fascia di età: " + ageInput);

const printButton = document.getElementById("print-button");
console.log("Anni passeggiero: " + printButton);

const printName = document.getElementById("print-name");

const ticketType = document.getElementById("ticket-type");

const priceTicket = document.getElementById("price-ticket");

// FUNZIONE PULSANTE GENERA

printButton.addEventListener("click", function () {
  printName.innerHTML = userNameinput.value;

  const age = ageInput.value;
  console.log(age);
  // moltiplicare il numero di km per 0.21 € per ottenere il prezzo totale

  const totalPrice = kmInput.value * 0.21;
  console.log("totale prezzo bigletto: " + totalPrice);

  // se il passeggero ha età minore a 18 anni allora verrà applicato uno sconto del 20% sul prezzo totale

  const underAgedisconut = totalPrice * 0.2;
  console.log("sconto under 18 " + underAgedisconut);

  // se il passeggero ha età maggiore a 65 anni allora verrà applicato uno sconto del 40% sul prezzo totale

  const overAgedisconut = totalPrice * 0.4;
  console.log("sconto under 65 " + overAgedisconut);

  let finalPrice;

  if (age == "minorenne") {
    finalPrice = totalPrice - underAgedisconut;
  } else if (age == "over65") {
    finalPrice = totalPrice - overAgedisconut;
  } else {
    finalPrice = totalPrice;
  }

  ticketType.innerHTML = ageInput.value;

  // stampa costo biglietto
  priceTicket.innerHTML = finalPrice.toFixed(2) + "€";
});
