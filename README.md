# Novas Cartas

Projeto final da disciplina de Projeto e Análise de Algoritmo (PAA-2022/1) da Universidade de Brasília.

## Intergrantes
- Alexsander Correa de Oliveira – mat **190023562**
- Fernanda Macedo de Sousa – mat **170010058**
- Gustavo Tomás de Paula – mat **190014148**
- Jonas Soares Rangel – mat **170146804**
- Lucas Junior Ribas - mat **160052289**
- Luiz Carlos Schonarth Junior – mat **190055171**
- Marco Antônio Athayde – mat **180126814**
- Mateus de Paula Rodrigues – mat **190017953**
- Rafael Henrique Nogalha de Lima – mat **190036966**
- Tong Zhou – mat **190038764**

## Pré-requisitos
- Node `>= v16.0.0` (preferencialmente a versão *lts v16.17.0*)
- npm (Node Package Manager) `>= v8.0.0`

## Contribuindo

### Padrão de commit

As mensagem de commit devem ser descritivas, **em português** (pra facilitar pra todo mundo) e com o prefixo relevante. O esqueleto da mensagem de commit seria `<prefixo>: <mensagem>`, como por exemplo `refactor: Reimplementa função eu_faço_nada()`.

Os prefixo podem ser:
- `refactor`: Refatoração de cógido.
- `feature`: Implementa alguma feature nova.
- `hotfix`: Corrige algum erro bobo que passou desapercebido.
- `bug`: Corrige algum bug do código.
- `style`: Adiciona/modifica estilização do CSS.
- `format`: Corrige formatação/estilo/identação do código.
- `package`: Adição/remoção de pacotes/dependências.
- `admin`: Modificação de arquivos de configuração e READMEs.

Me passem sugestões de prefixos caso tenham! 

### Branches

Quando for criar novas features, consertar bugs, modificar configurações do projeto e etc. lembre-se de criar uma nova branch nomeá-la seguindo o padrão `<prefixo>-<nome-da-branch>` usando '-' como separador entre palavras, como por exemplo `feature-adiciona-usuarios`.

Os prefixos são os mesmos da lista da seção anterior.


### Pull-requests

Toda vez que uma modificação for feita no repositório (um conjunto de commit para um objetivo comum, como implementar uma feature), um pull-request deve ser criado para dar do seu código na branch `develop`. Em caso de conflitos, tente corrigir eles de maneira sábia, pra não nukar o código do amiguinho.

**NÃO** dê push diretamente na branch `develop`, **muito menos** na `production` :) 

Siga o template que aparece quando você cria um pull-request, usando os mesmos prefixos listados anteriormente.

> Lembrando que isso tudo são só ~~fortes~~ recomendações pra gente ter um projetinho organizado ;), então não se estressa muito com tudo isso, desde que seus commits e pull-requests não sejam difíceis de serem compreendidos.

## Rodando o projeto

Assegure-se de que os pré-requisitos são antendidos no seu computador, dê uma olhada nas [recomendações](#recomendações) caso precise configurar seu ambiente de desenvolvimento. 

Antes de rotar o projeto, é necessário instalar as **dependências do projeto**. Em um terminal e dentro do diretório raiz do projeto, digite:

```shell
npm install
```

Após instalar as dependências, rode o *frontend* e o *backend* da aplicação usando o comando:

```shell
npm run dev
```

Para rodar o *frontend* ou o *backend* separadamente, se refira aos README's do [front](frontend/README.md) e do [back](backend/README.md) respectivamente.

## Recomendações

### Instalando **Node** e **npm**

Eu recomendo usar o script [nvm](https://github.com/nvm-sh/nvm) para baixar e instalar o Node e o npm. Essa ferramenta é capaz, inclusive, de gerenciar múltiplas versões de Node no seu computador.

#### Instalação básica do nvm e Node

Essa seção descreve uma instalação simples do nvm em sistemas Linux, para mais informações, leia o [guia de instalação](https://github.com/nvm-sh/nvm#installing-and-updating) do projeto. 

Em um terminal escreva o seguinte comando para baixar e instalar o nvm:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Em seguida, adicione o seguinte código ao arquivo de configuração do shell que você usa:

```bash
# Caso use bash, adicione em ~/.bashrc; caso use zsh, adicione em ~/.zshrc
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

E recarregue as configurações do seu shell com o seguinte comando no terminal:

```shell
source ~/.bashrc # Ou 'source ~/.zshrc' caso use zsh
```

Agore que o nvm está instalado, instale e ative a versão do node recomendada:

```shell
nvm install 16.17.0 && nvm use 16.17.0
```

E fim! Você está pronto para desenvolver o projeto, fique a vontade para seguir as [instruções de execução](#rodando-o-projeto) para rodar o projeto, caso queira ignorar as outras recomendações :(.

### Extensões do VSCode pra quem curte

TO-DO, tô com preguiça e quero dar push nesse repositório.
