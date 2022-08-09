# Como Configurar o ambiente para trabalho

## Pre-requirements

- [GitHub] - (Realize o cadastro no site https://github.com/)
- [Git] (9https://git-scm.com/)
- [Node.js] (https://nodejs.org/en/)
- [Npm] (Ao instalar o Node.js o npm é instalado junto! S2)
- [Google.Chrome] (https://www.google.com/intl/pt_br/chrome/) 
- [Visual.Studio.Code] (https://code.visualstudio.com/) 

# Installation

A instalação de todos os programas será realizado através do Power shell por intermedio do Chocolatey. Abra o PowerShell como ADM e realize a instalação do chocolatey através do comando abaixo:
[Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))] 
(O chocolatey é um gerenciador e instalador de pacotes de linha de comando em nível de máquina para software Windows. Para maiores informações acesse: [https://chocolatey.org/])

Instale o git com o comando: choco install git --version 2.37.1 -y
Instale o nodejs com o comando: choco install nodejs --version 18.7.0 -y
Instale o vscode com o comando: choco install vscode --version 1.70.0 -y
Instale o vscode com o comando: choco install googlechrome --version 104.0.5112.81 -y
_____

# Fork e clone o projeto 🐑

1. Abra o googlechrome
2. Acesse a URL https://github.com/wlsf82/cypress-basico-v2
3. Faça um [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) do projeto

> 👨‍🏫 É de extrema importância que você trabalhe no seu fork, para que ao final do curso, possa rodar os testes em um _pipeline_ de integração contínua.

4. No seu fork do projeto, clique no botão **Code**, escolha uma opção de clone (HTTPS ou SSH) e copie o link de clone do projeto

> 👨‍🏫 Eu dou preferência ao clone via SSH, pois considero mais prático.
>
> Para detalhes sobre como criar e configurar uma chave SSH no GitHub, leia a [documentação oficial]
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh;
https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent;
https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account.

5. Crie uma pasta no local de sua escolha, aonde iremos armazenar o projeto.  Execute o comando `git clone [cole-o-link-copiado-aqui]`.

> 👨‍🏫 Para garantir que está clonando o seu fork, verifique a existência do seu usuário no GitHub na URL de clone do projeto. Algo como o seguinte `git@github.com:[seu-usuário-aqui]/cypress-basico-v2.git`

6. Após o clone do projeto, acesse o diretório recém clonado (ex.: `cd cypress-basico-v2/`).

> **Obs.:** Dentro do diretório `cypress-basico-v2/`, você terá os sub-diretórios `.git/` (diretório oculto), `lessons/` e `src/`, e os arquivos `.gitignore` (arquivo oculto), `LICENSE`, `package.json` e `README.md`.
>
> Dentro do diretório `src/`, você terá os arquivos `index.html`, `privacy.html`, `script.js` e `style.css`, os quais são o código-fonte da aplicação em teste.

## Instalação e inicialização do [Cypress](https://cypress.io) 🌲

1. Na raiz do projeto (Pasta criada), execute o comando `npm install cypress@9.5.1 --save-dev`
2. Logo após, execute o comando `npx cypress open` para abrir o Cypress pela primeira vez
3. Por fim, com o _Test Runner_ aberto, delete os exemplos criados automaticamente, crie um arquivo chamado `CAC-TAT.spec.js` e feche o _Test Runner_.

> **Obs. 2:** Quando inicializado pela primeira vez, o Cypress automaticamente cria o arquivo `cypress.json` e o diretório `cypress/`, com os sub-diretórios `fixtures/`, `integration/`, `plugins/` e `support/`, com seus respetivos arquivos (com exceção dos exemplos, que acabamos de deletar).

## Configurações extra

1. Atualize o arquivo `cypress.json` conforme abaixo.

```json
{
  "pluginsFile": false,
  "viewportHeight": 880,
  "viewportWidth": 1280
}
```

> 👨‍🏫 Com isso, estamos "dizendo ao Cypress" que:
>
> - Não vamos usar o arquivo de plugins (o qual é criado automaticamente e não precisaremos durante  o curso)
> - Iremos sobrescrever a altura e largura do [_viewport_ padrão do Cypress](https://docs.cypress.io/api/commands/viewport#Defaults)

2. Delete o diretório `cypress/plugins/`, visto que este não será necessário durante o curso.

3. Pronto, agora que o _Ambiente_ está devidamente configurado, é só começar a estudar!

_____

Documento criado por Martiliano 