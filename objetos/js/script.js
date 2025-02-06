// //exemplo 01 - objeto

// //CRIANDO OBJETO
// const produtos = {
//     produto1: {
//         nome: "camiseta",
//         preco: 25,
//         disponivel: true,
//     },
//     produto2: {
//         nome: "Calça",
//         preco: 60,
//         disponivel: false,
//     },
//     produto3: {
//         nome: "Tenis",
//         preco: 100,
//         disponivel:true,
//     },
// };
// //PARA PRINTAR OS VALORES DENTRO DO NOSSO OBJETO: PRODUTOS

// console.log("---Produtos---");
// console.log("");
// console.log("Produto1");
// console.log("Nome:         " + produtos.produto1.nome);
// console.log("Preco:        " + produtos.produto1.preco);
// console.log("Disponivel:   " + produtos.produto1.disponivel);

// console.log("");
// console.log("Produto2");
// console.log("Nome:         " + produtos.produto2.nome);
// console.log("Preco:        " + produtos.produto2.preco);
// console.log("Disponivel:   " + produtos.produto2.disponivel);

// //DEIXANDO UMA LINHA VAZIA PARA PULAR UMA LINHA
// console.log("");
// console.log("Produto3");
// console.log("Nome:         " + produtos.produto3.nome);
// console.log("Preco:        " + produtos.produto3.preco);
// console.log("Disponivel:   " + produtos.produto3.disponivel);
// //fim exemplo 1


// //exemplo 02 - objeto

// const produtos = { 
//     produto1: { 
//         nome: "Camiseta Algodão Premium", 
//         preco: 59.90, 
//         disponivel: true, 
//         fabricante: { 
//             nome: "Malharia do Sol", 
//             localizacao: "São Paulo, SP", 
//         }, 
//     }, 
//     produto2: { 
//         nome: "Calça Jeans Slim Fit", 
//         preco: 129.90, 
//         disponivel: false, 
//         fabricante: { 
//             nome: "Jeans Brasil", 
//             localizacao: "Rio de Janeiro, RJ", 
//         }, 
//     }, 
//     produto3: { 
//         nome: "Tênis Esportivo Runner", 
//         preco: 199.90, 
//         disponivel: true, 
//         fabricante: { 
//             nome: "Calçados Sport", 
//             localizacao: "Minas Gerais, MG" 
//         }, 
//     } 
// };

// console.log("--- Produtos ---"); 
// console.log("\nProduto 1:"); 
// console.log("Nome:", produtos.produto1.nome); 
// console.log("Preço:", produtos.produto1.preco); 
// console.log("Disponível:", produtos.produto1.disponivel ? "Sim" : "Não"); 
// console.log("Nome fabricante:", produtos.produto1.fabricante.nome);
// console.log("Localização:", produtos.produto1.fabricante.localizacao);
// console.log("\nProduto 2:"); 
// console.log("Nome:", produtos.produto2.nome); 
// console.log("Preço:", produtos.produto2.preco); 
// console.log("Disponível:", produtos.produto2.disponivel ? "Sim" : "Não"); 
// console.log("Nome fabricante:", produtos.produto2.fabricante.nome);
// console.log("Localização:", produtos.produto2.fabricante.localizacao);
// console.log("\nProduto 3:"); 
// console.log("Nome:", produtos.produto3.nome); 
// console.log("Preço:", produtos.produto3.preco); 
// console.log("Disponível:", produtos.produto3.disponivel ? "Sim" : "Não"); 
// console.log("Nome fabricante:", produtos.produto3.fabricante.nome);
// console.log("Localização:", produtos.produto3.fabricante.localizacao);

//Grupo 1

const Cachorro = {
    cachorro1: {
        raça: "Golden",
        cor: "dourada",
        sexo: "macho",
        preco: 2.000,
    },

    cachorro2: {
        raça: "Salsisha",
        cor: "preto",
        sexo: "femea",
        preco: 1.000,
    },

    cachorro3: {
        raça: "Shitsu",
        cor: "branco",
        sexo: "macho",
        preco: 800,
    },
};