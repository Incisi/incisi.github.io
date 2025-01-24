const questions = [
    {
        clientQuestion: "(1/12) O cliente diz que achou um cabelo no pão.",
        intrusiveThought: "Seu pensamento intrusivo diz para perguntar se ele colocou o cabelo lá para ganhar um pão grátis.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Pede desculpas e promete investigar o caso.", points: 0 },
            { text: "2. Diz: 'Tem certeza que não foi você?'", points: 7 },
            { text: "3. Responde: 'Cabelo é um brinde especial 😁😁'", points: 10 }
        ]
    },
    {
        clientQuestion: "(2/12) O cliente diz que está esperando há 20 minutos por uma resposta no chat.",
        intrusiveThought: "Seu pensamento intrusivo diz para ignorar e ver se ele desiste.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Responde: 'Tem gente na fila, calma.'", points: 5 },
            { text: "2. Pede desculpas pelo atraso e o atende imediatamente.", points: 0 },
            { text: "3. Sai para tomar um café e pensa nisso depois.", points: 7 }
        ]
    },
    {
        clientQuestion: "(3/12) O cliente diz que o pão ficou queimado e exige que seja feita uma troca!",
        intrusiveThought: "O seu pensamento intrusivo diz para mandar ele aprender a usar um forno.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Responde: 'Então não coma.'", points: 9 },
            { text: "2. Diz: 'Talvez o problema esteja no seu forno.'", points: 6 },
            { text: "3. Pede desculpas e explica a ele sobre a preparação correta do produto.", points: 0 }
        ]
    },
    {
        clientQuestion: "(4/12) O cliente diz que o pedido chegou errado!",
        intrusiveThought: "O seu pensamento intrusivo diz para perguntar se ele leu o pedido direito.",
        mainQuestion: "Como você resolve a situação?",
        options: [
            { text: "1. Responde: 'Problema seu 😅'", points: 10 },
            { text: "2. Pede desculpas e envia o pedido correto.", points: 0 },
            { text: "3. Diz: 'Confirme se você pediu certo.'", points: 5 }
        ]
    },
    {
        clientQuestion: "(5/12) O cliente diz que encontrou um pedaço de plástico no pão.",
        intrusiveThought: "O seu pensamento intrusivo diz para você oferecer um brinde como compensação pelo plástico extra.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Pede desculpas e promete investigar o ocorrido.", points: 0 },
            { text: "2. Diz: 'A embalagem está no pão, faz parte.'", points: 9 },
            { text: "3. Responde: 'Relaxa, é cortesia da casa.'", points: 10 },
        ]
    },
    {
        clientQuestion: "(6/12) O cliente diz que o pão não tem o sabor que ele esperava.",
        intrusiveThought: "O seu pensamento intrusivo diz para você mandar ele pedir um novo pão com o sabor certo.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Pede desculpas e tenta explicar para o cliente como preparar o pão da maneira correta.", points: 0 },
            { text: "2. Responde: 'Se você preparar do jeito certo ele terá um sabor melhor!'", points: 9 },
            { text: "3. Diz: 'Então aprenda a preparar o seu próprio pão.'", points: 8 }
        ]
    },
    {
        clientQuestion: "(7/12) O cliente diz: 'Por que o pão que entregaram é tão pequeno?'",
        intrusiveThought: "O seu pensamento intrusivo diz para perguntar se ele já ouviu falar em dieta.",
        mainQuestion: "O que você responde?",
        options: [
            { text: "1. Responde: 'Talvez você precise comprar óculos.'", points: 9 },
            { text: "2. Pede desculpas e explique que pode ter ocorrido um erro no lote.", points: 0 },
            { text: "3. Diz: 'Pequeno, mas saboroso!'", points: 4 }
        ]
    },
    {
        clientQuestion: "(8/12) O cliente pergunta se colocaram fermento vencido no pão, pois não cresceu nada!",
        intrusiveThought: "O seu pensamento intrusivo diz para sugerir que ele preste atenção no que ele está comprando.",
        mainQuestion: "Como você responde?",
        options: [
            { text: "1. Responde: 'Ele cresceu sim, talvez você que tenha dificuldades de visão.'", points: 10 },
            { text: "2. Diz: 'Não era para crescer mesmo, ele é feito para ser assim.'", points: 6 },
            { text: "3. Explica que o processo de fermentação é feito na fabricação e que ele não cresce mais depois.", points: 0 },
        ]
    },
    {
        clientQuestion: "(9/12) O cliente questiona o porquê de não termos atendimento 24 horas.",
        intrusiveThought: "O seu pensamento intrusivo diz para dizer que a vida não gira em torno dele.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Pede desculpas e informa os horários de funcionamento.", points: 0 },
            { text: "2. Responde: 'Você acha que somos robôs?'", points: 8 },
            { text: "3. Fala para usar o FAQ enquanto estamos offline.", points: 3 },
        ]
    },
    {
        clientQuestion: "(10/12) O cliente reclama que o pão de queijo tem pouco queijo.",
        intrusiveThought: "O seu pensamento intrusivo diz: 'Fale que vendemos pão de queijo, não queijo de pão'",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Responde: 'É só comprar 1kg de mussarela no mercado e colocar em cima!'", points: 9 },
            { text: "2. Pede desculpas e informa que o nosso pão de queijo é o único que de fato vai queijo na receita.", points: 0 },
            { text: "3. Pergunta se ele tem certeza que assou o pão de queijo da Brico e não um de outra marca.", points: 5 },
        ]
    },
    {
        clientQuestion: "(11/12) O cliente pergunta porque o pão é tão caro se é só farinha com água!",
        intrusiveThought: "O seu pensamento intrusivo manda perguntar se ele sabe o preço do trigo.",
        mainQuestion: "Como você responde?",
        options: [
            { text: "1. Diz para ele fazer o próprio pão em casa.", points: 9 },
            { text: "2. Explica que o preço reflete a qualidade e o processo de produção.", points: 0 },
            { text: "3. Responde: 'É só parar de reclamar e ir comprar em outro lugar.'", points: 10 }
        ]
    },
    {
        clientQuestion: "(12/12) O cliente diz: 'Minha filha é alérgica e vocês não avisaram que tinha glúten!'",
        intrusiveThought: "O seu pensamento intrusivo diz: 'Pergunte se ele sabe ler rótulos.'",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Diz: 'Está no rótulo, você deveria ter lido.'", points: 8 },
            { text: "2. Responde: 'Se você soubesse ler isso não teria acontecido.'", points: 10 },
            { text: "3. Pede desculpas e explica onde estão as informações no rótulo.", points: 0 }
        ]
    }
];

let currentQuestion = 0;
let totalPoints = 0;
let answerSelected = false;

function loadQuestion() {
    const clientQuestionElement = document.getElementById("client-question");
    const intrusiveThoughtElement = document.getElementById("intrusive-thought");
    const mainQuestionElement = document.getElementById("main-question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next");

    const question = questions[currentQuestion];

    clientQuestionElement.textContent = question.clientQuestion;
    intrusiveThoughtElement.textContent = question.intrusiveThought;
    mainQuestionElement.textContent = question.mainQuestion;

    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const li = document.createElement("li");
        const radio = document.createElement("input");
        const label = document.createElement("label");

        radio.type = "radio";
        radio.name = "option";
        radio.id = `option${index}`;
        radio.value = option.points;

        label.setAttribute("for", `option${index}`);
        label.textContent = option.text;

        radio.addEventListener("change", () => {
            nextButton.style.visibility = "visible";
            totalPoints += parseInt(radio.value);
        });

        li.appendChild(radio);
        li.appendChild(label);
        optionsElement.appendChild(li);
    });

    nextButton.style.visibility = "hidden";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML = "";
    quizElement.classList.add("feedback-active");

    let personality;
    if (totalPoints <= 11) {
        personality = "✨ Parabéns! Sua paciência e calma são dignas de um monge. Você lidou com todas as situações com a classe de quem respira fundo antes de responder. O cliente é rei e você é o mestre zen do atendimento. 🧘‍♂️🌿";
    } else if (totalPoints <= 33) {
        personality = "😌 Você teve um ou dois momentos de tensão, mas no geral conseguiu manter a compostura. Talvez um café (ou chá) ajude a balancear ainda mais o humor no próximo atendimento. Respire fundo, você está quase no nirvana! ☕🌸";
    } else if (totalPoints <= 67) {
        personality = "😅 Opa, parece que os pensamentos intrusivos saíram da jaula algumas vezes. Você tentou segurar, mas às vezes foi difícil evitar a sinceridade brutal. Que tal praticar a velha tática de contar até 10 antes de responder? 🌪️🤔";
    } else {
        personality = "🔥 Calma, calma! Sua sinceridade virou fogo e queimou a diplomacia no atendimento. Respire fundo, medite, ouça uma playlist relaxante... e talvez evite responder chats depois de um dia difícil. A comunicação é tudo, mas sem o temperamento explosivo! 🚨💥";
    }

    quizElement.innerHTML = `
        <div class="question">Você concluiu o quiz! 🎉</div>
        <p>Sua pontuação: ${totalPoints}</p>
        <p>${personality}</p>
        <img id="logo" src="./assets/img/logo.png" alt="Logo da Brico">
    `;
}

loadQuestion();