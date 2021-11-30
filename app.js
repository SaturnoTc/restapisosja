const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/Numbers', (req, res) => {
    res.json({
        Numbers: [
            {
                name: "Corpo de Bombeiros",
                phone: "193",
                description: "As consequências da maioria dos acidentes domésticos ou na rua podem ser amenizadas com o socorro imediato do Corpo de Bombeiros. O Disque Bombeiros atende a incêndios, acidentes com animais, vazamentos de gás, produtos químico e causas naturais como alagamento e queimadas. Confira aqui um caso de atuação do Corpo de Bombeiros em vistoria por Brasília.",
                id: 1,
                quandoUsar: "Incêndios em residências, empresas, estruturas e em vegetação. Acidentes de trânsito com vítimas. Afogamentos. Acidentes domésticos (queimaduras, intoxicação, explosões e ferimentos em geral). Quedas de plano elevado ou de mesmo nível que resultem em lesões. Busca de pessoas. Salvamento em ambientes hostis. Lesões provenientes de agressão e ataques de animais. Ferimentos por arma de fogo e objetos cortantes/perfurantes. Emergências com produtos perigosos e combustíveis. Desabamentos, soterramentos e deslizamentos. Emergências resultantes de vendavais, enchentes, temporais e chuvas de granizo."
              },
              {
                name: "Polícia Militar",
                phone: "190",
                description: "O 190 é um serviço de emergência  da Polícia Militar que atende aos cidadãos em casos de riscos, ameaças contra a vida, denúncias de roubos, atentados e proteção pública. Pode ser acionado de telefones fixos e celulares.",
                id: 2,
                quandoUsar: "quando está ocorrendo ou acabou de ocorrer um crime; quando a integridade física do cidadão ou o patrimônio (veículos, imóvel, objetos pessoais etc) estiver em risco; no atendimento a acidentes de trânsito com pessoas feridas ou com crimes de trânsito; quando houver atividade suspeita com pessoa ou veículo que possa estar envolvido em crime; em situações graves que necessitem de intervenção imediata da Polícia Militar."
              },
              {
                name: "Polícia Rodoviária Federal",
                phone: "191",
                description: "As atribuições da Polícia Rodoviária Federal são definidas pelo Código de Trânsito Brasileiro (polícia de trânsito). Fiscaliza diariamente rodovias e estradas federais para exercício do direito de locomoção de veículos.",
                id: 3,
                quandoUsar: "A Polícia Rodoviária Federal (PRF) atende os acidentes de trânsito ocorridos em rodovias federais (BRs). Ao se deparar ou se envolver numa ocorrência desta natureza: Entre em contato com a PRF por telefone pelo número de emergência 191 ou presencialmente em qualquer Unidade Operacional e com as equipes de ronda."
              },
              {
                name: "Defesa Civil",
                phone: "199",
                description: "A Defesa Civil é responsável em precaver, socorrer, assistir e ajudar na recuperação da população em caso de desastres, sejam chuvas ou outras situações de risco.",
                id: 5,
                quandoUsar: "Acidentes rodoviários, ferroviários, metroviários, envolvendo grande número de pessoas; Inundações; Grandes incêndios, com vítimas; Acidentes com combustíveis, produtos perigosos (radioativos, químicos, inflamáveis, tóxicos, explosivos e corrosivos);"
              },
              {
                name: "SAMU",
                phone: "192",
                description: "O SAMU é o serviço médico brasileiro utilizado em caso de emergências médicas. Para utilizá-lo, basta ligar para 192 e explicar o tipo de emergência para acionar o serviço.",
                id: 6,
                quandoUsar: "Acidentes / traumas com vítimas; Choque elétrico; Falta de ar intensa; Suspeita de Infarto ou AVC (alteração súbita na fala, perda de força em um lado do corpo e desvio da comissura labial são os sintomas mais comuns); Afogamentos e engasgo; Intoxicação ou queimaduras graves; Trabalhos de parto em que haja risco de morte para a mãe e para o feto; Tentativas de suicídio; Urgências psiquiátricas; Vítima inconsciente; Em casos de intoxicação exógena ou envenenamento; Na ocorrência de maus tratos; Crises hipertensivas; dores no peito de aparecimento súbito; Acidentes com produtos perigosos; Agressão por arma de fogo ou arma branca; Soterramento, Desabamento; Crises Convulsivas; Na transferência inter-hospitalar de doentes graves; Outras situações consideradas de urgência ou emergência, com risco de morte, sequela ou sofrimento intenso."
              },
              {
                name: "Atendimento a Mulher",
                phone: "180",
                description: "O número 180 foi criado para dar mais informações sobre direitos femininos e apoio psicológico à mulheres em situação de violência, além de receber denúncias específicas sobre cárcere privado e tráfico de mulheres. Segundo Portal Brasil, até o final de 2013, o serviço deverá ser ampliado e funcionar também como um disque-denúncia. Leia mais sobre ações de proteção aos direitos dada Mulher.",
                id: 7,
                quandoUsar: "Diante de qualquer situação que configure violência doméstica, a mulher deve registrar a ocorrência em uma delegacia de polícia, preferencialmente nas Delegacias Especiais de Atendimento à Mulher – DEAM, que funciona 24 horas por dia, todos os dias."
              },
              {
                name: "Ibama",
                phone: "0800 061 8080",
                description: "O Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (Ibama) é uma autarquia federal dotada de personalidade jurídica de direito público, autonomia administrativa e financeira, vinculada ao Ministério do Meio Ambiente (MMA), conforme Art. 2º da Lei nº 7.735, de 22 de fevereiro de 1989",
                id: 8,
                quandoUsar: "Cuidados especializados ampliam as chances de retorno à natureza de animais silvestres encontrados em áreas ocupadas pelos seres humanos. No Estado de São Paulo, a Secretaria do Meio Ambiente conduz a gestão da fauna e orienta quem entra em contato com os bichos, que buscam, muitas vezes, locais de reprodução e alimentação."
              },
              {
                name: "Direitos Humanos",
                phone: "100",
                description: "Criado em 1997, com o nome de Disque Denúncia Nacional de Denúncia contra Abuso e Exploração de Crianças e Adolescentes, ele inicialmente foi uma iniciativa de organizações não governamentais para mensurar violências voltadas a essa população e agir contra elas.",
                id: 9,
                quandoUsar: "Abuso e Exploração de Crianças e Adolescentes, ou qualquer outra infração que viole os direitos dos seres humanos"
              },
              {
                phone: "185",
                name: "Salvamar",
                description: "O Salvamar Nordeste é o órgão da Marinha do Brasil responsável por coordenar a salvaguarda da vida humana no mar próximo à costa da Região Nordeste, abrangendo cerca de 1.575.000 milhas náuticas quadradas. Está sediado em Natal, no Rio Grande do Norte.",
                id: 10,
                quandoUsar: "Embarcação à deriva, por perda de propulsão (embarcação a motor) ou por quebra de mastro (barco a vela), necessitando de apoio aos tripulantes ou mesmo resgate; Naufrágio de embarcação, com tripulação desembarcada para balsas salva-vidas ou caída no mar; Pessoas caídas n’água – emergência comumente chamada de “homem ao mar”; Pessoas que adoecem a bordo, necessitando de orientação médica para tratamento ou, até mesmo, de resgate para encaminhamento/tratamento em hospital em terra (evacuação médica); Embarcações desaparecidas, dentre outras."
              }
        ]
    })  
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