document.getElementById("form-idade").addEventListener("submit", function(event) {
    event.preventDefault();

    const idade = document.getElementById("idade").value;
      if (idade === "") {
        alert("Digite uma idade válida");
    } else if (idade < 18) {
        alert("Você é menor de idade.");
    } else if (idade >= 18 && idade < 60) {
        alert("Você é adulto.");
    } else {
        alert("Você é idoso.");
    }
    document.getElementById("verificar-btn").addEventListener("click", function() {
        document.getElementById("verificar-btn").classList.add("verificar-btn-active");
      });
      const idadeInput = document.getElementById('idade');
idadeInput.addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9]/g, ''); // Remove todos os caracteres que não são números
});

});
