var name = prompt("BIENVENIDA\n Indicanos tu nombre para personalizar el capitan: ");

do{

  var name = prompt("Por favor indicanos tu nombre para personalizar el capitan: ");

}while((/^\s+$/).test(name) || name == "" || !isNaN(name));


document.getElementById("name").innerHTML = "Hola coder, " + name;