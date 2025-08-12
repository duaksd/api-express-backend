# Comandos

- npm init // Cria o package.json para iniciar um projeto node
- npm i nome_pacote // Instala um pacote específico
- npm install ou npm i // Instala todos os pacotes do package.json
- npm run nome_script // Roda o script do package.json ('Start' funciona sem 'run')

# Comandos Git

// Configura usuário e email do git na máquina
- git config --global user.name "Eduarda Oliveira Casado"
- git config --global user.email "casado.eduarda@aluno.ifsp.edu.br"

- git init // Inicia o git em uma pasta
- git remote add origin _url_do_github // Vincula meu projeto local ao repositório do github

# Tópicos Importantes

- O que é framework: Conjunto de recursos/ferramentas para resolver um problema.
- O que é JavaScript: Linguagem de programação popular para WEB.
- O que é node.js: Ambiente/runtime que roda o JavaScript no terminal/servidor.
- O que é o Express: É um framework para desenvolver o back-end do site.
- API: Conjunto de rotas que dá uma resposta ao usuário.
- O que é NPM: Node Package Manager.
- Protocolo http: Protocolo que determina as regras das requisições e respostas da WEB.
- Métodos http (GET, POST, PUT, PATCH, DELETE): GET usado para obter dados da API, POST usado para enviar dados, PUT edita dados, PATCH edita parcialmente alguns dados.
- Como mudar o formato de importação/exportação de require para import: Adicionar no package.json a propriedade type module e mudar de "require" para "import ... from ...".
- "--watch": "Observar". Parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado. Mudou o código e salvou = ele reinicia o server. Em caso de erro, ele não reinicia.

# Sintaze básica de uma rota da API. Exemplo:

app.post('/produto', (req, res) => {
    res.json({message: 'Criado com sucesso!'})
})

- Método criar/inserir: POST
- Rota ou endereço: /produto
- Tipo de resposta: json