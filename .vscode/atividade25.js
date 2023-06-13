// Criar um array

var nomes = ['Pedro','Kaio',
'Matheus','Kauã']

// Acessar 1 elemento do array

document.write(nomes[0])

//Acessar todos os elementos do array

document.write(nomes)

// Adicionar elemento no final do array

nomes.push('Luffy')

// Adicionar elementos no inicio do array

nomes.unshift('Lucas')

// renovar elemento do inicio do array
 
nomes.shift() // aspas são opcionais

// remover elemento do final do array

nomes.pop() // Aspas são opcionais

// Remover elementos através do indice
 
nomes.splice(1,1) // (indice,quantidade para excluir

// verificar se o elemento existe no array

nomes.includes('Pedro')