# Serverless-poc

Se crearon dos funciones lambda, la primera es una funcion simple y la segunda hace uso de express, y graphql

# Probar lambda (Postman)

## URL: https://tender-austin-5f4619.netlify.app/.netlify/functions/lambda

Para probar la función Lambda, se debe probar usando postman con la url de aquí arriba y pasandole en el body el siguiente objeto `JSON`

```javascript
{
  "name": "clsc"
}
```

# Probar API

## Url:https://tender-austin-5f4619.netlify.app/.netlify/functions/api

Para probar esta api graphql, se debe ingresar a la url de aquí arriba y en el panel de GRAPHiQL escribir lo siquiente:

```javascript
{
  message;
}
```
