var estados = ['Rondonia','Acre','São Paulo','Rio de janeiro']
var qual_estado = "São Paulo"
var descobrir_indice = estados.indexOf(qual_estado)

if(descobrir_indice != -1){
    alert(`O nome ${qual_estado} foi encontrado no indice ${descobrir_iince}`)
}

else{
    alert(`Ó nome ${qual_estado} foi encontrado em nenhuma posição`)
}
