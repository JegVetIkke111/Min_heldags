function validateForm() {
    var fornavn = document.getElementById("fornavn").value;
    var epost = document.getElementById("e-post").value;
    var passord = document.getElementById("passord").value;
    var etternavn = document.getElementById("etternavn").value;
    var postnummer = document.getElementById("postnummer").value;
    var gjentaPassord = document.getElementById("gjentaPassord").value;

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