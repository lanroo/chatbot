
# **ChatBot**

**ChatBot** é um projeto que integra um chatbot no WhatsApp usando `whatsapp-web.js` no backend e fornece uma interface frontend com React para facilitar o uso. O projeto está estruturado para ser modular, escalável e fácil de usar.

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
📦 chatbot/
├── 📂 backend/                # Backend do chatbot
│   ├── 📂 src/                # Código principal do backend
│   │   ├── 📂 controllers/    # Controladores das rotas do backend
│   │   ├── 📂 services/       # Lógica principal e serviços do WhatsApp
│   │   ├── 📂 routes/         # Definição das rotas da API
│   │   ├── 📂 utils/          # Funções auxiliares (validações, helpers)
│   │   ├── 📝 chatbot.js      # Configuração do cliente WhatsApp
│   │   └── 📝 app.js          # Configuração principal do servidor Express
│   ├── 📂 tests/              # Testes automatizados do backend
│   ├── 📝 package.json        # Configuração das dependências do backend
├── 📂 frontend/               # Frontend do chatbot
│   ├── 📂 public/             # Arquivos estáticos públicos
│   │   └── 📝 index.html      # Entrada HTML principal do React
│   ├── 📂 src/                # Código principal do frontend
│   │   ├── 📂 components/     # Componentes React reutilizáveis
│   │   ├── 📂 styles/         # Arquivos de estilo (CSS)
│   │   └── 📝 App.js          # Componente principal do React
│   ├── 📝 package.json        # Configuração das dependências do frontend
└── 📝 README.md               # Documentação geral do projeto                
```

---

## **Como Usar**
1. **Gere o QR Code**: Quando iniciar o backend, escaneie o QR Code com o WhatsApp para autenticar o bot.
2. **Interaja com o Chatbot**:
   - Digite uma das opções disponíveis para receber as respostas automáticas.

---

## **Principais Funcionalidades**
- Geração e leitura de QR Code para autenticação do WhatsApp.
- Respostas automáticas baseadas em comandos predefinidos.
- Integração com uma interface React para exibir o QR Code e permitir interações.

---

## **Próximos Passos**
- Adicionar autenticação para proteger os endpoints da API.
- Melhorar a interface de interação com o chatbot no frontend.
- Publicar a biblioteca no npm para facilitar o uso como pacote.
- Implementar suporte a grupos e envio de mensagens em massa.

---

## **Contribuição**
Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto!

---

## **Licença**
Este projeto está licenciado sob a [MIT License](LICENSE).
