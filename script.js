const idadeInput = document.getElementById('idade');
idadeInput.setAttribute("autocomplete", "off");
idadeInput.addEventListener('click', function() {
    this.value = '';
});

document.getElementById("form-idade").addEventListener("submit", function(event) {
    event.preventDefault();

    const idade = document.getElementById("idade").value;
    if (idade === "") {
        return alert("Digite uma idade válida");
    } else if (idade < 18) {
        return alert("Você é menor de idade.");
    } else if (idade >= 18 && idade < 60) {
        return alert("Você é adulto.");
    } else {
        return alert("Você é idoso.");
    }
});

idadeInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});