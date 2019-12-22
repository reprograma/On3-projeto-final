# Projeto M-de-Maravilhosa

Projeto final do Bootcamp Online de Front-end.

## Sobre o projeto

Precisamos falar sobre mulheres que mudaram o mundo!

- [Like a girl](https://youtu.be/XjJQBjWYDTs)
- [Microsoft](https://youtu.be/tNqSzUdYazw)

- Projeto da [turma anterior](https://reprograma.github.io/CursoOnline-Aula8-Projeto/)

## Etapas do projeto

1. Escolha uma personalidade maravilhosa que te inspira e coloque o nome dela nessa [planilha](https://docs.google.com/spreadsheets/d/1yAG3BRHUHdpQXZ41Pt4Qd4LtlSUrm6OlqqAjiTFOrtk/edit?usp=sharing).
2. Crie a página de perfil da _Maravilhosa_.
3. Insira na página principal o nome e a foto de sua _Maravilhosa_.
4. Inclua um link para a página do seu perfil (criada no Workshop) ao final da página de perfil da sua _Maravilhosa_.

## Orientações gerais

- Clonar este repositório: `git clone https://github.com/reprograma/On3-projeto-final.git`
- Crie sua branch: `git checkout -b seuNome`, ex: `git checkout -b cintiafumi`
- **Atenção**: Alterar somente em `index.html` onde houver seu nome e colocar o nome de sua personalidade no lugar
- Adicione uma pasta com seu-nome dentro da pasta `maravilhosas`, ex: _cintia-fumi_
- Dentro da pasta com seu-nome, crie um arquivo html com o nome da personalidade, ex: _ada-lovelace.html_
- Dentro da sua pasta, crie também as pastas de imagens, css e js, seguindo o padrão:

```
css/
  style.css
img/
  ...
js/
  script.js
maravilhosas/
  cintia-fumi/
    ada-lovelace.html
    css/
      style.css
    js/
      script.js
    img/
      ada-lovelace-perfil.jpg
      background.jpg
favicon.ico
index.html
README.md
```

- Recomendações para sua página:
  1. faça uso de html semântico
  2. mantenha um padrão na nomeação das classes
  3. página responsiva
  4. mínimo de 2 sections
  5. NAVBAR e FOOTER podem ser iguais aos da pagina principal
  6. Uso de ao menos 1 eventlistener (javascript)
- O objetivo é praticar HTML, CSS (com ou sem Bootstrap), responsividade, efeitos com JS ou JQuery

- Não esqueça de atualizar a Home! Alterar somente em `index.html` onde houver seu nome - Substitua o link na href, a imagem da sua mulher inspiradora, o alt da imagem e "Seu nome" pelo nome da sua maravilhosa:

```
<div class="maravilhosas__perfil">
  <a href="./maravilhosas/cintia-fumi/ada-lovelace.html">
    <img class="img-responsive" src="./img/ada.png" alt="Foto de Ada Lovelace" />
    <p>Ada Lovelace</p>
  </a>
</div>
```

**ATENÇÃO**

1. A entrega do projeto é obrigatória para obter o certificado do curso (ಠoಠ)
2. O projeto deve ser entregue até sexta-feira (20/12), porém se conseguirem entregar até antes da aula de quinta (19/12), vocês poderão acompanhar o merge e deploy da sua página! :purple_heart:

### Instalação de extensões no VSCode

- No VSCode, ir em File > Preferences > Extensions
- Busque pelo nome da extensão e instale-a
- Instale a extensão Live Server

<img src='./img/live-server.png' alt='Live Server extension' />

- Instale a extensão EditorConfig

<img src='./img/editorconfig.png' alt='EditorConfig extension' />

### Configurando Live Server

- Ir em **File > Preferences > Settings**
- Na aba **User > Extensions > Live Server Config > Settings: Custom Browser**, selecionar chrome

<img src='./img/live-server-config.png' />

### Rodando Live Server

- **VSCode**: habilite o Live Server clicando em **Go Live**

<img src='./img/live.png' alt='Go Live button' />

- Deverá abrir seu navegador com o endereço similar a: `http://127.0.0.1:5500/index.html`

### Verificando seu IP

- **Git Bash**:
  - Digite no Git Bash `ipconfig` ou `ipconfig //all`
  - Verifique o endereço IPv4. Deverá ser similar a: `192.168.X.X`

Ou...

- **Windows 10**: verifique seu IP conforme [instruções](https://support.microsoft.com/pt-br/help/4026518/windows-10-find-your-ip-address);

### Verificando seu site pelo navegador do celular

- Deixar o notebook e o celular conectados na mesma rede privada de internet (WiFi ou Dados).
- No navegador do seu celular, digite o endereço do seu IP seguido do número da porta aberta pelo Live Server `númeroIP:númeroPorta`, ex: `192.168.X.XX:5500`

Obs: Se estiver usando uma rede pública de internet, talvez não seja possível acessar o projeto desta maneira. Se este for o caso, uma solução seria compartilhar sua rede de dados com seu notebook.

## Fotos sem direitos autorais

- https://unsplash.com/
- https://pixabay.com/
- https://www.freepik.com/
- https://search.creativecommons.org/

## Revisão CSS

- documentação geral: (https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- linear-gradient: (https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
- background-attachment: (https://css-tricks.com/almanac/properties/b/background-attachment/)
- transition: (https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

## Revisão JavaScript Eventos

- metodo addEventListener() (https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
- Lista de Eventos (https://developer.mozilla.org/en-US/docs/Web/Events)

## Sites para referência:

- (https://natalyapeixoto.github.io/)
- (https://dutra21.github.io/projetoFinalReprograma/)
- (https://deboradom.github.io/venus/index.html)
- (https://search.muz.li/inspiration/best-designed-landing-pages/)
- (https://www.landingfolio.com/)
