//TESTE DE VARIÁVEIS
const funcionarios = [
  ["Ana", "Juliana", "Fernando"],
  [21, 17, 18]
];
console.log(`${funcionarios[0][2]} tem ${funcionarios[1][2]} anos`)

// TESTE DE CONCATENAÇÃO DE ARRAYS
const menuPrincipal = ['arroz', 'feijoada', 'linguiça calabresa', 'farofa'];
const salada = ['alface', 'tomate', 'cenoura', 'cebola'];
const menuDeSobremesas = ['pudim', 'sorvete', 'bolo de morango'];
const menuCompleto = menuPrincipal.concat(salada, menuDeSobremesas);

// Lista de compras
const listadeCompras = ['arroz', 'feijão', 'carne', 'frutas'];
const itemRemovido = listadeCompras.pop('frutas'); // remove o último item
const itemAdicionado = 'Coca cola';
listadeCompras.push(itemAdicionado); // adiciona no final

// Exibindo os resultados
console.log('Lista de compras atualizada:', listadeCompras);
console.log('Item removido:', itemRemovido);
console.log('Menu completo:', menuCompleto);


//teste de variáveis
let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);


//Essa função é pra depois, eu pesquisar pra entender melhor o que ela faz
const notas = [7, 8, 9, 10, 6, 5, 4];
for (let indice = 5; indice < notas.length; indice++){
    console.log(indice, notas[indice]);
}