const operadorescolhido = "" ;
            //Aritméticos
if(operadorescolhido == "+"){
    console.log(("o operador de mais é responsável por somar inteiros ou concatenar strings"));
}
else if(operadorescolhido == "-"){
    console.log("subtrai valores inteiros");
}
else if(operadorescolhido == "*"){
    console.log("multiplica valores inteiros");
}
else if(operadorescolhido == "/"){
    console.log("divide valores inteiros");
}
else if (operadorescolhido === "%"){
    console.log("operador de resto. faz a divisão mas exibe o resto em vez do resultado");
}
            //Comparação
else if(operadorescolhido == "=="){
    console.log("operador de igualdade, compara se o valor é igual");
}
else if(operadorescolhido === "==="){
    console.log("operador de idêntico, compara se o tipo de valor é igual");
}
else if (operadorescolhido === "!=="){
    console.log("operador de diferente, compara se é diferente do valor");
} else if (operadorescolhido === "<="){
    console.log("operador de menor ou igual, verificar se o valor é menor ou igual");
}
            //Lógico
            else if(operadorescolhido === "&&"){
                console.log("operador de 'E' , todas as condições devem ser verdadeiras");
            } else if(operadorescolhido === "||"){
                console.log("operador de 'OU' , pelo menos uma das condições deve ser verdadeira");
            } else if(operadorescolhido === "!"){
                console.log("operador 'NOT' ou oposição, valor contrário ou oposto do original");
            }
