/*var tagH1 = document.querySelector('h1')
var texto = prompt('digite o texto')

tagH1.innerText = texto*/

var NovoParagrafo = document.createElement('p')
var texto = document.createTextNode('isso é um paragrafo criado em js')
NovoParagrafo.document.appendchild(texto)
var body = document.querySelector('body')
body.appendChild(NovoParagrafo)
body.removeChild(NovoParagrafo)