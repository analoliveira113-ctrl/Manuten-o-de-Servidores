// Manutenção de Servidores
// Servidores com CPU > 80%
// Calcular custo de energia extra
// Somar custo excedente total

const listaServidores = [
    {id: 1, nome: 'Servidor A', cpu: 50, custoextra: 50},
    {id: 2, nome: 'Servidor B', cpu: 95, custoextra: 5},
    {id: 3, nome: 'Servidor C', cpu: 79, custoextra: 21},
    {id: 4, nome: 'Servidor D', cpu: 83, custoextra: 17},
    {id: 5, nome: 'Servidor E', cpu: 100, custoextra: 0},
];

//Filter
const ServidoresMais80 = listaServidores.filter(servidores => servidores.cpu > 80);
//console.log(ServidoresMais80);

//Map
const ServidoresComCustoExtra = ServidoresMais80.map(servidor =>{
    return{
        ...servidor,
        custoExtraEnergia:servidor.custoextra *1
    }
})
console.log(ServidoresComCustoExtra);

//Somar custo excedente total
// const faturamentoTotal = produtosComDesconto.reduce((acumulador, item)=>{
//     return acumulador + item.precoFinal;

// }, 0);
// console.log(`R$ ${faturamentoTotal.toFixed(2)}`);

// console.log(`--- RELATÓRIO DE VENDAS (LOJA GAMER) ---`);
// console.log(`Produtos analisados : ${produtosComDesconto.length}`);
// console.log(`Faturamento Previsto (com desconto): R$ ${faturamentoTotal.toFixed(2)}`);


const faturamentoTotal = ServidoresComCustoExtra.reduce((acumulador, item)=>{
    return acumulador + item.custoExtraEnergia;

}, 0);
console.log(`R$ ${faturamentoTotal.toFixed(2)}`);

console.log(`--- RELATÓRIO DE VENDAS (LOJA GAMER) ---`);
console.log(`Produtos analisados : ${ServidoresComCustoExtra.length}`);
console.log(`Custo excedente total: R$ ${faturamentoTotal.toFixed(2)}`);