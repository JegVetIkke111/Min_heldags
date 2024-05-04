function validateForm() {
    let fornavn = document.getElementById("fornavn").value;
    let epost = document.getElementById("e-post").value;
    let passord = document.getElementById("passord").value;
    let etternavn = document.getElementById("etternavn").value;
    let postnummer = document.getElementById("postnummer").value;
    let gjentaPassord = document.getElementById("gjentaPassord").value;

    // Check if all fields are filled in
    if (fornavn === "" || epost === "" || passord === "" || etternavn === "" || postnummer === "" || gjentaPassord === "") {
        alert("Vennligst fyll inn alle felt");
        return false;
    }

    // Check if passwords match
    if (passord !== gjentaPassord) {
        alert("Passordene er ikke like!");
        return false;
    }

    // If all validations pass, redirect the user to index1.html
    window.location.href = "../Side2/index1.html"
}