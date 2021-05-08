const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send(`Hello, welcome to jenkins demo 2`);
});

app.listen(3000, () => {
    console.log('app is listening on port 3000');
})