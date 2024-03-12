const perguntas = [
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "A) Retorna o tipo de dado de uma variável",
            "B) Verifica se uma variável está definida",
            "C) Concatena duas strings"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de se declarar uma variável em JavaScript?",
        respostas: [
            "A) let myVar = 10;",
            "B) var myVar = 10;",
            "C) const myVar = 10;"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um closure em JavaScript?",
        respostas: [
            "A) Uma função que não tem acesso ao escopo externo",
            "B) Um bloco de código condicional",
            "C) Uma função que tem acesso ao escopo externo, mesmo após ser retornada"
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'forEach()' faz em um array JavaScript?",
        respostas: [
            "A) Retorna o primeiro elemento do array",
            "B) Itera sobre cada elemento do array",
            "C) Remove o último elemento do array"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
        respostas: [
            "A) 4",
            "B) '22'",
            "C) 22"
        ],
        correta: 1
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "A) Verifica se dois valores são iguais em valor e tipo",
            "B) Verifica se dois valores são iguais em valor",
            "C) Verifica se duas variáveis estão definidas"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
            "A) Retorna a parte fracionária de um número",
            "B) Converte uma string em um número inteiro",
            "C) Retorna o número de caracteres em uma string"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "A) Document Object Model - Uma representação estruturada de um documento HTML",
            "B) Uma função interna do JavaScript para criar objetos",
            "C) Um método para declarar variáveis locais"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "A) '==' compara apenas os valores, enquanto '===' compara os valores e os tipos",
            "B) '==' compara os valores e os tipos, enquanto '===' compara apenas os valores",
            "C) Ambos os operadores fazem a mesma coisa"
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma expressão regular em JavaScript?",
        respostas: [
            "A) Uma forma de expressar operações matemáticas",
            "B) Um método para realizar operações assíncronas",
            "C) Um objeto que descreve um padrão de caracteres"
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}