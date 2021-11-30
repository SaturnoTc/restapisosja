const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/Numbers', (req, res) => {
    res.json(
            {
            name: "Corpo de Bombeiros",
            phone: "193",
            description: "As consequências da maioria dos acidentes domésticos ou na rua podem ser amenizadas com o socorro imediato do Corpo de Bombeiros. O Disque Bombeiros atende a incêndios, acidentes com animais, vazamentos de gás, produtos químico e causas naturais como alagamento e queimadas. Confira aqui um caso de atuação do Corpo de Bombeiros em vistoria por Brasília.",
            id: 1,
            quandoUsar: "Incêndios em residências, empresas, estruturas e em vegetação. Acidentes de trânsito com vítimas. Afogamentos. Acidentes domésticos (queimaduras, intoxicação, explosões e ferimentos em geral). Quedas de plano elevado ou de mesmo nível que resultem em lesões. Busca de pessoas. Salvamento em ambientes hostis. Lesões provenientes de agressão e ataques de animais. Ferimentos por arma de fogo e objetos cortantes/perfurantes. Emergências com produtos perigosos e combustíveis. Desabamentos, soterramentos e deslizamentos. Emergências resultantes de vendavais, enchentes, temporais e chuvas de granizo."
            }
)  
})

app.get('/', (req, res) => {
    res.json(
        {
        msg: 'ok'
        }
    )
})


app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT)
})