document.getElementById("registrarse").addEventListener("click", function (event){
event.preventDefault();

var nombres=document.getElementById("nombre").value;
var apellidos=document.getElementById("apellido").value;
var fecha=document.getElementById("fecha").value;



var url = "https://jsonplaceholder.typicode.com/users";
var data = { nombre:nombres, apellido:apellidos, fechas:fecha };

fetch(url, {
  method: "POST", 
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => console.log("Success:", response));
   
});
