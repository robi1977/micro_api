# API dla projektu mikrostruktur

Przedstawione zostanie przygotowanie API dla projektu bazy mikrostruktur.
Wykorzystane narzędzia to: 
GraphQL, Apollo Server, Express Server, NodeJS, MongoDB

<!-- zobaczymy na ile mi sił starczy -->

Instalacja niezbędnych komponentów:
instalacja serwera apollo, express i narzędzia graphql:
`npm install apollo-server-express apollo-server-core express graphql`
potem
`npm install nodemon` i dodanie skryptu w package.json `"dev":"nodemon src/index.js"`
kolejny krok instalacja 
`npm install dotenv` i dodanie w `src/index.js` ładowania zmiennych z pliku `.env` - `require('dotenv').config()` TODO: sprawdzić czy jest poprzebne instalowanie *dotenv*
utworzenie pliku `.env` i wprowadzenie zmiennej `PORT=4000`
restert serwera za pomocą komendy *rs*


dodanie skryptów:
```bash
  "dev": "nodemon src/index.js",
```

`npm install bcrypt cors dotenv helmet jsonwebtoken`
`npm install mongoose`
`npm install graphql-scalars`

TODO: utworzyć modele dla potrzebnych kolekcji
TODO: dodać do "schema.js" niezbedne typy
TODO: utworzyc zapytania Query
TODO: utworzyc mutacje potrzebne
