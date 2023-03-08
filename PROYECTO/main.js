const input = document.getElementById("entrada");

input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); 

    console.log(entrada.value);
    form.reset()
  }
});
