API de Digimons, é possível encontrar todos Digimons, encontrar seu digimon favorito passando o seu nome ou encontrar quais Digimons são do level que desejar.

<details>
<summary><strong>Habilidades envolvidas</strong></summary>
  - Node <br />
  - Javascript<br />
  - Express<br />
  - Sequelize<br />
  - Docker e Docker-compose<br />
  - Postgres<br />
  - Axios

</details>
<details>
<summary><strong>Como rodar</strong></summary>
  - Na raiz do projeto rode o comando `docker-compose up` para criar seu docker-compose, esse container possui o postgres com as variaveis já definidas. Caso não queira utilizar Docker, as variaveis para conexão com o banco de dados estão no arquivo ./Backend/src/database/config/database.js<br />
  - Com a conexão com o Banco de Dados criada, na pasta ./Backend rode o comando `npm install` para instalar todas as dependencias e `npm run db:reset` para criar o banco, criar as tabelas e popular o banco de dados.<br />
  - Com o Banco de Dados já criado e populado rode o comando `npm run dev` para startar a API, irá aparecer a menssagem "API escutando a rota http://localhost:3001" no console caso tudo tenha ocorrido como o esperado.
</details>
<details>
<summary><strong>API</strong></summary></br>

**`GET /`**
 - Use o endpoint `GET /` para testar a api (Ela não passa por nenhuma validação e não se conecta com o banco), em caso de sucesso retorna:
```json
  {
    "message": "API funcionando"
  }
```

**`GET /digimons`**
 - Retorna todos os digimons do banco.
```json
[
  {
    "id": 1,
    "name": "Koromon",
    "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
    "level": "In Training"
  },
  {
    "id": 2,
    "name": "Tsunomon",
    "img": "https://digimon.shadowsmith.com/img/tsunomon.jpg",
    "level": "In Training"
  },
  {
    "id": 3,
    "name": "Yokomon",
    "img": "https://digimon.shadowsmith.com/img/yokomon.jpg",
    "level": "In Training"
  }
]
```

**`GET /digimons/name/:name`**
 - Retorna os Digimons com esse nome. (Essa Query desconsidera letras HIGHER e LOWER e retorna também os digimons que incluirem o "name" passado)
 - No exemplo pesquisei "Agumon" e o retorno foi o seguinte:
```json
[
  {
    "id": 8,
    "name": "Agumon",
    "img": "https://digimon.shadowsmith.com/img/agumon.jpg",
    "level": "Rookie"
  },
  {
    "id": 48,
    "name": "Pagumon",
    "img": "https://digimon.shadowsmith.com/img/pagumon.jpg",
    "level": "In Training"
  },
  {
    "id": 148,
    "name": "SnowAgumon",
    "img": "https://digimon.shadowsmith.com/img/snowagumon.jpg",
    "level": "Rookie"
  }
]
```

**`GET /digimons/level/:level`**
 - Retorna os Digimons que estão nesse level.
```json
[
  {
    "id": 89,
    "name": "VenomMyotismon",
    "img": "https://digimon.shadowsmith.com/img/venommyotismon.jpg",
    "level": "Mega"
  },
  {
    "id": 90,
    "name": "WarGreymon",
    "img": "https://digimon.shadowsmith.com/img/wargreymon.jpg",
    "level": "Mega"
  },
  {
    "id": 91,
    "name": "MetalGarurumon",
    "img": "https://digimon.shadowsmith.com/img/metalgarurumon.jpg",
    "level": "Mega"
  }
]
```

**`POST /digimons`**
 - Cria um novo digimon no banco de dados.
 - Você precisa passar o seguinte payload no body da requisição
 ```json
  {
    "name": "Koromon",
    "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
    "level": "In Training"
  }
```
 - Em caso de sucesso retorna o digimon criado e o código 200
```json
{
  "id": 218,
  "name": "Koromon",
  "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
  "level": "In Training"
}
```

**`PUT /digimons/:id`**
 - Atualiza um digimon já existente no banco de dados.
 - Você precisa passar o seguinte payload no body da requisição:
 ```json
{
  "name": "Koromon",
  "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
  "level": "In Training"
}
```
 - Em caso de sucesso retorna a seguinte resposta com o código 200
```json
{
  "id": 20,
  "name": "Koromon22",
  "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
  "level": "In Training"
}

```

**`DELETE /digimons/:id`**
 - Deleta um digimon do banco de dados.
 - Em caso de sucesso retorna a seguinte resposta com o código 200
```json
{
  "success": true,
  "message": "Digimon excluído com sucesso"
}

```

</details>
