function checkForm() {
    // Get input values
    var fornavn = document.getElementById("fornavn").value;
    var epost = document.getElementById("e-post").value;
    var passord = document.getElementById("passord").value;
    var etternavn = document.getElementById("etternavn").value;
    var postnummer = document.getElementById("postnummer").value;
    var gjentaPassord = document.getElementById("gjentaPassord").value;
    var alderBekreftelse = document.getElementById("alder-bekreftelse").checked;

    // Regular expression for email validation
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if all fields are filled in
    if (fornavn === "" || epost === "" || passord === "" || etternavn === "" || postnummer === "" || gjentaPassord === "") {
        alert("Vennligst fyll inn alle felt med riktig verdi");
        return false;
    }

    // Check if passwords match
    if (passord !== gjentaPassord) {
        alert("Passordene er ikke like!");
        return false;
    }

    // Check if email is valid
    if (!emailRegex.test(epost)) {
        alert("Vennligst skriv inn en gyldig e-postadresse");
        return false;
    }

    // Check if age confirmation is checked
    if (!alderBekreftelse) {
        alert("Du må bekrefte at du er over 19 år for å registrere deg");
        return false;
    }

    // Hide the sign-in part and show the next part
    document.getElementById("sign-in").style.display = "none";
    document.getElementById("step1").style.display = "block";
}

function validateForm() {
    var location = document.getElementById('location').value;
    var start_date = document.getElementById('start_date').value;
    var start_time = document.getElementById('start_time').value;
    var end_date = document.getElementById('end_date').value;
    var end_time = document.getElementById('end_time').value;

    if (location !== '' && start_date !== '' && start_time !== '' && end_date !== '' && end_time !== '') {
        // Vis skjult del når alle felt er utfylt
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
    } else {
        alert("Vennligst fyll inn alle felt");
    }
}

cars = [ {
name: "Sportsbil (90 kr per time)",
score: 0,
attributes: {
    question1: "A",
    question2: "A",
    question3: "A",
    question4: "A",
    question5: "A"
}
},
{
name: "Familie-SUV (50 kr per time)",
score: 0,
attributes: {
    question1: "B",
    question2: "C",
    question3: "B",
    question4: "B",
    question5: "B"
}
},
{
name: "Økonomibil (30 kr per time)",
score: 0,
attributes: {
    question1: "C",
    question2: "A",
    question3: "C",
    question4: "C",
    question5: "C"
}
}
];

function showResult() {
const answers = {
question1: getSelectedValue("question1"),
question2: getSelectedValue("question2"),
question3: getSelectedValue("question3"),
question4: getSelectedValue("question4"),
question5: getSelectedValue("question5")
};

// Sjekk om alle spørsmålene er besvart
for (const question in answers) {
if (!answers[question]) {
    alert("Vennligst svar på alle spørsmålene før du ser resultatet.");
    return;
}
}

// Nullstiller poengsum for hver bil før ny beregning
cars.forEach(car => car.score = 0);

// Beregner poeng for hver bil basert på brukersvar
cars.forEach(car => {
for (const question in answers) {
    if (answers[question] === car.attributes[question]) {
        car.score++;
    }
}


});

// Finn bilen med høyest poengsum
const result = cars.reduce((prev, current) => (prev.score > current.score) ? prev : current);

// Vis resultat
document.getElementById("quiz-container").style.display = "none";
document.getElementById("result-container").style.display = "block";
document.getElementById("result").innerHTML = `<h2>Din anbefaling:</h3><p>${result.name}</p>`;
document.getElementById("quizSetning").style.display = "none";
document.getElementById("hoppOverSetning").style.display = "none";
}

function getSelectedValue(question) {
const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
return selectedOption ? selectedOption.value : null;
}

function skipQuiz() {
document.getElementById("quiz-container").style.display = "none";
document.getElementById("skip-container").style.display = "block";
document.getElementById("quizSetning").style.display = "none";
document.getElementById("hoppOverSetning").style.display = "none";

}

function reviewAnswers() {
document.getElementById("result-container").style.display = "none";
document.getElementById("quiz-container").style.display = "block";
document.getElementById("quizSetning").style.display = "none";
document.getElementById("hoppOverSetnig").style.display = "none";
}

function confirmDecision() {
document.getElementById('add-ons').style.display = 'block';
document.getElementById("result-container").style.display="none";
document.getElementById("bilSetning").style.display = "none";
document.querySelector("#quizSetning").style.display = "none"; // Vis første h2-element
document.querySelectorAll(".hoppOverSetning").forEach(element => element.style.display = "none"); // Vis andre h2-element
}

function confirmCarChoice() {
const selectedCar = document.getElementById("car-options").value;
document.getElementById("skip-container").style.display = "none";
document.getElementById("result-container").style.display = "block";
document.getElementById("result").innerHTML = `<h2>Din valgte bil:</h2><p>${selectedCar}</p>`;

}        

function toggleQuantityInput(checkboxId, quantityId) {
    var checkbox = document.getElementById(checkboxId);
    var quantityInput = document.getElementById(quantityId);

    // Hvis sjekkboksen er avmerket, vis antallsfeltet, ellers skjul det
    if (checkbox.checked) {
        quantityInput.style.display = "inline-block";
    } else {
        quantityInput.style.display = "none";
    }
}

function validatePositive(input) {
    let value = parseFloat(input.value);
    if (value <= 0) {
        input.value = ''; // Clear the input if the value is not positive
    }
}

// Call the validation function whenever the input changes
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        validatePositive(this);
    });
});

function calculateCost() {
    var fornavn = document.getElementById("fornavn").value;
    var etternavn = document.getElementById("etternavn").value;
    var epost = document.getElementById("e-post").value;
    var postnummer = document.getElementById("postnummer").value;

    const selectedCar = document.getElementById("car-options").value;
    const carCostPerHour = parseFloat(selectedCar.match(/\d+/)[0]); // Henter kostnaden per time fra valgt bil

    const roofRack = document.getElementById("roof-rack").checked;
    const bikeRack = document.getElementById("bike-rack").checked;
    const childSeat = document.getElementById("child-seat").checked;
    const gps = document.getElementById("gps").checked;

    let additionalCost = 0;
    let addOnsText = ''; // Variabel for å lagre teksten om ekstrautstyr og kostnader

    if (roofRack) {
        const roofRackQuantity = parseInt(document.getElementById("roof-rack-quantity").value);
        const roofRackCost = 80 * roofRackQuantity;
        additionalCost += roofRackCost;
        addOnsText += `<li>Takstativ: ${roofRackQuantity} stk - ${roofRackCost} kr</li>`;
    }
    if (bikeRack) {
        const bikeRackQuantity = parseInt(document.getElementById("bike-rack-quantity").value);
        const bikeRackCost = 70 * bikeRackQuantity;
        additionalCost += bikeRackCost;
        addOnsText += `<li>Sykkelstativ: ${bikeRackQuantity} stk - ${bikeRackCost} kr</li>`;
    }
    if (childSeat) {
        const childSeatQuantity = parseInt(document.getElementById("child-seat-quantity").value);
        const childSeatCost = 60 * childSeatQuantity;
        additionalCost += childSeatCost;
        addOnsText += `<li>Barnesete: ${childSeatQuantity} stk - ${childSeatCost} kr</li>`;
    }
    if (gps) {
        const gpsQuantity = parseInt(document.getElementById("gps-quantity").value);
        const gpsCost = 100 * gpsQuantity;
        additionalCost += gpsCost;
        addOnsText += `<li>GPS: ${gpsQuantity} stk - ${gpsCost} kr</li>`;
    }

    const startDateTime = new Date(document.getElementById("start_date").value + "T" + document.getElementById("start_time").value);
    const endDateTime = new Date(document.getElementById("end_date").value + "T" + document.getElementById("end_time").value);
    const hours = Math.ceil((endDateTime - startDateTime) / (1000 * 60 * 60)); // Beregner antall timer avrundet opp

    const location = document.getElementById('location').value;

    const totalCost = (carCostPerHour * hours) + additionalCost; // Korrigert utregning av total kostnad

    const resultHTML = `<h1>Total &#127937</h1>
                    <h3>Personalia:</h3>
                    <p>Fornavn: ${fornavn}</p>
                    <p>Etternavn: ${etternavn}</p>
                    <p>E-post: ${epost}</p>
                    <p>Postnummer: ${postnummer}</p>
                    <h3>Leieinformasjon:</h3>
                    <p>Hentested: ${location}</p>
                    <p>Starttid: ${startDateTime.toLocaleString()}</p>
                    <p>Sluttid: ${endDateTime.toLocaleString()}</p>
                    <p>Valgt bil: ${selectedCar}</p>
                    <p>Antall timer: ${hours} (Avrundet)</p>
                    <p>Tilleggsutstyr:</p>
                    <ul>
                        ${addOnsText}
                    </ul>
                    <p>Total kostnad: ${totalCost} kr</p>
                    <p><strong>Vennligst sjekk innboksen din for detaljer.</strong></p>`;

    // Skjul andre elementer og vis resultatet
    document.getElementById("add-ons").style.display = "none";
    document.getElementById("utregning").innerHTML = resultHTML;
    document.getElementById("utregning").style.display = "block";
}
