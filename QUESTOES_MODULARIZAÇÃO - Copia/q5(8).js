/*Crie um módulo que representa um banco de dados de usuários, 
armazenando informações como nome, e-mail e senha de usuários. 
Utilize uma lista para armazenar os dados privados do usuário e defina funções para 
adicionar, remover e atualizar informações dos usuários. 
Somente as funções devem ser visíveis por módulos externos.*/
import { adicionar, atualizar, remover } from "./funcoestres";

while (true){
    const opcao = prompt("Digite a opção que deseja:\n1 - Adicionar\n2 - Remover\n3 - Atualizar")

    if(opcao == 1){
        adicionar()
    }
    else if(opcao == 2){
        remover()
    }
    else if(opcao == 3){
        atualizar()
    }
}






