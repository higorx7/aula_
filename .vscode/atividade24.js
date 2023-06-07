while (true) {
    var nota = prompt("digite um numero: ")
    if(nota >10 || nota < 0){
      alert("nota invalida")
    }
     else{
        document.write("aqui esta sua nota; " + nota)
        break;
     }
}