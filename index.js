const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

client = new Client({

    puppeteer: {
        headless: true,
        args: [ '--no-sandbox', '--disable-gpu', ],
    },
    webVersionCache: { type: 'remote', remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html', }
});

client.on('qr', (qr) => {
    // gerar qr code
    qrcode.generate(qr, {small: true});
});


client.on('ready', () => {
    console.log('Client is ready!');
});

let firstMessageReceived = false;

client.on('message', async (msg) => {
    if (!firstMessageReceived) {
        // Responder apenas à primeira mensagem recebida
        console.log('Primeira mensagem recebida:', msg.body);
        client.sendMessage(msg.from, 'Olá! Obrigado por entrar em contato, para prosseguir com o atendimento basta responder /start');
        firstMessageReceived = true;
    }
});

client.on('message', async (msg) => {
    if (msg.body.toLowerCase() == '/start') {
        msg.reply('Olá!, Eu sou o pedro seu assistente virtual \nBem-vindo à nossa loja. Como posso ajudá-lo hoje?');
        client.sendMessage(msg.from, 'Diga para min em que topico eu posso te ajudar.');
        client.sendMessage(msg.from, 'cardapio, preço, horario, falar com atendente, promocoes');
        client.sendMessage(msg.from, 'exemplo: falar com atendente (para falar com um atendente)');

    }
    
    // responde quando fala "horario"
    if (msg.body.toLowerCase() == 'horario') {
        msg.reply('Nosso horario de funcionamento é de 10 ás 21h');
        client.sendMessage(msg.from, 'Para falar com um de nossos atendentes basta digitar: falar com atendente');
    }
    // responde quando fala "falar com atendente"
    if (msg.body.toLowerCase() == 'falar com atendente' || msg.body.toLowerCase() === 'atendente') { // se a pessoa responder só atendente, vai funcionar <-- tratar erros
        msg.reply('Muito Bem.');
        client.sendMessage(msg.from, 'Aguarde uns minutinhos que um de nossos atendentes entrarão em contato com você.');
    }
    // responde quando fala "cardapio" ou "preco"
    if (msg.body.toLowerCase() === 'cardapio' || msg.body.toLowerCase() === 'preco') {
        msg.reply('aqui está os tipos de produtos que vendemos aqui no nosso comércio.');
        client.sendMessage(msg.from, '🍻 Cerveja\n🥤 Refrigerante\n💧 Água\n🍪 Biscoito\n🍬 Doce');
        client.sendMessage(msg.from, 'Para ver o preço basta responder Exemplo: cerveja');
        client.sendMessage(msg.from, 'Para falar com um de nossos atendentes basta digitar: falar com atendente');

    }

    // responde quando fala "cerveja"
    if (msg.body.toLowerCase() == 'cerveja') {
        const cervejaimg = MessageMedia.fromFilePath('./imgs/preço_cerveja.jpg');
        msg.reply('aqui está uma imagem com os preços de cada cerveja');
        client.sendMessage(msg.from, cervejaimg);
        setTimeout(() => { // timeout para esperar a foto ser carregada
            client.sendMessage(msg.from, 'aqui está os tipos de produtos que vendemos aqui no nosso comércio.');
            client.sendMessage(msg.from, '🍻 Cerveja\n🥤 Refrigerante\n💧 Água\n🍪 Biscoito\n🍬 Doce');
            client.sendMessage(msg.from, 'Para ver o preço, basta responder com o exemplo: cerveja');
        }, 5000);
        client.sendMessage(msg.from, 'Para falar com um de nossos atendentes basta digitar: falar com atendente');
    }

    // responde quando fala "refrigerante"
    if (msg.body.toLowerCase() == 'refrigerante') {
        const refrigeranteimg = MessageMedia.fromFilePath('./imgs/preço_refri.jpg');
        msg.reply('aqui está uma imagem com os preços de cada refrigerante');
        client.sendMessage(msg.from, refrigeranteimg);
        setTimeout(() => { // timeout para esperar a foto ser carregada
            client.sendMessage(msg.from, 'aqui está os tipos de produtos que vendemos aqui no nosso comércio.');
            client.sendMessage(msg.from, '🍻 Cerveja\n🥤 Refrigerante\n💧 Água\n🍪 Biscoito\n🍬 Doce');
            client.sendMessage(msg.from, 'Para ver o preço, basta responder com o exemplo: cerveja');
        }, 5000);
        client.sendMessage(msg.from, 'Para falar com um de nossos atendentes basta digitar: falar com atendente');
    }

    // responde quando fala "agua"
    if (msg.body.toLowerCase() == 'agua') {
        const aguaimg = MessageMedia.fromFilePath('./imgs/preço_agua.jpg');
        msg.reply('aqui está uma imagem com os preços de cada agua');
        client.sendMessage(msg.from, aguaimg);
        setTimeout(() => { // timeout para esperar a foto ser carregada
            client.sendMessage(msg.from, 'aqui está os tipos de produtos que vendemos aqui no nosso comércio.');
            client.sendMessage(msg.from, '🍻 Cerveja\n🥤 Refrigerante\n💧 Água\n🍪 Biscoito\n🍬 Doce');
            client.sendMessage(msg.from, 'Para ver o preço, basta responder com o exemplo: cerveja');
        }, 5000);
        client.sendMessage(msg.from, 'Para falar com um de nossos atendentes basta digitar: falar com atendente');
    }


    
    if (msg.body.toLowerCase() == 'biscoito') {
        const biscoitoimg = MessageMedia.fromFilePath('./imgs/preço_biscoito.jpg');
        client.sendMessage(msg.from, 'aqui está uma imagem com os preços de cada biscoito');
        client.sendMessage(msg.from, biscoitoimg);
        setTimeout(() => { // timeout para esperar a foto ser carregada
            client.sendMessage(msg.from, 'aqui está os tipos de produtos que vendemos aqui no nosso comércio.');
            client.sendMessage(msg.from, '🍻 Cerveja\n🥤 Refrigerante\n💧 Água\n🍪 Biscoito\n🍬 Doce');
            client.sendMessage(msg.from, 'Para ver o preço, basta responder com o exemplo: cerveja');
        }, 5000);
        client.sendMessage(msg.from, 'Para falar com um de nossos atendentes basta digitar: falar com atendente');
    }

    
    if (msg.body.toLowerCase() == 'doce') {
        const doceimg = MessageMedia.fromFilePath('./imgs/preço_doce.jpg');
        msg.reply('aqui está uma imagem com os preços de cada doce');
        client.sendMessage(msg.from, doceimg);
        setTimeout(() => { // timeout para esperar a foto ser carregada
            client.sendMessage(msg.from, 'aqui está os tipos de produtos que vendemos aqui no nosso comércio.');
            client.sendMessage(msg.from, '🍻 Cerveja\n🥤 Refrigerante\n💧 Água\n🍪 Biscoito\n🍬 Doce');
            client.sendMessage(msg.from, 'Para ver o preço, basta responder com o exemplo: cerveja');
        }, 5000);
        client.sendMessage(msg.from, 'Para falar com um de nossos atendentes basta digitar: falar com atendente');
    }

    // responde quando fala "promocoes"
    if (msg.body.toLowerCase() == 'promocoes') {
        msg.reply('Aqui está uma lista com as promoções');
        client.sendMessage(msg.from, 'Pack de 12 latas de cerveja nacional por R$ 38,00. A unidade sai á R$ 3,16');
        client.sendMessage(msg.from, 'Promoção de final de semana: leve 3 packs de long neck e pague apenas por 2. válido apenas 1 vez por pessoa');
        client.sendMessage(msg.from, 'aqui está os tipos de produtos que vendemos aqui no nosso comércio.');
        client.sendMessage(msg.from, '🍻 Cerveja\n🥤 Refrigerante\n💧 Água\n🍪 Biscoito\n🍬 Doce');
        client.sendMessage(msg.from, 'Para falar com um de nossos atendentes basta digitar: falar com atendente');
    }


});

client.initialize();