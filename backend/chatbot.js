const qrcodeGenerator = require('qrcode'); 
const express = require('express'); 
const cors = require('cors'); 
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js');

const client = new Client();
const app = express();
const PORT = 3000;

app.use(cors());
let qrCodeData = null; 

// Serviço de leitura do QR Code
client.on('qr', async qr => {
    qrCodeData = await qrcodeGenerator.toDataURL(qr); 
});

// Após conectar
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
    qrCodeData = null; 
});

client.initialize();

// API para servir o QR Code
app.get('/get-qr', (req, res) => {
    if (qrCodeData) {
        res.json({ qrCode: qrCodeData });
    } else {
        res.status(404).json({ error: 'QR Code não disponível no momento.' });
    }
});

// Inicia o servidor para o frontend
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Função para criar delay
const delay = ms => new Promise(res => setTimeout(res, ms));

// Lógica principal do chatbot
client.on('message', async msg => {
    if (msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        const contact = await msg.getContact();
        const name = contact.pushname;

        if (msg.body === '1') {
            // Responde sobre "Como funciona"
            await delay(3000);
            await chat.sendStateTyping();
            await delay(3000);
            await client.sendMessage(
                msg.from,
                'COMO FUNCIONA?\n\nÉ muito simples.\n\n1º Passo: Faça seu cadastro e escolha o plano ou serviço que melhor atenda às suas necessidades.\n\n2º Passo: Após a confirmação do pagamento, você terá acesso imediato à nossa área exclusiva, onde poderá acompanhar o andamento do seu projeto ou serviço.\n\n3º Passo: Sempre que precisar, entre em contato ou acesse meu site para acompanhar os detalhes dos projetos e conhecer novas soluções que podem ajudar o seu negócio.\n\n🌐 Descubra mais: https://portfoliolanna.vercel.app/'
            );
        } else if (msg.body === '2') {
            // Responde sobre "Valores dos planos"
            await delay(3000);
            await chat.sendStateTyping();
            await delay(3000);
            await client.sendMessage(
                msg.from,
                '*Plano Individual:* R$22,50 por mês.\n\n*Plano Família:* R$39,90 por mês, inclui você mais 3 dependentes.\n\n*Plano TOP Individual:* R$42,50 por mês, com benefícios adicionais.\n\n*Plano TOP Família:* R$79,90 por mês, inclui você mais 3 dependentes.\n\nLink para cadastro: https://site.com'
            );
        } else if (msg.body === '3') {
            // Responde sobre "Benefícios"
            await delay(3000);
            await chat.sendStateTyping();
            await delay(3000);
            await client.sendMessage(
                msg.from,
                'Sorteio de prêmios todo ano.\n\nAtendimento ilimitado 24h por dia.\n\nLink para cadastro: https://site.com'
            );
        } else if (msg.body === '4') {
            // Responde sobre "Como aderir"
            await delay(3000);
            await chat.sendStateTyping();
            await delay(3000);
            await client.sendMessage(
                msg.from,
                'Você pode aderir aos nossos planos diretamente pelo nosso site ou pelo WhatsApp.\n\nApós a adesão, você terá acesso imediato.\n\nLink para cadastro: https://site.com'
            );
        } else if (msg.body === '5') {
            // Responde sobre "Outras perguntas"
            await delay(3000);
            await chat.sendStateTyping();
            await delay(3000);
            await client.sendMessage(
                msg.from,
                'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse WhatsApp ou visite nosso site: https://site.com'
            );
        } else {
            // Responde com a mensagem inicial se nenhuma das opções for válida
            await delay(3000);
            await chat.sendStateTyping();
            await delay(3000);
            await client.sendMessage(
                msg.from,
                `Olá! ${name.split(" ")[0]}. Sou o assistente virtual da empresa Deevoy. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Como funciona\n2 - Valores dos planos\n3 - Benefícios\n4 - Como aderir\n5 - Outras perguntas`
            );
        }
    }
});
