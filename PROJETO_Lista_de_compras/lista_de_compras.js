//Você foi contratado para desenvolver um programa em JavaScript que permita
//aos usuários gerenciar uma lista de compras. O programa deve oferecer as
//seguintes funcionalidades:

/*Adicionar um item: O usuário deve ser capaz de adicionar novos itens à
lista de compras;
• Remover um item: O usuário deve ser capaz de remover itens da lista de
compras;
• Pesquisar item: O programa deve permitir que os usuários verifiquem se
um determinado item já está na lista de compras.
• Ordenar a lista: O programa deve permitir que o usuário ordene a lista de
compras pelos nomes dos itens.
• Exibir lista: O programa deve permitir a exibição de todos os itens da lista.
• Limpar a lista: O programar deve permitir que o usuário remova todos os
itens da lista de compras de uma vez.
• Encerrar programa, utilize um laço de repetição para manter o programa
ativo exibindo o menu de opções até o usuário escolher encerrar o programa.*/

console.log("LISTA DE COMPRAS - MANTINHA");

let lista = []

let contador = true;
while (contador == true){
    const opcao = Number(prompt("Digite uma opção:\n1 - Adicionar um item;\n2 - Remover um item;\n3 - Pesquisar item;\n4 - Ordenar a lista\n5 - Exibir lista;\n6 - Limpar a lista;\n7 - Encerrar programa\n"));
    console.log(opcao);
    
    if (opcao == 1){
        const addproduto = prompt("Qual produto você deseja adicionar?\n ")
        lista.push(addproduto)
        console.log(lista)
        
}
    else if (opcao == 2){
        const removproduto = prompt("Qual o produto que você deseja remover?\n").trim();
        lista.splice(lista.indexOf(removproduto),1);
        console.log(lista)
       
    }
    else if (opcao == 3){
        const pesqproduto = prompt("Qual o produto que você deseja pesquisar?\n").trim();
        lista.find(lista.indexOf(pesqproduto))
        
    } 
}
