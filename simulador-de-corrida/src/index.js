const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)

}

async function getRandomObject() {
    let object = Math.random()
    return object > 0.5 ?"CASCO" : "BOMBA"
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)

        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE

            await logRollResult(
                character1.NOME,
                "velocidade",
                diceResult1,
                character1.VELOCIDADE
            )

            await logRollResult(
                character2.NOME,
                "velocidade",
                diceResult2,
                character2.VELOCIDADE
            )
        }

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

            await logRollResult(
                character1.NOME,
                "manobrabilidade",
                diceResult1,
                character1.MANOBRABILIDADE
            )

            await logRollResult(
                character2.NOME,
                "manobrabilidade",
                diceResult2,
                character2.MANOBRABILIDADE
            )
        }
        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER
            let powerResult2 = diceResult2 + character2.PODER

            console.log(`${character1.NOME} confrontou ${character2.NOME}`)

            await logRollResult(
                character1.NOME,
                "poder",
                diceResult1,
                character1.PODER
            )

            await logRollResult(
                character2.NOME,
                "poder",
                diceResult2,
                character2.PODER
            )

            if(powerResult1> powerResult2 && character2.PONTOS > 0 ){
                let confrontItem = await getRandomObject()
                console.log(`${character1.NOME} usou um(a) ${confrontItem} venceu o confronto! ${character2.NOME} perdeu ${confrontItem === "CASCO" ? "1" : "2"} ponto(s) 🐢💣`)
                confrontItem === "CASCO" ? character2.PONTOS-- : character2.PONTOS-2
            }

            if(powerResult2> powerResult1 && character1.PONTOS > 0  ){
                let confrontItem = await getRandomObject()
                console.log(`${character2.NOME} usou um(a) ${confrontItem} venceu o confronto! ${character1.NOME} perdeu ${confrontItem === "CASCO" ? "1" : "2"} ponto(s) 🐢💣`)
                confrontItem === "CASCO" ? character1.PONTOS-- : character1.PONTOS-2
            }

            console.log(character1 === character2 ? "Nenhum ponto foi perdido" : "")
        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto!`)
            character1.PONTOS++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NOME} marcou um ponto!`)
            character2.PONTOS++;
        }

        console.log("------------------------")
    }
}

async function declareWinner(character1,character2) {
    console.log("Resultado final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)    
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)    

    console.log(
        character1.PONTOS > character2.PONTOS ? 
        `\n ${character1.NOME} venceu a corrida! Parabéns! 🏆🫡` : 
        `\n ${character2.NOME} venceu a corrida! Parabéns! 🏆🫡`
    )

    console.log(character1.PONTOS === character2.PONTOS ? "A corrida empatou! Parabéns à todos!" : "")

}

(async function main() {
    console.log(` 🚗🏁 Corrida entre ${player1.NOME} e ${player2.NOME} começando...    `);

    await playRaceEngine(player1, player2);
    await declareWinner(player1,player2)
})()

