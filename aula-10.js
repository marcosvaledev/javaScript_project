const CONSUMO_AUTOMOVEL = 12;

function gastoCombustivel(tempoGasto, velocidadeMedia) {
    const distancia = velocidadeMedia * tempoGasto;
    const consumoFinal = distancia/ CONSUMO_AUTOMOVEL;
    return consumoFinal.toFixed(3)
}
console.log(gastoCombustivel(10, 85));