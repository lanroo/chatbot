
# **ChatBot**

**ChatBot** é um projeto que integra um chatbot no WhatsApp usando `whatsapp-web.js` e fornece uma interface frontend com React para facilitar o uso.

---

## **Instalação**

### **1. Pré-requisitos**
Certifique-se de que você tem as seguintes ferramentas instaladas:
- **Node.js** (versão 14 ou superior).
- **npm** (gerenciador de pacotes do Node.js).

---

### **2. Clone o repositório**
Se você ainda não clonou o projeto, faça isso com:
```bash
git clone https://github.com/lanroo/chatbot.git
cd chatbot
```

---

### **3. Configuração do Backend**
1. Acesse a pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor do backend:
   ```bash
   node chatbot.js
   ```
4. O backend estará rodando em:
   ```
   http://localhost:3000
   ```

---

### **4. Configuração do Frontend**
1. Acesse a pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor do frontend:
   ```bash
   npm run start
   ```
4. O frontend estará rodando em:
   ```
   http://localhost:3001
   ```

---

## **Estrutura do Projeto**
```plaintext
project-root/
├── backend/
│   ├── chatbot.js        # Arquivo principal do backend
│   ├── package.json      # Configuração do backend
├── frontend/
│   ├── src/              # Código do frontend
│   ├── package.json      # Configuração do frontend
└── README.md             # Documentação do projeto
```

---

## **Como Usar**
1. **Gere o QR Code**: Quando iniciar o backend, escaneie o QR Code com o WhatsApp para autenticar o bot.
2. **Interaja com o Chatbot**:
   - Digite uma das opções disponíveis para receber as respostas automáticas.

---

## **Próximos Passos**
- Melhorar a documentação com mais detalhes sobre as funcionalidades.
- Adicionar autenticação para proteger os endpoints da API.
- Publicar no npm para facilitar o uso como biblioteca.

---

## **Contribuição**
Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto!

---

## **Licença**
Este projeto está licenciado sob a [MIT License](LICENSE).
