const express = require('express');
const port = 3000;
const app = express();

app.get('/',(req, res)=>{
    res.send('Hello World, from express asep jajang nurjaya');
});

app.listen(port, () => console.log(`hello world app listening on port ${port}!`));