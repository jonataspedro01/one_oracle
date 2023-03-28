//console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const natal = `Natal`;
// const canguaretama = `Canguaretama`;
// Crtl + k + c = para comentar código

const listaDeDestinos = new Array(
    `Salvador`,
    `Natal`,
    `Canguaretama`
);

listaDeDestinos.push(`Curitiba`);
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);