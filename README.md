This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Crud com react, redux and json-server

## Getting started

Install JSON Server 

```
npm install -g json-server
```

Create a `produtos.json` file with some data

example

```json
{
  "produtos": [
    {
      "nome": "Lilian  santos",
      "preco": "500",
      "id": 8
    },
    {
      "nome": "Pastel de carne",
      "preco": "2,50",
      "id": 10
    },
    {
      "nome": "Pastel de pizza",
      "preco": "359,0",
      "id": 12
    },
    {
      "nome": "Bolinho de carne",
      "preco": "55,00",
      "id": 13
    },
    {
      "nome": "Bolinho de queijo",
      "preco": "1,500",
      "id": 14
    }
  ]
}
```

Start JSON Server

```bash
json-server --watch produtos.json --port 5000
```

Start aplication React 

### `npm start or yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
