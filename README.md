<h1 align="center">ANIME LIST</h1>

![image](https://user-images.githubusercontent.com/102335999/228558628-c9cd35e6-3a73-4e6f-86c7-5e8af974e247.png)

<h2> Sobre o projeto </h2>

Sempre fui fã da cultura oriental e apaixonado por Animes desde criança, entretanto sempre tive um problema na hora de acompanhar os lançamentos, que
ocorrem uma vez por semana. Como sempre acompanhei diversos deles ao mesmo tempo, eu sempre esquecia de assistir algum, então dessa forma criei uma 
aplicação web onde eu consigo deixar listados os animes que estou vendo e ainda mandar um lembrete para o meu e-mail com o nome do anime e o dia que 
ele será lançado para que eu nunca esqueça de acompanhar todos!

<h2> Funcionalidades </h2>

Existe um filtro de pesquisa no canto superior direito onde você pode buscar algum anime em específico

![filter](https://user-images.githubusercontent.com/102335999/228561051-4b3f1ac8-03ef-48a8-b033-6636bbb98ab6.gif)


Clicando em qualquer anime abre uma outra página com mais informações específicas e contamos com dois botões, um de retornar a Home e outro para adicionar
o anime a sua lista de emails.

![pag](https://user-images.githubusercontent.com/102335999/228562403-016a678b-8408-4395-ad2e-97a3dfbf8f08.gif)

Preenchendo o formulário você receberá um e-mail em sua caixa com todas as informações

![tempsnip](https://user-images.githubusercontent.com/102335999/228565638-878488d6-0c0b-48ac-93fc-55fafc6057d5.png)

<h2> Tecnologias utilizadas </h2>

<strong>BACKEND</strong>
<p>Primeiro criei um servidor e compilei as informações dos animes em um arquivo JSON, peguei tudo que precisava dentro da API MyAnimeList, depois criei um arquivo JS
para ser o servidor onde rodaria a aplicação com suas funcionalidades. As informações que viriam do front são o que o usuário preencher dentro do formulário. Utilizei
algumas bibliotecas para facilitar o desenvolvimento da aplicação como Axios, Moment, SendGrid e Express.</p>


<strong>FRONTEND</strong>
<p>Para começar o projeto usei o backplate do Vite e desenvolvi a aplicação usando React com Typescript e para estilização Css Modules. Para facilitar o desenolvimento
da aplicação usei algumas bibliotecas como React-router-dom e o Phospor React. Toda a parte de estilização foi feita sem usar nenhum componente pronto, foram todos
montados do zero.</p>


<h2> Tecnlogias utilizadas </h2>

<li>Javascript</li>
<li>React</li>
<li>Typescript</li>
<li>Html, Css</li>


<h2> Como executar o projeto </h2>

<li>#Backend</li>
Baixe o arquivo [Anime-List-Server](https://github.com/ulrichsantos/Server-Anime-List) que está no meu repositório, será necessário criar uma conta
no SendGrid para ter acesso a uma chave API na qual será responsável pelos envios do email de forma automática. A chave deve ser inserida na linha 31 entre os parentêses.
Para executar o servidor basta rodar o comando node server.js no terminal.

![image](https://user-images.githubusercontent.com/102335999/228618417-829c4376-5c68-46d9-bd33-fe9a5567addd.png)


