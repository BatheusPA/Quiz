const perguntas = [
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
        respostas: [
            "let",
            "var",
            "const"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para imprimir uma mensagem no console?",
        respostas: [
            "print()",
            "log()",
            "console.log()"
        ],
        correta: 2
    },
    {
        pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "' Este é um comentário",
            "* Este é um comentário *"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "stringToInt()",
            "toInteger()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
        respostas: [
            "for (i = 0; i < 5; i++)",
            "loop (i = 0; i < 5; i++)",
            "for (i < 5; i++)"
        ],
        correta: 0
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: [
            "function: minhaFuncao()",
            "função minhaFuncao()",
            "function minhaFuncao()"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "addToEnd()"
        ],
        correta: 0
    },
    {
        pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
        respostas: [
            "typeof",
            "typeOf",
            "type()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função usada para parar a execução de um loop em JavaScript?",
        respostas: [
            "stop()",
            "halt()",
            "break()"
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