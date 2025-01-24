const questions = [
    {
        clientQuestion: "O cliente diz que achou um cabelo no pão.",
        intrusiveThought: "Seu pensamento intrusivo diz para perguntar se ele colocou o cabelo lá para ganhar um pão grátis.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Pede desculpas e promete investigar o caso.", points: 3 },
            { text: "2. Diz: 'Tem certeza que não foi você?'", points: 7 },
            { text: "3. Responde: 'Cabelo é um brinde especial 😁😁'", points: 10 }
        ]
    },
    {
        clientQuestion: "O cliente diz que está esperando há 20 minutos por uma resposta no chat.",
        intrusiveThought: "Seu pensamento intrusivo diz para ignorar e ver se ele desiste.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Responde: 'Tem gente na fila, calma.'", points: 5 },
            { text: "2. Pede desculpas pelo atraso e o atende imediatamente.", points: 3 },
            { text: "3. Sai para tomar um café e pensa nisso depois.", points: 8 }
        ]
    },
    {
        clientQuestion: "O cliente diz que o pão ficou queimado e exige que seja feita uma troca!",
        intrusiveThought: "O seu pensamento intrusivo diz para mandar ele aprender a usar um forno.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Responde: 'Então não coma.'", points: 9 },
            { text: "2. Diz: 'Talvez o problema esteja no seu forno.'", points: 6 },
            { text: "3. Pede desculpas e explica a ele sobre a preparação correta do produto.", points: 2 }
        ]
    },
    {
        clientQuestion: "O cliente diz que o pedido chegou errado!",
        intrusiveThought: "O seu pensamento intrusivo diz para perguntar se ele leu o pedido direito.",
        mainQuestion: "Como você resolve a situação?",
        options: [
            { text: "1. Responde: 'Problema seu 😅'", points: 10 },
            { text: "2. Pede desculpas e envia o pedido correto.", points: 3 },
            { text: "3. Diz: 'Confirme se você pediu certo.'", points: 6 }
        ]
    },
    {
        clientQuestion: "O cliente diz que encontrou um pedaço de plástico no pão.",
        intrusiveThought: "O seu pensamento intrusivo diz para você oferecer um brinde como compensação pelo plástico extra.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Pede desculpas e promete investigar o ocorrido.", points: 2 },
            { text: "2. Diz: 'A embalagem está no pão, faz parte.'", points: 10 },
            { text: "3. Responde: 'Relaxa, é cortesia da casa.'", points: 8 },
        ]
    },
    {
        clientQuestion: "O cliente pergunta se a gente faz entrega.",
        intrusiveThought: "O seu pensamento intrusivo diz para você mandar o cliente fazer o cardio do dia e vir na loja buscar!",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Informa o cliente que não realizamos entregas para pessoas físicas.", points: 1 },
            { text: "2. Manda ele procurar em uma de nossas lojas parceiras.", points: 2 },
            { text: "3. Fala pra ele deixar de ser preguiçoso e levantar a bunda do sofá.", points: 10 }
        ]
    },
    {
        clientQuestion: "O cliente diz que o pão não tem o sabor que ele esperava.",
        intrusiveThought: "O seu pensamento intrusivo diz para você mandar ele pedir um novo pão com o sabor certo.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Pede desculpas e tenta explicar para o cliente como preparar o pão da maneira correta.", points: 2 },
            { text: "2. Responde: 'Se você preparar do jeito certo ele terá um sabor melhor!'", points: 9 },
            { text: "3. Diz: 'Então aprenda a preparar o seu próprio pão.'", points: 11 }
        ]
    },
    {
        clientQuestion: "O cliente diz: 'Por que o pão que entregaram é tão pequeno?'",
        intrusiveThought: "O seu pensamento intrusivo diz para perguntar se ele já ouviu falar em dieta.",
        mainQuestion: "O que você responde?",
        options: [
            { text: "1. Responde: 'Talvez você precise comprar óculos.'", points: 9 },
            { text: "2. Pede desculpas e explique que pode ter ocorrido um erro no lote.", points: 3 },
            { text: "3. Diz: 'Pequeno, mas saboroso!'", points: 5 }
        ]
    },
    {
        clientQuestion: "O cliente fala: 'Por que o pão veio congelado? Pensei que fosse fresco.'",
        intrusiveThought: "O seu pensamento intrusivo manda você dizer: 'Óbvio, não somos uma padaria.'",
        mainQuestion: "Como você esclarece a situação?",
        options: [
            { text: "1. Diz: 'É claro, estamos em 2025, todo mundo sabe disso.'", points: 8 },
            { text: "2. Explica gentilmente que o pão é ultracongelado para preservar a qualidade.", points: 2 },
            { text: "3. Responde: 'Você deveria ter lido antes de comprar.'", points: 6 },
        ]
    },
    {
        clientQuestion: "O cliente pergunta se colocaram fermento vencido no pão, pois não cresceu nada!",
        intrusiveThought: "O seu pensamento intrusivo diz para sugerir que ele preste atenção no que ele está comprando.",
        mainQuestion: "Como você responde?",
        options: [
            { text: "1. Responde: 'Ele cresceu sim, talvez você que tenha dificuldades de visão.'", points: 10 },
            { text: "2. Diz: 'Não era para crescer mesmo, ele é feito para ser assim.'", points: 5 },
            { text: "3. Explica que o processo de fermentação é feito na fabricação e que ele não cresce mais depois.", points: 2 },
        ]
    },
    {
        clientQuestion: "O cliente diz: 'Por que a validade do pão está curta? Não dá tempo de consumir tudo!'",
        intrusiveThought: "O seu pensamento intrusivo diz: 'Sugira que ele coma mais rápido.'",
        mainQuestion: "Qual será sua explicação?",
        options: [
            { text: "1. Explica que os produtos têm um longo prazo de validade, e que ele deve checar a data antes de comprar", points: 3 },
            { text: "2. Responde: 'Era só você ter olhado a data de validade.'", points: 5 },
            { text: "3. Diz: 'Problema seu, não olhou a data de validade porque não quis.'", points: 8 }
        ]
    },
    {
        clientQuestion: "O cliente questiona o porquê de não termos atendimento 24 horas.",
        intrusiveThought: "O seu pensamento intrusivo diz para dizer que a vida não gira em torno dele.",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Pede desculpas e informa os horários de funcionamento.", points: 3 },
            { text: "2. Responde: 'Você acha que somos robôs?'", points: 10 },
            { text: "3. Fala para usar o FAQ enquanto estamos offline.", points: 6 },
        ]
    },
    {
        clientQuestion: "O cliente reclama que o pão de queijo tem pouco queijo.",
        intrusiveThought: "O seu pensamento intrusivo diz: 'Fale que vendemos pão de queijo, não queijo de pão'",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Responde: 'É só comprar 1kg de mussarela no mercado e colocar em cima!'", points: 9 },
            { text: "2. Pede desculpas e informa que o nosso pão de queijo é o único que de fato vai queijo na receita.", points: 2 },
            { text: "3. Pergunta se ele tem certeza que assou o pão de queijo da Brico e não um de outra marca.", points: 6 },
        ]
    },
    {
        clientQuestion: "O cliente pergunta porque o pão é tão caro se é só farinha com água!",
        intrusiveThought: "O seu pensamento intrusivo manda perguntar se ele sabe o preço do trigo.",
        mainQuestion: "Como você responde?",
        options: [
            { text: "1. Diz para ele fazer o próprio pão em casa.", points: 7 },
            { text: "2. Explica que o preço reflete a qualidade e o processo de produção.", points: 3 },
            { text: "3. Responde: 'É só parar de reclamar e ir comprar em outro lugar.'", points: 9 }
        ]
    },
    {
        clientQuestion: "O cliente diz: 'Minha filha é alérgica e vocês não avisaram que tinha glúten!'",
        intrusiveThought: "O seu pensamento intrusivo diz: 'Pergunte se ele sabe ler rótulos.'",
        mainQuestion: "O que você faz?",
        options: [
            { text: "1. Diz: 'Está no rótulo, você deveria ter lido.'", points: 5 },
            { text: "2. Responde: 'Se você soubesse ler isso não teria acontecido.'", points: 10 },
            { text: "3. Pede desculpas e explica onde estão as informações no rótulo.", points: 3 }
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
    if (totalPoints <= 30) {
        personality = "🧘 Você é extremamente calmo e profissional! Mantém sempre a compostura, mesmo nos momentos difíceis.";
    } else if (totalPoints <= 60) {
        personality = "⚖️ Você consegue equilibrar bem suas respostas, mas às vezes pode deixar escapar um pensamento intrusivo.";
    } else if (totalPoints <= 100) {
        personality = "😅 Seus pensamentos intrusivos começam a influenciar suas decisões. É bom ter cuidado para não perder o controle.";
    } else {
        personality = "🔥 Seus pensamentos intrusivos estão completamente no comando! Talvez seja hora de repensar como você lida com essas situações.";
    }

    quizElement.innerHTML = `
        <div class="question">Você concluiu o quiz! 🎉</div>
        <p>Sua pontuação: ${totalPoints}</p>
        <p>${personality}</p>
        <img id="logo" src="./assets/img/logo.png" alt="Logo da Brico">
    `;
}

loadQuestion();