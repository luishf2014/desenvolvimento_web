function comparador(obj1, obj2) {
    const json1 = JSON.stringify(obj1, null, 2);
    const json2 = JSON.stringify(obj2, null, 2);

    if (json1 === json2) {
        return true;
    } else {
        console.log("Chaves diferentes: ");
        encontrarDiferentes(obj1, obj2);
        return false;
    }
}

function encontrarDiferentes(obj1, obj2, chavePai = "") {
    for (const chave in obj1) {
        const valor1 = obj1[chave];
        const valor2 = obj2[chave];

        if (typeof valor1 === 'object' && typeof valor2 === 'object') {
            encontrarDiferentes(valor1, valor2, chave);
        } else {
            if (valor1 !== valor2) {
                console.log(chavePai + (chavePai !== "" ? "." : "") + chave);
            }
        }
    }
}

const teste = {
    "NOME": "José",
    "Idade": 38,
    "Lazer": {
        "Esporte": ["Futebol", "Basquete"],
        "Filmes": {
            "Genero": ["Ficção"],
            "Décadas": [1980, 2000]
        }
    }
};

const teste1 = {
    "NOME": "José",
    "Idade": 38,
    "Lazer": {
        "Esporte": ["Futebol", "Basquete"],
        "Filmes": {
            "Genero": ["Ficção", "Drama"],
            "Décadas": [1980, 2000]
        }
    }
};

console.log(comparador(teste, teste1));