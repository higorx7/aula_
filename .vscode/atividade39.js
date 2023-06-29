var div = document.querySelector('#area')
div.computedStyleMap.height = '100px'

function clicar() {
div.innerHTML = 'clicou'
div.background = 'blue'

}

function entrar() {
    div.innerHTML = 'entrou'
    div.style.background = 'green'

}

function sair() {
    div.innerHTML
    div.style.background = 'pink'
}