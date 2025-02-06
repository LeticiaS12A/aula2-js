// // exemplo com var
// function exemploVar(){
//     console.log(minhaVar);
//     var minhaVar = "isso é uma variavel com const";
//     console.log(minhaVar);
// }
// exemploVar();
// console.log(minhaVar); // ReferenceError


// //exemplo com let
// function exemploLet(){
//     console.log(minhaLet);
//     let minhaLet = "Isso é uma variavel com let";
//     if(true){
//         let minhaLet = "Outro let dentro do if";
//         console.log(minhaLet);
//     }
//     console.log(minhaLet);
// }
// exemploLet();
// console.log(minhaLet); // ReferenceError

// //exemplo com const
// const minhaConst = "Isso é uma varivel com const";
// function exemploConst(){
//     console.log(minhaConst);
//     //minhaConst = "Tentativa de reatribuir a variavel"

//     //                  chave:valor
//     const meuObjeto = {nome: "Objeto constante"};
//     console.log(meuObjeto.nome);

//     meuObjeto.nome = "Alterei o valor do objeto";
//     console.log(meuObjeto.nome);
// }
// exemploConst();
// console.log("Estou fora da função" + minhaConst);

// //Exercicio 1
// function exercicio1(){
//     //criando uma variavel com meu nome
//     var meuNome = "Letícia dos Santos Alves";
//     //mostrando na tela
//     console.log(meuNome);
//     var minhaIdade = 17;
//     console.log(minhaIdade);
// }

// //Exercicio2
// function exercicio2(){
//     console.log(teste); //deve dar erro pois não atribuimos
//                         //um valor a ele antes de printar
//     if(true){
//         //dando um valor para o teste
//         let teste = "Programando em JavaScript";
//     }
// }

// //Exercicio3
// function exercicio3(){
//     const pi = 3.14159;     //Dando um valor a variavel pi
//     console.log(pi);        //Printando pi

//     pi = 3;     //Tentando Reatribuir o valor de pi = Erro
// }