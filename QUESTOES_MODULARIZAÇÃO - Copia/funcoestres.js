const bancodedados = [];

export function adicionar (){
    const nome = prompt("Digite o seu nome: ");
    const email = prompt("Digite seu email: ");
    const senha = prompt("Digite um senha: ");
    bancodedados.push({NOME:nome,MAIL:email,SENHA:senha})
    console.log(bancodedados)
}

export function remover (){
    console.table(bancodedados)
    const remov = Number(prompt("Digite o índice do usuário que você deseja remover informações: "));
    bancodedados.splice(remov,1)
    console.table(bancodedados)
}

export function atualizar (){
        const nomepesq = prompt("Digite um nome que deseja pesquisar: ")

        for (const n of bancodedados){
            if (n.NOME == nomepesq){
                const nomenovo = prompt("Digite um novo nome: ");
                n.NOME = nomenovo
                const emailnovo = prompt("Digite um novo email: ");
                n.MAIL = emailnovo
                const senhanova = prompt("Digite uma nova senha: ");
                n.SENHA = senhanova
                console.table(bancodedados)
            }
        }
    
    
}