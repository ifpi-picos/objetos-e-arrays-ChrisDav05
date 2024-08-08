// Escreva um programa em JavaScript que utilize a biblioteca convert 
// para converter dias em minutos e gigabytes em bytes.

import {convert} from 'convert';

function diasparamin (){
    const dias = Number(prompt("Digite quantos dias você deseja converter: "));
    console.log(`${dias} dia/dias é/são ${convert(dias, 'days').to('minutes')} minutos`);
    
}
diasparamin()

function GBparabytes (){
    const gigabytes = Number(prompt("Digite quantos gigabytes você deseja converter: "));
    console.log(`${gigabytes} gigabyte/gigabytes é/são ${convert(gigabytes, 'gigabytes').to('bytes')} bytes`);
    
}

GBparabytes()

